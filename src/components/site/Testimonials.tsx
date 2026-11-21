import { Quote } from "lucide-react";
import { testimonials } from "@/src/components/site/links";

export default function Testimonials() {
  return (
    <section id="stories" className="scroll-mt-20 bg-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-balance font-display text-[2rem] font-bold leading-[1.14] tracking-[-0.02em] text-[#3d348b] sm:text-[2.5rem]">
            What students say.
          </h2>
          <p className="mt-3 text-base leading-[1.6] text-[#4B4863]">
            Real feedback from learners building confidence in reading, grammar,
            and everyday conversation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col justify-between rounded-2xl border border-[#E6E4F0] bg-[#FAF9F5]/75 p-6 transition-colors duration-200 hover:border-[#7678ed]/55 hover:bg-white"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <Quote
                    className="h-5 w-5 text-[#7678ed]"
                    aria-hidden={true}
                  />
                  <span className="font-heading text-xs font-semibold text-[#3d348b]">
                    {item.topic}
                  </span>
                </div>

                <blockquote className="mt-4 text-[0.95rem] leading-[1.65] text-[#2D2A42]">
                  “{item.before}
                  <mark className="rounded-sm bg-[#f7b801]/28 px-0.5 py-0.5 font-semibold text-[#1B192E] [box-decoration-break:clone]">
                    {item.highlight}
                  </mark>
                  {item.after}”
                </blockquote>
              </div>

              <figcaption className="mt-6 flex items-center justify-between border-t border-[#E6E4F0] pt-4 text-xs">
                <span className="font-heading font-semibold text-[#3d348b]">
                  {item.name}
                </span>
                <span className="text-[#64607D]">Course Student</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
