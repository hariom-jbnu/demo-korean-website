import { Mail } from "lucide-react";
import { FULL_PACKAGE } from "@/src/components/site/links";

export default function FullPackage() {
  return (
    <section
      id="full-package"
      className="scroll-mt-20 border-b border-[#E6E4F0] bg-white py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 rounded-2xl border border-[#3d348b]/20 bg-[#FAF9F5] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="text-balance font-display text-[1.75rem] font-bold leading-[1.16] tracking-[-0.02em] text-[#3d348b] sm:text-[2.15rem]">
              {FULL_PACKAGE.heading}
            </h2>
            <p className="mt-3 text-base leading-[1.65] text-[#4B4863]">
              {FULL_PACKAGE.description}{" "}
              <mark className="rounded-sm bg-[#f7b801]/35 px-1.5 py-0.5 font-semibold text-[#1B192E]">
                {FULL_PACKAGE.discountHighlight}
              </mark>
            </p>
          </div>

          <div className="flex flex-col items-start gap-2.5 lg:items-end lg:shrink-0">
            <a
              href={FULL_PACKAGE.mailtoHref}
              className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-[#f18701] px-6 py-3 font-heading text-sm font-bold text-[#1B192E] whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#f35b04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d348b] focus-visible:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden={true} />
              <span>Email for 30% Discount</span>
            </a>
            <a
              href={FULL_PACKAGE.mailtoHref}
              className="text-xs font-medium text-[#3d348b] underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#f35b04] hover:underline"
            >
              {FULL_PACKAGE.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
