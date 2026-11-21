import { useState, type ChangeEvent, type FormEvent } from "react";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { subscriberInputSchema } from "@/src/lib/subscriber";

const EMPTY = { first_name: "", last_name: "", email: "" };

export default function EmailSignup() {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<"idle" | "saving" | "done" | "error">("idle");
  const [error, setError] = useState("");

  const setField =
    (key: keyof typeof EMPTY) => (event: ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: event.target.value }));
      if (error) setError("");
    };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const validated = subscriberInputSchema.safeParse(form);
    if (!validated.success) {
      setStatus("error");
      setError(
        validated.error.issues[0]?.message ??
          "Please check your name and email address.",
      );
      return;
    }

    setStatus("saving");
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated.data),
      });

      const payload = await response.json().catch(() => ({}));
      if (!response.ok || !payload?.ok) {
        setStatus("error");
        setError(
          typeof payload?.error === "string"
            ? payload.error
            : "That didn't go through. Please try again, or email me directly.",
        );
        return;
      }

      setStatus("done");
      setForm(EMPTY);
    } catch {
      setStatus("error");
      setError("That didn't go through. Please try again, or email me directly.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-[#DCD8EB] bg-white px-4 py-3 text-sm text-[#1B192E] placeholder:text-[#9A96B0] focus:border-[#7678ed] focus:outline-none focus:ring-2 focus:ring-[#7678ed]/25";

  return (
    <section
      id="signup"
      className="scroll-mt-20 border-t border-[#E6E4F0] bg-[#FAF9F5] px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#E6E4F0] bg-white p-7 sm:p-10 shadow-xs">
        {status === "done" ? (
          <div className="py-6 text-center" role="status">
            <CheckCircle2
              className="mx-auto h-9 w-9 text-[#15803D]"
              aria-hidden={true}
            />
            <p className="mt-4 font-display text-2xl font-bold text-[#3d348b] sm:text-3xl">
              You're on the list.
            </p>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-[#4B4863]">
              Look out for Korean study tips, early access to new courses, and
              updates from the studio.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setError("");
              }}
              className="mt-6 inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-lg border border-[#E6E4F0] px-5 py-2 font-heading text-xs font-semibold text-[#3d348b] transition-colors duration-200 hover:border-[#7678ed] hover:text-[#f35b04]"
            >
              Add another email
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-display text-[1.85rem] font-bold leading-tight tracking-[-0.02em] text-[#3d348b] sm:text-[2.2rem]">
              Join the Newsletter
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#4B4863] sm:text-[0.95rem]">
              Korean study tips, early access to new courses, and the updates I
              only share with subscribers.
            </p>
            <form onSubmit={handleSubmit} noValidate className="mt-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block font-heading text-xs font-semibold text-[#3d348b]"
                  >
                    First name
                  </label>
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    required
                    maxLength={80}
                    autoComplete="given-name"
                    placeholder="Mina"
                    value={form.first_name}
                    onChange={setField("first_name")}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block font-heading text-xs font-semibold text-[#3d348b]"
                  >
                    Last name
                  </label>
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    required
                    maxLength={80}
                    autoComplete="family-name"
                    placeholder="Park"
                    value={form.last_name}
                    onChange={setField("last_name")}
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="email"
                  className="block font-heading text-xs font-semibold text-[#3d348b]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={setField("email")}
                  className={inputClass}
                />
              </div>
              {error ? (
                <p
                  className="mt-4 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700"
                  role="alert"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden={true} />
                  <span>{error}</span>
                </p>
              ) : null}
              <button
                type="submit"
                disabled={status === "saving"}
                className="mt-6 inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-lg bg-[#f18701] px-7 font-heading text-sm font-bold text-[#1B192E] transition-colors duration-200 hover:bg-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "saving" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
