import { Code2 } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-indigo-600 to-fuchsia-500 text-white shadow-sm">
              <Code2 size={20} />
            </span>
            <div>
              <p className="text-sm leading-tight text-gray-500">Learn</p>
              <h1 className="text-base font-semibold tracking-tight">HTML & CSS</h1>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#topics" className="hover:text-gray-900 transition-colors">Topics</a>
            <a href="#playground" className="hover:text-gray-900 transition-colors">Playground</a>
            <a href="#resources" className="hover:text-gray-900 transition-colors">Resources</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
