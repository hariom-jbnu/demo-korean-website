export type CourseTrack = "all" | "foundations" | "sentences" | "speaking-books";

export interface CourseFilterable {
  name: string;
  track: Exclude<CourseTrack, "all">;
}

export const COURSE_TRACK_TABS: ReadonlyArray<{
  id: CourseTrack;
  label: string;
}> = [
  { id: "all", label: "All" },
  { id: "foundations", label: "Beginners" },
  { id: "sentences", label: "Grammar" },
  { id: "speaking-books", label: "Speaking & Books" },
];

export function filterCoursesByTrack<T extends CourseFilterable>(
  items: readonly T[],
  track: CourseTrack,
): T[] {
  if (track === "all") return [...items];
  return items.filter((item) => item.track === track);
}

export function countCoursesByTrack<T extends CourseFilterable>(
  items: readonly T[],
  track: CourseTrack,
): number {
  return filterCoursesByTrack(items, track).length;
}
