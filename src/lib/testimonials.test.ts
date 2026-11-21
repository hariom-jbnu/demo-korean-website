import test from "node:test";
import assert from "node:assert/strict";
import { testimonials } from "../components/site/links";
import {
  DEFAULT_VISIBLE_TESTIMONIALS,
  getHiddenTestimonialsCount,
  getVisibleTestimonials,
} from "./testimonials";

test("all 15 student testimonials from original site are preserved", () => {
  assert.equal(testimonials.length, 15);
});

test("getVisibleTestimonials returns initial batch when collapsed and all when expanded", () => {
  const collapsed = getVisibleTestimonials(testimonials, false);
  const expanded = getVisibleTestimonials(testimonials, true);

  assert.equal(collapsed.length, DEFAULT_VISIBLE_TESTIMONIALS);
  assert.equal(expanded.length, 15);
  assert.equal(getHiddenTestimonialsCount(testimonials.length), 9);
  assert.equal(getHiddenTestimonialsCount(4), 0);
});
