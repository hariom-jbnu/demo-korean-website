import test from "node:test";
import assert from "node:assert/strict";
import {
  subscriberInputSchema,
  upsertSubscriberInList,
  type SubscriberRecord,
} from "./subscriber";

test("subscriberInputSchema trims names and lowercases email", () => {
  const parsed = subscriberInputSchema.parse({
    first_name: "  Mina  ",
    last_name: "  Park ",
    email: "  Mina.Park@Example.COM ",
  });

  assert.deepEqual(parsed, {
    first_name: "Mina",
    last_name: "Park",
    email: "mina.park@example.com",
  });
});

test("subscriberInputSchema rejects empty fields and invalid emails", () => {
  assert.throws(() =>
    subscriberInputSchema.parse({
      first_name: "   ",
      last_name: "Park",
      email: "mina@example.com",
    }),
  );

  assert.throws(() =>
    subscriberInputSchema.parse({
      first_name: "Mina",
      last_name: "Park",
      email: "not-an-email",
    }),
  );
});

test("upsertSubscriberInList creates a new subscriber and updates matching email", () => {
  const first = upsertSubscriberInList(
    [],
    { first_name: "Mina", last_name: "Park", email: "Mina@Example.com" },
    "2026-11-21T00:00:00.000Z",
    () => "sub-1",
  );

  assert.equal(first.status, "created");
  assert.equal(first.subscribers.length, 1);
  assert.equal(first.record.id, "sub-1");
  assert.equal(first.record.email, "mina@example.com");
  assert.equal(first.record.source, "homepage");

  const second = upsertSubscriberInList(
    first.subscribers,
    { first_name: "Mina-Ji", last_name: "Kim", email: "MINA@example.com" },
    "2026-11-21T01:00:00.000Z",
    () => "sub-2",
  );

  assert.equal(second.status, "updated");
  assert.equal(second.subscribers.length, 1);
  assert.deepEqual<SubscriberRecord>(second.record, {
    id: "sub-1",
    first_name: "Mina-Ji",
    last_name: "Kim",
    email: "mina@example.com",
    source: "homepage",
    createdAt: "2026-11-21T00:00:00.000Z",
    updatedAt: "2026-11-21T01:00:00.000Z",
  });
});
