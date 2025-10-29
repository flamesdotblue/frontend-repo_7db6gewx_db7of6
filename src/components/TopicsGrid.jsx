import { Code, Palette, Box, Layout } from "lucide-react";

const topics = [
  {
    icon: Code,
    title: "HTML Elements",
    desc: "Learn the building blocks: headings, paragraphs, links, lists, images, and semantic tags.",
    items: ["<h1> to <h6>", "<p> & <a>", "<ul>/<ol>/<li>", "<img> & <figure>", "<header>/<main>/<footer>"]
  },
  {
    icon: Palette,
    title: "CSS Basics",
    desc: "Selectors, properties, values, and how to target and style elements effectively.",
    items: ["Type & class selectors", "IDs & attribute selectors", "Specificity", "Cascade & inheritance"]
  },
  {
    icon: Box,
    title: "Box Model",
    desc: "Margin, border, padding, and content. Understand sizing and spacing like a pro.",
    items: ["content-box vs border-box", "display types", "overflow & clipping", "shadows & radii"]
  },
  {
    icon: Layout,
    title: "Layout Systems",
    desc: "Modern layout with Flexbox and CSS Grid for responsive, accessible designs.",
    items: ["Flex alignment", "Wrapping & gaps", "Grid tracks & areas", "Responsive design"]
  }
];

export default function TopicsGrid() {
  return (
    <section id="topics" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">Core topics</h3>
          <p className="mt-2 text-gray-600">Small, focused lessons that build toward strong fundamentals.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {topics.map(({ icon: Icon, title, desc, items }) => (
            <article key={title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow transition-shadow">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Icon size={20} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">{title}</h4>
                  <p className="mt-1 text-sm text-gray-600">{desc}</p>
                </div>
              </div>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-700">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
