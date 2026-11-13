"use client";

import Image from "next/image";
import { useRef } from "react";

// Thumbnail button that opens the full-size image in a native <dialog>.
// <dialog> gives focus trapping, Esc to close and a backdrop; clicking the backdrop also closes it.
export function ImageDialog({
  src,
  width,
  height,
  alt,
  label,
  thumbClassName = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  thumbClassName?: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        type="button"
        onClick={() => ref.current?.showModal()}
        aria-label={label}
        className="group relative block cursor-zoom-in focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          sizes="(min-width: 768px) 360px, 90vw"
          className={`h-auto w-full border border-line ${thumbClassName}`}
        />
        <span className="eyebrow absolute bottom-3 right-3 bg-black/70 px-3 py-2 text-[0.55rem] text-foreground opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          View full size
        </span>
      </button>

      <dialog
        ref={ref}
        aria-label={alt}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
        className="m-auto max-h-[92vh] w-[min(92vw,900px)] overflow-auto border border-line bg-surface p-0 text-foreground backdrop:bg-black/80"
      >
        <form method="dialog" className="sticky top-0 flex justify-end bg-surface/95 p-3">
          <button
            autoFocus
            className="eyebrow border border-foreground/40 px-4 py-2 text-[0.58rem] transition-colors hover:border-accent hover:text-accent"
          >
            Close
          </button>
        </form>
        <Image src={src} width={width} height={height} alt={alt} sizes="900px" className="h-auto w-full" />
      </dialog>
    </>
  );
}
