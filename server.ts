import "dotenv/config";
import express from "express";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  subscriberInputSchema,
  upsertSubscriberInList,
  type SubscriberRecord,
} from "./src/lib/subscriber.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "data");
const SUBSCRIBERS_FILE = path.join(DATA_DIR, "subscribers.json");
const PORT = Number(process.env.PORT) || 3000;
const HOST = "0.0.0.0";

let writeQueue = Promise.resolve();

async function readSubscribers(): Promise<SubscriberRecord[]> {
  try {
    const raw = await fs.readFile(SUBSCRIBERS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw err;
  }
}

async function saveSubscribers(records: SubscriberRecord[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  const tempFile = `${SUBSCRIBERS_FILE}.tmp`;
  await fs.writeFile(tempFile, JSON.stringify(records, null, 2), "utf8");
  await fs.rename(tempFile, SUBSCRIBERS_FILE);
}

function enqueueWrite<T>(task: () => Promise<T>): Promise<T> {
  const next = writeQueue.then(task, task);
  writeQueue = next.then(
    () => undefined,
    () => undefined,
  );
  return next;
}

async function startServer() {
  const app = express();
  app.disable("x-powered-by");
  app.use(express.json({ limit: "16kb" }));

  app.get("/api/health", (_req, res) => {
    res.json({ ok: true });
  });

  app.post("/api/subscribe", async (req, res) => {
    const parsed = subscriberInputSchema.safeParse(req.body);
    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0];
      return res.status(400).json({
        ok: false,
        error: firstIssue?.message ?? "Please check your name and email.",
      });
    }

    try {
      const result = await enqueueWrite(async () => {
        const current = await readSubscribers();
        const upserted = upsertSubscriberInList(current, parsed.data);
        await saveSubscribers(upserted.subscribers);
        return upserted.status;
      });

      return res.status(200).json({ ok: true, status: result });
    } catch {
      return res.status(500).json({
        ok: false,
        error: "Unable to save your subscription right now. Please try again.",
      });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, "dist");
    app.use(express.static(distDir));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distDir, "index.html"));
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`);
  });
}

startServer();
