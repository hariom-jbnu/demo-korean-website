import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/src/lib/utils";

interface ResponsiveImgProps {
  src: string;
  alt: string;
  className?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
}

export function ResponsiveImg({
  src,
  alt,
  className,
  fit = "cover",
  priority = false,
}: ResponsiveImgProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-2 bg-[#FAF9F5] p-4 text-center text-xs text-[#4B4863]",
          className,
        )}
      >
        <ImageOff className="h-5 w-5 text-[#7678ed]" aria-hidden={true} />
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={cn(
        "block h-full w-full",
        fit === "contain" ? "object-contain" : "object-cover",
        className,
      )}
    />
  );
}
