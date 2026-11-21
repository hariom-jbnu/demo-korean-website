import { Facebook, Instagram, Music2, Youtube } from "lucide-react";
import { SITE, socials } from "@/src/components/site/links";

const socialIcons = {
  TikTok: Music2,
  Instagram,
  YouTube: Youtube,
  Facebook,
};

const explore = [
  { label: "Courses & books", href: "#courses" },
  { label: "Learning path", href: "#roadmap" },
  { label: "Student reviews", href: "#stories" },
  { label: "Newsletter", href: "#signup" },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-[#E6E4F0] bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <img
                src={SITE.logo}
                alt="Korean with Ina logo"
                className="h-8 w-8 rounded-full border border-[#7678ed]/35 bg-[#FAF9F5] object-cover shrink-0"
              />
              <p className="font-display text-lg font-bold tracking-[-0.02em] text-[#3d348b]">
                Korean with Ina
              </p>
            </div>
            <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-[#4B4863]">
              Learning Korean can be simple and fun — one step at a time.
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-[#3d348b]">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#4B4863]">
              {explore.map((item) => (
                <li key={item.href}>
                  <a
                    className="cursor-pointer underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#f35b04] hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-[#3d348b]">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-[#4B4863]">
              <li>
                <a
                  className="cursor-pointer break-all underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#f35b04] hover:underline"
                  href={`mailto:${SITE.email}`}
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer underline-offset-4 decoration-[#7678ed] transition-colors duration-200 hover:text-[#f35b04] hover:underline"
                  href={SITE.tutoringHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  1:1 Korean tutoring
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[#E6E4F0] text-[#3d348b] transition-colors duration-200 hover:border-[#f35b04] hover:bg-[#FAF9F5] hover:text-[#f35b04]"
                  >
                    {Icon ? <Icon className="h-4 w-4" aria-hidden={true} /> : null}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-[#E6E4F0] pt-6 text-xs text-[#64607D]">
          © {new Date().getFullYear()} Korean with Ina. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
