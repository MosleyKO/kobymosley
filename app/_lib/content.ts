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

export const caseStudies: { name: string; sub?: string; blurb: string; tone: Tone; href: string; image?: string }[] = [
  { name: "DIXIE", sub: "Technical College", blurb: "Helping people believe a new future is possible.", tone: "stone", href: "#" },
  { name: "COLE WEST", blurb: "Helping families picture a place they'll call home.", tone: "ember", href: "#" },
  { name: "CRISPI", blurb: "Helping hunters trust the gear they'll depend on.", tone: "boot", href: "#" },
  { name: "OLLIN", sub: "Digiscope", blurb: "Helping more people discover the outdoors.", tone: "scope", href: "#" },
  { name: "HUNT PLAN", blurb: "Helping hunters spend less time planning and more time outside.", tone: "phone", href: "#" },
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
