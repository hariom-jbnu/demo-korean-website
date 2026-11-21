import type { ComponentType } from "react";
import { ArrowUpRight, Infinity as InfinityIcon, PlayCircle, Signal } from "lucide-react";
import { ResponsiveImg } from "@/src/components/ui/ResponsiveImg";
import type { CourseItem } from "@/src/components/site/links";

interface CourseRowProps {
  course: CourseItem;
  Icon: ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  featured?: boolean;
}

export default function CourseRow({
  course,
  Icon,
  featured = false,
}: CourseRowProps) {
  if (featured) {
    return (
      <li className="group md:col-span-2 grid gap-6 rounded-2xl border border-[#E6E4F0] bg-[#FAF9F5] p-5 transition-colors duration-200 hover:border-[#7678ed]/70 sm:p-7 lg:grid-cols-[1.06fr_1fr] lg:items-center lg:gap-10">
        <a
          href={course.href}
          target="_blank"
          rel="noreferrer"
          className="block cursor-pointer overflow-hidden rounded-xl bg-white p-4"
        >
          <div className="aspect-[16/10]">
            <ResponsiveImg
              src={course.image}
              alt={`${course.name} materials`}
              fit="contain"
            />
          </div>
        </a>

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-[#3d348b]">
              <Icon className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
              <span>{course.kind}</span>
            </span>
            {course.highlight ? (
              <span className="rounded bg-[#f7b801]/30 px-2 py-0.5 font-heading text-xs font-bold text-[#1B192E]">
                {course.highlight}
              </span>
            ) : null}
          </div>

          <h3 className="mt-3 font-display text-2xl font-bold leading-snug tracking-[-0.015em] text-[#3d348b] sm:text-[1.85rem]">
            <a
              href={course.href}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer transition-colors duration-200 hover:text-[#f35b04] focus-visible:outline-none focus-visible:underline"
            >
              {course.name}
            </a>
          </h3>

          <p className="mt-3 max-w-[54ch] text-[0.95rem] leading-[1.65] text-[#4B4863]">
            {course.promise}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-[#4B4863] tabular-nums">
            <span className="flex items-center gap-1.5">
              <PlayCircle className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
              {course.lessons}
            </span>
            <span className="flex items-center gap-1.5">
              <InfinityIcon className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
              {course.access}
            </span>
            <a
              href={course.levelHref}
              className="flex cursor-pointer items-center gap-1.5 text-[#3d348b] underline-offset-4 decoration-[#7678ed]/60 transition-colors duration-200 hover:text-[#f35b04] hover:underline"
            >
              <Signal className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
              {course.level}
            </a>
          </div>

          <div className="mt-6">
            <a
              href={course.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${course.name}`}
              className="inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#f18701] px-5 py-2.5 font-heading text-sm font-bold text-[#1B192E] whitespace-nowrap transition-colors duration-200 hover:bg-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b] focus-visible:ring-offset-2"
            >
              <span>Explore course</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden={true} />
            </a>
          </div>
        </div>
      </li>
    );
  }

  return (
    <li className="group flex flex-col justify-between rounded-2xl border border-[#E6E4F0] bg-white p-5 transition-colors duration-200 hover:border-[#7678ed]/70 sm:p-6">
      <div>
        <a
          href={course.href}
          target="_blank"
          rel="noreferrer"
          className="block cursor-pointer overflow-hidden rounded-xl bg-[#FAF9F5] p-3.5"
        >
          <div className="aspect-[16/10]">
            <ResponsiveImg
              src={course.image}
              alt={`${course.name} materials`}
              fit="contain"
            />
          </div>
        </a>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 font-heading text-xs font-semibold text-[#3d348b]">
            <Icon className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
            <span>{course.kind}</span>
          </span>
          {course.highlight ? (
            <span className="rounded bg-[#f7b801]/30 px-2 py-0.5 font-heading text-xs font-bold text-[#1B192E]">
              {course.highlight}
            </span>
          ) : null}
        </div>

        <h3 className="mt-2.5 font-display text-xl font-bold leading-snug tracking-[-0.015em] text-[#3d348b] sm:text-2xl">
          <a
            href={course.href}
            target="_blank"
            rel="noreferrer"
            className="cursor-pointer transition-colors duration-200 hover:text-[#f35b04] focus-visible:outline-none focus-visible:underline"
          >
            {course.name}
          </a>
        </h3>

        <p className="mt-2.5 max-w-[54ch] text-sm leading-[1.6] text-[#4B4863]">
          {course.promise}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6E4F0] pt-4">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-[#4B4863] tabular-nums">
          <span className="flex items-center gap-1.5">
            <PlayCircle className="h-3.5 w-3.5 text-[#7678ed]" aria-hidden={true} />
            {course.lessons}
          </span>
          <a
            href={course.levelHref}
            className="flex cursor-pointer items-center gap-1.5 text-[#3d348b] underline-offset-4 decoration-[#7678ed]/60 transition-colors duration-200 hover:text-[#f35b04] hover:underline"
          >
            <Signal className="h-3.5 w-3.5 text-[#7678ed]" aria-hidden={true} />
            {course.level}
          </a>
        </div>

        <a
          href={course.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`View ${course.name}`}
          className="inline-flex min-h-[40px] cursor-pointer items-center justify-center gap-1.5 rounded-lg border border-[#3d348b]/25 bg-white px-4 py-2 font-heading text-xs font-bold text-[#3d348b] whitespace-nowrap shrink-0 transition-colors duration-200 group-hover:border-[#f18701] group-hover:bg-[#f18701] group-hover:text-[#1B192E] hover:!bg-[#f35b04] hover:!border-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b]"
        >
          <span>View details</span>
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden={true} />
        </a>
      </div>
    </li>
  );
}
