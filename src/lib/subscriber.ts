import { z } from "zod";

export const subscriberInputSchema = z.object({
  first_name: z
    .string()
    .trim()
    .min(1, "Please enter your first name.")
    .max(80, "First name must be 80 characters or fewer."),
  last_name: z
    .string()
    .trim()
    .min(1, "Please enter your last name.")
    .max(80, "Last name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
});

export type SubscriberInput = z.infer<typeof subscriberInputSchema>;

export interface SubscriberRecord extends SubscriberInput {
  id: string;
  source: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpsertResult {
  status: "created" | "updated";
  record: SubscriberRecord;
  subscribers: SubscriberRecord[];
}

export function upsertSubscriberInList(
  existing: SubscriberRecord[],
  input: SubscriberInput,
  nowIso: string = new Date().toISOString(),
  idFactory: () => string = () => crypto.randomUUID(),
): UpsertResult {
  const normalized = subscriberInputSchema.parse(input);
  const index = existing.findIndex((item) => item.email === normalized.email);

  if (index >= 0) {
    const updated: SubscriberRecord = {
      ...existing[index],
      first_name: normalized.first_name,
      last_name: normalized.last_name,
      updatedAt: nowIso,
    };
    const nextList = [...existing];
    nextList[index] = updated;
    return { status: "updated", record: updated, subscribers: nextList };
  }

  const created: SubscriberRecord = {
    id: idFactory(),
    first_name: normalized.first_name,
    last_name: normalized.last_name,
    email: normalized.email,
    source: "homepage",
    createdAt: nowIso,
    updatedAt: nowIso,
  };

  return {
    status: "created",
    record: created,
    subscribers: [...existing, created],
  };
}
