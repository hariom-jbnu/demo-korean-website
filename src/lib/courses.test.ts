import test from "node:test";
import assert from "node:assert/strict";
import { courses } from "../components/site/links";
import { countCoursesByTrack, filterCoursesByTrack } from "./courses";

test("filterCoursesByTrack returns all courses for 'all' and narrows by track", () => {
  assert.equal(filterCoursesByTrack(courses, "all").length, 5);
  assert.deepEqual(
    filterCoursesByTrack(courses, "foundations").map((c) => c.name),
    ["Read Korean Like a Pro"],
  );
  assert.deepEqual(
    filterCoursesByTrack(courses, "sentences").map((c) => c.name),
    ["Sentence Freedom", "The Game Changer"],
  );
  assert.deepEqual(
    filterCoursesByTrack(courses, "speaking-books").map((c) => c.name),
    ["Shadowing Studio", "Korean Book Bundle"],
  );
});

test("countCoursesByTrack matches filtered lengths", () => {
  assert.equal(countCoursesByTrack(courses, "all"), 5);
  assert.equal(countCoursesByTrack(courses, "foundations"), 1);
  assert.equal(countCoursesByTrack(courses, "sentences"), 2);
  assert.equal(countCoursesByTrack(courses, "speaking-books"), 2);
});
