import { SITE } from "@/src/components/site/links";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E4F0] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-8 px-4 sm:h-[72px] sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex cursor-pointer items-center gap-2.5 whitespace-nowrap shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7678ed] focus-visible:ring-offset-2"
        >
          <img
            src={SITE.logo}
            alt="Korean with Ina logo"
            className="h-9 w-9 rounded-full border border-[#7678ed]/35 bg-[#FAF9F5] object-cover shrink-0"
          />
          <span className="font-display text-lg font-bold tracking-[-0.02em] text-[#3d348b] sm:text-xl">
            Korean with Ina
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 text-sm font-medium text-[#3d348b]/85 md:flex"
        >
          <a
            className="cursor-pointer whitespace-nowrap shrink-0 underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#3d348b] hover:underline focus-visible:outline-none focus-visible:text-[#f35b04]"
            href="#courses"
          >
            Courses
          </a>
          <a
            className="cursor-pointer whitespace-nowrap shrink-0 underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#3d348b] hover:underline focus-visible:outline-none focus-visible:text-[#f35b04]"
            href="#roadmap"
          >
            Learning Path
          </a>
          <a
            className="cursor-pointer whitespace-nowrap shrink-0 underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#3d348b] hover:underline focus-visible:outline-none focus-visible:text-[#f35b04]"
            href="#stories"
          >
            Student Reviews
          </a>
          <a
            className="cursor-pointer whitespace-nowrap shrink-0 underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#3d348b] hover:underline focus-visible:outline-none focus-visible:text-[#f35b04]"
            href={SITE.tutoringHref}
            target="_blank"
            rel="noreferrer"
          >
            1:1 Tutoring
          </a>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            className="hidden min-h-[40px] cursor-pointer items-center justify-center rounded-lg bg-[#f18701] px-5 py-2 font-heading text-sm font-bold text-[#1B192E] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b] focus-visible:ring-offset-2 md:inline-flex"
            href="#signup"
          >
            Join Newsletter
          </a>
          <a
            className="inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-lg bg-[#f18701] px-4 py-2 font-heading text-xs font-bold text-[#1B192E] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#f35b04] md:hidden"
            href="#courses"
          >
            Courses
          </a>
        </div>
      </div>
    </header>
  );
}
