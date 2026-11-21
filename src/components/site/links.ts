import type { CourseTrack } from "@/src/lib/courses";

const BASE = "https://www.inakimie.com";

export interface CourseItem {
  name: string;
  kind: string;
  track: Exclude<CourseTrack, "all">;
  icon: "play" | "layers" | "book" | "mic" | "bundle";
  highlight?: string;
  promise: string;
  lessons: string;
  access: string;
  level: string;
  levelHref: string;
  href: string;
  image: string;
}

export interface RoadmapLink {
  label: string;
  note: string;
  href: string;
}

export interface RoadmapStep {
  id: string;
  number: string;
  title: string;
  body: string;
  links: RoadmapLink[];
}

export interface TestimonialItem {
  topic: string;
  before: string;
  highlight: string;
  after: string;
  name: string;
}

export interface SocialItem {
  label: "TikTok" | "Instagram" | "YouTube" | "Facebook";
  href: string;
}

export const SITE = {
  name: "Korean with Ina",
  logo: "/images/ina-logo.png",
  email: "inakimie2822@gmail.com",
  poBox: "6230 Irvine Blvd, unit 1075, Irvine, CA 92620",
  tutoringHref: `${BASE}/koreantutoring`,
} as const;

export const portraits = {
  main: "/images/ina-portrait.webp",
} as const;

export const courses: CourseItem[] = [
  {
    name: "Read Korean Like a Pro",
    kind: "Video course",
    track: "foundations",
    icon: "play",
    highlight: "Start here",
    promise:
      "Read, write, and pronounce Hangul in two weeks, with step-by-step lessons and live Q&A support.",
    lessons: "39 video lessons",
    access: "Lifetime access",
    level: "Complete beginner",
    levelHref: "#step-foundations",
    href: `${BASE}/readkoreanlikeapro`,
    image: "/images/read-korean-like-a-pro.webp",
  },
  {
    name: "Sentence Freedom",
    kind: "Video course",
    track: "sentences",
    icon: "layers",
    promise:
      "Turn the words you know into real sentences — particles, tenses, and word order finally connected.",
    lessons: "57 video lessons",
    access: "Lifetime access",
    level: "Elementary",
    levelHref: "#step-sentences",
    href: `${BASE}/sentence-freedom`,
    image: "/images/sentence-freedom.webp",
  },
  {
    name: "The Game Changer",
    kind: "Grammar course",
    track: "sentences",
    icon: "book",
    promise:
      "Build sentences on the spot with the patterns Korean speakers actually use, backed by hundreds of examples.",
    lessons: "331 pattern lessons",
    access: "Lifetime access",
    level: "Intermediate",
    levelHref: "#step-patterns",
    href: `${BASE}/gamechanger`,
    image: "/images/game-changer.webp",
  },
  {
    name: "Shadowing Studio",
    kind: "Speaking practice",
    track: "speaking-books",
    icon: "mic",
    promise:
      "Train your ear, rhythm, and pronunciation with guided shadowing dialogues you can repeat out loud.",
    lessons: "56 shadowing videos",
    access: "3-month program",
    level: "Any level",
    levelHref: "#step-speaking",
    href: `${BASE}/shadowing-studio`,
    image: "/images/shadowing-studio.webp",
  },
  {
    name: "Korean Book Bundle",
    kind: "Ebook bundle",
    track: "speaking-books",
    icon: "bundle",
    highlight: "9-book set",
    promise:
      "Five ebooks covering reading, verbs, vocabulary, speaking, and travel, plus four bonus books.",
    lessons: "5 ebooks + 4 bonuses",
    access: "Instant download",
    level: "All levels",
    levelHref: "#roadmap",
    href: `${BASE}/koreanebooks`,
    image: "/images/korean-book-bundle.webp",
  },
];

export const roadmapSteps: RoadmapStep[] = [
  {
    id: "step-foundations",
    number: "01",
    title: "Complete beginners",
    body: "The very first step is Hangul. Everything builds on this, so don't skip it.",
    links: [
      {
        label: "Read Korean Step by Step",
        note: "$7 book",
        href: `${BASE}/readkoreanstepbystep`,
      },
      {
        label: "Read Korean Like a Pro",
        note: "video course",
        href: `${BASE}/readkoreanlikeapro`,
      },
    ],
  },
  {
    id: "step-vocab",
    number: "02",
    title: "Grow your vocabulary",
    body: "Lack of vocabulary holds you back in every area of Korean. Start with foundation words you can use right away.",
    links: [
      {
        label: "Ultimate Vocabulary Power Pack",
        note: "2,206+ words",
        href: `${BASE}/vocab-power-pack`,
      },
    ],
  },
  {
    id: "step-speaking",
    number: "03",
    title: "Speaking & pronunciation",
    body: "Learn phrases you can use anywhere, and practice tone, rhythm, and flow with real conversations.",
    links: [
      {
        label: "Speak Korean Anywhere",
        note: "essential phrases",
        href: `${BASE}/speakkoreananywhere`,
      },
      {
        label: "Shadowing Studio",
        note: "speaking practice",
        href: `${BASE}/shadowing-studio`,
      },
    ],
  },
  {
    id: "step-sentences",
    number: "04",
    title: "Make sentences",
    body: "You can read and you know some words. Now build your own sentences — present, past, and future.",
    links: [
      {
        label: "Sentence Freedom",
        note: "particle lessons included",
        href: `${BASE}/sentence-freedom`,
      },
    ],
  },
  {
    id: "step-patterns",
    number: "05",
    title: "Expand your sentences",
    body: "Your sentences work, but they feel limited. Expand what you can say with the essential patterns.",
    links: [
      {
        label: "The Game Changer",
        note: "331 patterns",
        href: `${BASE}/gamechanger`,
      },
    ],
  },
  {
    id: "step-travel",
    number: "06",
    title: "Going to Korea?",
    body: "Get trip-ready with personal recommendations and the phrases you'll actually use on the ground.",
    links: [
      {
        label: "Korea Travel Guide",
        note: "restaurants, cafés, and hotels",
        href: `${BASE}/koreatravelguide`,
      },
      {
        label: "Speak Korean Anywhere",
        note: "travel phrases",
        href: `${BASE}/speakkoreananywhere`,
      },
    ],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    topic: "Sentence Building",
    before: "Going from learning the alphabet all the way to ",
    highlight: "putting together full sentences",
    after: " is still crazy to me! I think it's amazing how far we've all come.",
    name: "Rachel F.",
  },
  {
    topic: "Measurable Progress",
    before: "There is ",
    highlight: "tangible growth in my Korean journey",
    after: " and I attribute it to Korean with Ina. It's one investment you can never go wrong on.",
    name: "E.G.",
  },
  {
    topic: "Class Community",
    before: "I love how we have such a ",
    highlight: "positive learning environment",
    after: ", and I don't feel afraid to make a mistake, which makes learning more fun and enjoyable.",
    name: "Anthony A.",
  },
  {
    topic: "Speaking Practice",
    before: "I loved how this class really challenged us to ",
    highlight: "produce sentences and speak the language",
    after: "! Having a safe space to try and get live feedback was amazing.",
    name: "Vivian F.",
  },
  {
    topic: "Teaching Craft",
    before: "As a former educator, I have so much respect for the work you do and the ",
    highlight: "love you clearly have for teaching",
    after: ".",
    name: "Amanda H.",
  },
  {
    topic: "Motivation & Joy",
    before: "This class will ",
    highlight: "ignite a fire for knowledge",
    after: " that will take you by surprise. Who knew learning could be so fun?",
    name: "Suzi R.",
  },
];

export const socials: SocialItem[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@inakimieee" },
  { label: "Instagram", href: "https://www.instagram.com/inakimieee" },
  { label: "YouTube", href: "https://www.youtube.com/@koreanwithina" },
  { label: "Facebook", href: "https://www.facebook.com/koreanwithina" },
];
