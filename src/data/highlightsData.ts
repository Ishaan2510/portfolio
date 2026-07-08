export type Highlight = {
  id: string;
  title: string;
  badge: string;
  image: string;
  link?: string;
};

export const highlightsData: Highlight[] = [
  {
    id: "gate-2026",
    title: "GATE 2026 Qualified in Computer Science & Engineering",
    badge: "GATE 2026",
    image: "/highlights/gate-2026.png",
  },
  {
    id: "leetcode-knight",
    title: "LeetCode Knight Rating (~1650)",
    badge: "LeetCode Knight",
    image: "/highlights/leetcode.png",
  },
  {
    id: "hackerrank-5star",
    title: "HackerRank 5-Star in Python & SQL",
    badge: "HackerRank",
    image: "/highlights/hackerrank.png",
  },
];