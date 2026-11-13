import Image from "next/image";

// Simple browser chrome around a screenshot so a website reads as a website.
export function BrowserFrame({
  src,
  width,
  height,
  alt,
  url,
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  url: string;
}) {
  return (
    <div className="overflow-hidden border border-line bg-surface">
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span aria-hidden className="size-2.5 rounded-full bg-foreground/25" />
        <span aria-hidden className="size-2.5 rounded-full bg-foreground/25" />
        <span aria-hidden className="size-2.5 rounded-full bg-foreground/25" />
        <span className="ml-3 truncate text-[0.7rem] tracking-wide text-muted">{url}</span>
      </div>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        priority
        sizes="(min-width: 1024px) 560px, 92vw"
        className="h-auto w-full"
      />
    </div>
  );
}
