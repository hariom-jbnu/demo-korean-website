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

export const FULL_PACKAGE = {
  heading: "Want everything?",
  description:
    "If you want all of my products (5 books and 4 video courses) as a full package, just email me —",
  discountHighlight: "I will send you a 30% discount as a thank you.",
  email: "inakimie2822@gmail.com",
  mailtoHref: "mailto:inakimie2822@gmail.com?subject=Full%20Package%20Inquiry",
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
      "The complete Korean sentence-making course — master particles, tenses, and word order to build real sentences.",
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
      "Learn 331 grammar patterns with done-for-you pattern flashcards, 2,000+ example sentences, and step-by-step video lessons.",
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
      "Improve your tone, rhythm, pronunciation, and flow with guided shadowing dialogues from real conversations.",
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
        note: "guidance + video lessons",
        href: `${BASE}/readkoreanlikeapro`,
      },
    ],
  },
  {
    id: "step-vocab",
    number: "02",
    title: "Grow your vocabulary",
    body: "Lack of vocabulary holds you back in every area of Korean. Start with foundation words that become the building blocks for future sentences.",
    links: [
      {
        label: "Ultimate Vocabulary Power Pack 2.0",
        note: "2,206+ verbs & nouns",
        href: `${BASE}/vocab-power-pack`,
      },
    ],
  },
  {
    id: "step-speaking",
    number: "03",
    title: "Speaking & pronunciation help",
    body: "Learn essential Korean phrases you can use anywhere, and improve your tone, rhythm, pronunciation, and flow with real conversations.",
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
    title: "Make sentences (present, past, future)",
    body: "You know how to read Korean and have some basic vocabulary. Now it's time to start making your own sentences.",
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
    body: "You can make sentences, but they feel a bit limited. Expand what you can say by learning essential Korean grammar patterns.",
    links: [
      {
        label: "The Game Changer for Korean Grammar",
        note: "331 patterns · flashcards · 2,000+ examples",
        href: `${BASE}/gamechanger`,
      },
    ],
  },
  {
    id: "step-travel",
    number: "06",
    title: "Going to Korea?",
    body: "Planning a trip and want to feel prepared? Get personal recommendations and useful travel phrases for the road.",
    links: [
      {
        label: "All-in-One Korea Travel Guide",
        note: "restaurants, cafés & hotels",
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
    highlight: "putting together full sentences or paragraphs",
    after: " is still crazy to me! I think it's amazing how far we've all come!",
    name: "Rachel F.",
  },
  {
    topic: "Measurable Progress",
    before: "There is ",
    highlight: "tangible growth in my Korean journey",
    after: " and I attribute it to Korean with Ina. It's one investment you can never go wrong on. Thank you so much 선생님 Ina and the team, you are all the best.",
    name: "E.G.",
  },
  {
    topic: "Speaking Practice",
    before: "I loved how this class really challenged us to ",
    highlight: "produce sentences and speak the language",
    after: "! Having a safe space to just try and get live feedback was amazing.",
    name: "Vivian F.",
  },
  {
    topic: "Class Community",
    before: "I love how we have such a ",
    highlight: "positive learning environment",
    after: ", and I don't feel afraid to make a mistake, which makes learning more fun and enjoyable.",
    name: "Anthony A.",
  },
  {
    topic: "Teaching Craft",
    before: "As a former educator, I have so much respect for the work you do and the ",
    highlight: "love you clearly have for teaching",
    after: "!",
    name: "Amanda H.",
  },
  {
    topic: "Motivation & Joy",
    before: "I loved how Ina made it a safe space to learn! Her teaching style is comfortable and relaxed, so no one ever had to be afraid of trying or making mistakes. If anyone has even a small desire to learn Korean, ",
    highlight: "this class will ignite a fire for knowledge",
    after: " that will take you by surprise. Who knew learning could be so fun?!",
    name: "Suzi R.",
  },
  {
    topic: "Mentorship",
    before: "Thank you, Ina (and Ina's team) for sharing your ",
    highlight: "time, expertise, superpowers, and golden nuggets",
    after: " with us in such an encouraging and loving way!",
    name: "Kat E.",
  },
  {
    topic: "Dedicated Team",
    before: "Teacher Ina and the whole team are very ",
    highlight: "talented and passionate in their teaching",
    after: ". It shows through the work. It's really rare to find teachers like you guys. From the bottom of my heart, I want to thank you all.",
    name: "E.V.",
  },
  {
    topic: "Creative Lessons",
    before: "Ina made me look forward to coming to class. I also loved her ",
    highlight: "creative style",
    after: " in teaching.",
    name: "Jatiela M.",
  },
  {
    topic: "Curriculum Depth",
    before: "As a fellow teacher, I understand how much time, energy, and thought go into ",
    highlight: "creating engaging and meaningful content",
    after: " and supporting students through the learning process. Thank you for all the resources, activities, and encouragement you provided for all of us on this Korean learning journey.",
    name: "Holly P.",
  },
  {
    topic: "Personal Impact",
    before: "Ina, you are an ",
    highlight: "inspiration and someone who has truly changed my life",
    after: ".",
    name: "Vivian F.",
  },
  {
    topic: "Lasting Friendships",
    before: "I've made ",
    highlight: "lasting friendships",
    after: " and learned so much through your courses! I'm so happy I made the decision to take them!",
    name: "Audra U.",
  },
  {
    topic: "Supportive Group",
    before: "Ina's enthusiasm is so infectious! I was always excited for class. Our group was super supportive of each other, and I think that was a ",
    highlight: "direct result of Ina's endless encouragement",
    after: " for all of us!",
    name: "R.F.",
  },
  {
    topic: "Teaching Excellence",
    before: "Ina, you manage to express it all in a ",
    highlight: "package of professional work ethics, enthusiasm, personal authenticity, and a genuine fondness",
    after: " for your students. If teaching were an art form, I love the fact that I bought one of your pieces!",
    name: "Sisse S.",
  },
  {
    topic: "Favorite Teacher",
    before: "If I'm ever faced with the \"",
    highlight: "who was your favorite teacher?",
    after: "\" question, my answer would now be Ina Kim! I was pretty sad to have class end, but looking forward to a future class with you. No doubt, I'm in!",
    name: "A.U.",
  },
];

export const socials: SocialItem[] = [
  { label: "TikTok", href: "https://www.tiktok.com/@inakimieee" },
  { label: "Instagram", href: "https://www.instagram.com/inakimieee" },
  { label: "YouTube", href: "https://www.youtube.com/@koreanwithina" },
  { label: "Facebook", href: "https://www.facebook.com/koreanwithina" },
];
