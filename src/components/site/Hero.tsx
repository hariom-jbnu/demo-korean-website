import { ArrowRight, BookOpen, Infinity as InfinityIcon, PlayCircle } from "lucide-react";
import { ResponsiveImg } from "@/src/components/ui/ResponsiveImg";
import { portraits } from "@/src/components/site/links";

const PROOF = [
  { icon: BookOpen, label: "5 books + 4 bonuses" },
  { icon: PlayCircle, label: "4 video courses" },
  { icon: InfinityIcon, label: "Lifetime access" },
];

export default function Hero() {
  return (
    <section className="bg-[#FAF9F5]">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-8">
        <div>
          <h1 className="text-balance font-display text-[clamp(2.35rem,4.4vw,3.75rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[#3d348b]">
            Learning Korean can be simple and fun.
          </h1>
          <p className="mt-5 max-w-[54ch] text-base leading-[1.65] text-[#4B4863] sm:text-[1.075rem]">
            I hope learning does not stay behind in 3rd grade, but becomes
            something you can enjoy deeply as an adult too — with clear,
            structured Korean courses for Hangul, vocabulary, and everyday
            sentences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href="#courses"
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#f18701] px-6 py-3 font-heading text-sm font-bold text-[#1B192E] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b] focus-visible:ring-offset-2"
            >
              Browse Courses
              <ArrowRight className="h-4 w-4" aria-hidden={true} />
            </a>
            <a
              href="#roadmap"
              className="inline-flex min-h-[48px] cursor-pointer items-center gap-2 rounded-lg border border-[#3d348b]/25 bg-white px-5 py-3 font-heading text-sm font-semibold text-[#3d348b] whitespace-nowrap shrink-0 transition-colors duration-200 hover:border-[#7678ed] hover:bg-[#7678ed]/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7678ed] focus-visible:ring-offset-2"
            >
              See the Learning Path
              <ArrowRight className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#E6E4F0] pt-6 text-sm text-[#4B4863]">
            {PROOF.map((item) => (
              <li key={item.label} className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#7678ed]/12 text-[#3d348b]">
                  <item.icon className="h-4 w-4 text-[#7678ed]" aria-hidden={true} />
                </span>
                <span className="font-medium">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-[360px] lg:max-w-none">
          <div className="relative">
            <div
              className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full rounded-2xl bg-[#7678ed]/12 sm:block"
              aria-hidden={true}
            />
            <div className="relative overflow-hidden rounded-2xl border border-[#E6E4F0] bg-white shadow-xs">
              <div className="aspect-[4/5]">
                <ResponsiveImg
                  src={portraits.main}
                  alt="Ina, Korean teacher and founder of Korean with Ina"
                  fit="cover"
                  priority
                />
              </div>
              <div className="flex items-center justify-between border-t border-[#E6E4F0] bg-white px-5 py-3.5 text-xs text-[#4B4863]">
                <span className="font-display text-sm font-semibold text-[#3d348b]">
                  Ina Kim
                </span>
                <span className="inline-flex items-center gap-2 font-medium">
                  <span className="h-2 w-2 rounded-sm bg-[#f7b801]" aria-hidden={true} />
                  <span>Founder &amp; Korean Instructor</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
