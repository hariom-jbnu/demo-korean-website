import { ArrowUpRight } from "lucide-react";
import { roadmapSteps } from "@/src/components/site/links";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="scroll-mt-20 border-y border-[#E6E4F0] bg-[#FAF9F5] py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-[2rem] font-bold leading-[1.14] tracking-[-0.02em] text-[#3d348b] sm:text-[2.5rem]">
            Not sure where to start?
          </h2>
          <p className="mt-3 text-base leading-[1.6] text-[#4B4863]">
            Six steps, in the order most students follow them. Pick the one that
            matches where you are now.
          </p>
        </div>

        <ol className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {roadmapSteps.map((step, index) => {
            const isFirstStep = index === 0;
            return (
              <li
                key={step.id}
                id={step.id}
                className={`scroll-mt-24 flex flex-col justify-between border-t-2 pt-5 transition-colors duration-200 ${
                  isFirstStep
                    ? "border-[#f7b801]"
                    : "border-[#3d348b]/20 hover:border-[#7678ed]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-heading text-xs font-bold text-[#7678ed] tabular-nums">
                      Step {index + 1}
                    </p>
                    {isFirstStep ? (
                      <span className="rounded bg-[#f7b801]/30 px-2 py-0.5 font-heading text-xs font-bold text-[#1B192E]">
                        Start here
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold leading-snug text-[#3d348b]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-[#4B4863]">
                    {step.body}
                  </p>
                </div>

                <div className="mt-5 space-y-2.5 pt-2">
                  {step.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex cursor-pointer items-start justify-between gap-2 text-sm text-[#3d348b] transition-colors duration-200 hover:text-[#f35b04]"
                    >
                      <span className="min-w-0">
                        <span className="border-b border-[#7678ed]/55 pb-px font-medium transition-colors duration-200 group-hover:border-[#f35b04]">
                          {link.label}
                        </span>
                        <span className="ml-2 text-xs text-[#64607D]">
                          ({link.note})
                        </span>
                      </span>
                      <ArrowUpRight
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#7678ed] transition-colors duration-200 group-hover:text-[#f35b04]"
                        aria-hidden={true}
                      />
                    </a>
                  ))}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
