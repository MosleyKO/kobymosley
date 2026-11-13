// All page copy lives here. Set `image` to a path under /public/images to replace a placeholder.
export type Tone =
  | "river" | "camp" | "boot" | "scope" | "phone" | "elk" | "trout"
  | "peaks" | "lake" | "glass" | "dusk" | "stone" | "ember";

export const nav = [
  { label: "The Pursuit", href: "#pursuit" },
  { label: "Stories", href: "#stories" },
  { label: "Field Notes", href: "#field-notes" },
  { label: "Photography", href: "#photography" },
  { label: "Connect", href: "#connect" },
];

export const values = [
  { icon: "peaks", title: "Freedom", body: "I'm not chasing money. I'm chasing the freedom to spend another morning on a river, listening to an elk bugle before sunrise." },
  { icon: "people", title: "Connection", body: "Whether it's family, friends, or strangers on a riverbank, the best memories I've ever had have always been shared with people." },
  { icon: "compass", title: "Curiosity", body: "I've never stopped asking why. Curiosity drives me to keep learning, exploring, and creating — both in my work and in life." },
] as const;

// Featured lineup, in display order. Cards without `image` render a gradient placeholder.
export const caseStudies: { name: string; sub?: string; blurb: string; tone: Tone; href: string; image?: string; position?: string }[] = [
  // Framed slightly left of center: the student's face sits ~20% from the left edge, the mill runs out to ~70%.
  { name: "DIXIE TECH", sub: "Marketing & Web Design Lead", blurb: "I lead marketing and web design, from how students explore programs to the recruitment campaigns and photos that bring them in.", tone: "stone", href: "#", image: "/images/dixie.webp", position: "35% 50%" },
  // Photo: Hunt Plan (2).png from Drive. TODO: swap in a planner screenshot with a hunt open when available.
  { name: "HUNT PLAN", sub: "Founder", blurb: "I built Hunt Plan from the ground up to help hunters analyze draw odds, plan their seasons, and get field advice from an AI built for hunters.", tone: "phone", href: "#", image: "/images/huntplan.webp", position: "75% 40%" },
  // Photo: Cole West.png from Drive (house at dusk, no lettering).
  { name: "COLE WEST", sub: "Marketing Manager", blurb: "I ran email, digital, and billboard campaigns that connected marketing and sales and helped buyers find move-in-ready homes.", tone: "ember", href: "#", image: "/images/colewest.webp", position: "40% 50%" },
  // Photo: "Aries booklet and card on limestone.png" from Drive (1536x1024, native). An installed-register photo can replace it later.
  { name: "ARIES DESIGN CO.", sub: "Brand Identity & Sales Materials", blurb: "I built Aries’ brand identity and sales materials to position its custom architectural air registers for a national market.", tone: "glass", href: "#", image: "/images/aries.webp", position: "50% 50%" },
  // Photo: Blue Bolt.png from Drive (owner with the logo van). "Blue Bolt (2).png" is a site screenshot if we want that instead.
  { name: "BLUEBOLT ELECTRIC", sub: "Brand Identity & Web Design", blurb: "I created the brand and built the website to help an electrical and permanent lighting business win new jobs.", tone: "scope", href: "#", image: "/images/bluebolt.webp", position: "50% 25%" },
  // Hero section of the live site (mcguireplumbingllc.com), captured 2026-11-12.
  { name: "McGUIRE PLUMBING", sub: "Brand Identity & Web Design", blurb: "I designed the brand and built the website around Seth’s story as a veteran and his old-school approach to plumbing.", tone: "boot", href: "#", image: "/images/mcguire.webp", position: "50% 50%" },
];

export const fieldNotes: { date: string; title: string; blurb: string; read: string; tone: Tone; href: string; image?: string }[] = [
  { date: "June 3, 2024", title: "The Log", blurb: "A place in the Box Canyon where time slows down and the golden stone hatch comes alive.", read: "5 min read", tone: "river", href: "#" },
  { date: "May 16, 2024", title: "What Hunting Has Taught Me", blurb: "Lessons on patience, preparation, and the pursuit of something bigger than yourself.", read: "6 min read", tone: "elk", href: "#" },
  { date: "April 22, 2024", title: "Freedom", blurb: "What freedom really means to me and why I choose it in every decision I make.", read: "4 min read", tone: "ember", href: "#" },
  { date: "April 8, 2024", title: "Marketing Is Human", blurb: "At the bottom of every click, every email, and every sale — there's a human being.", read: "4 min read", tone: "trout", href: "#" },
  { date: "March 19, 2024", title: "My Dad Never Tried To Teach Me", blurb: "He didn't have to. He just lived it — and I paid attention.", read: "6 min read", tone: "glass", href: "#" },
];

export const gallery: { tone: Tone; alt: string; image?: string; position?: string }[] = [
  { tone: "elk", alt: "Bull elk at sunset" },
  { tone: "river", alt: "Winding river valley" },
  { tone: "trout", alt: "Trout held in hand" },
  { tone: "peaks", alt: "Sepia portrait from firefighting graduation", image: "/images/gallery-3.webp", position: "62% 40%" },
  // The boardwalk source is a letterboxed screenshot (black bars top and bottom); keep the crop inside them.
  { tone: "lake", alt: "Boardwalk winding through old-growth forest", image: "/images/gallery-2.webp", position: "50% 55%" },
  { tone: "scope", alt: "Ski lodge below snow-capped peaks", image: "/images/gallery-1.webp", position: "35% 60%" },
];
