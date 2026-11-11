import type { Tone } from "../_lib/content";

// Placeholder gradients until real photography is dropped into /public/images.
const tones: Record<Tone, string> = {
  river: "linear-gradient(160deg,#2a3a33 0%,#1a2420 55%,#3b3629 100%)",
  camp: "linear-gradient(120deg,#4a3a3a 0%,#2b2a2f 50%,#c0763c 100%)",
  boot: "linear-gradient(150deg,#5a4630 0%,#2a241c 70%)",
  scope: "linear-gradient(150deg,#3a3d40 0%,#16181a 70%)",
  phone: "linear-gradient(150deg,#6a4a3c 0%,#2a2220 70%)",
  elk: "linear-gradient(160deg,#6d4a2e 0%,#2d2418 60%,#171410 100%)",
  trout: "linear-gradient(160deg,#6b6a45 0%,#2a2c24 70%)",
  peaks: "linear-gradient(170deg,#c07a4a 0%,#4a4048 45%,#1e2226 100%)",
  lake: "linear-gradient(170deg,#4f6068 0%,#26332f 70%)",
  glass: "linear-gradient(160deg,#6a6a68 0%,#26282a 70%)",
  dusk: "linear-gradient(170deg,#b9774c 0%,#3a3238 50%,#14171a 100%)",
  stone: "linear-gradient(160deg,#6e5648 0%,#2c2420 70%)",
  ember: "linear-gradient(160deg,#6b5036 0%,#241c16 70%)",
};

export function Photo({
  tone,
  image,
  alt,
  className = "",
  position,
}: {
  tone: Tone;
  image?: string;
  alt: string;
  className?: string;
  position?: string; // CSS background-position, to keep faces in frame when cropped
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`bg-cover bg-center ${className}`}
      style={{
        backgroundImage: image ? `url(${image})` : tones[tone],
        ...(position && { backgroundPosition: position }),
      }}
    />
  );
}
