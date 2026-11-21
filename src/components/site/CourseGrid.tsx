import { useState } from "react";
import { BookMarked, BookOpen, Layers, Mic, PlayCircle } from "lucide-react";
import { courses } from "@/src/components/site/links";
import CourseRow from "@/src/components/site/CourseRow";
import {
  COURSE_TRACK_TABS,
  countCoursesByTrack,
  filterCoursesByTrack,
  type CourseTrack,
} from "@/src/lib/courses";
import { cn } from "@/src/lib/utils";

const ICONS = {
  play: PlayCircle,
  layers: Layers,
  book: BookOpen,
  mic: Mic,
  bundle: BookMarked,
};

export default function CourseGrid() {
  const [activeTrack, setActiveTrack] = useState<CourseTrack>("all");
  const visibleCourses = filterCoursesByTrack(courses, activeTrack);

  const showSpotlight = visibleCourses.length === 1 || visibleCourses.length >= 3;

  return (
    <section
      id="courses"
      className="scroll-mt-20 border-t border-[#E6E4F0] bg-white py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <h2 className="text-balance font-display text-[2rem] font-bold leading-[1.14] tracking-[-0.02em] text-[#3d348b] sm:text-[2.5rem]">
              Courses &amp; books
            </h2>
            <p className="mt-3 text-base leading-[1.6] text-[#4B4863]">
              Self-paced, clearly explained, and made for adults learning Korean
              from the beginning.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter courses by stage"
            className="inline-flex flex-wrap items-center gap-1 self-start rounded-lg border border-[#E6E4F0] bg-[#FAF9F5] p-1 sm:flex-nowrap lg:self-end lg:shrink-0"
          >
            {COURSE_TRACK_TABS.map((tab) => {
              const count = countCoursesByTrack(courses, tab.id);
              const isSelected = activeTrack === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveTrack(tab.id)}
                  className={cn(
                    "min-h-[36px] cursor-pointer rounded-md px-3.5 py-1.5 font-heading text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f35b04]",
                    isSelected
                      ? "bg-[#3d348b] text-white shadow-xs"
                      : "text-[#4B4863] hover:bg-[#7678ed]/10 hover:text-[#3d348b]",
                  )}
                >
                  {tab.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        <ul className="mt-10 grid gap-6 md:grid-cols-2 sm:mt-12">
          {visibleCourses.map((course, idx) => (
            <CourseRow
              key={course.name}
              course={course}
              Icon={ICONS[course.icon] ?? BookOpen}
              featured={showSpotlight && idx === 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
