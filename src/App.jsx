import Header from "./components/Header";
import Hero from "./components/Hero";
import TopicsGrid from "./components/TopicsGrid";
import Playground from "./components/Playground";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <TopicsGrid />
        <Playground />

        <section id="resources" className="py-12 border-t border-gray-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-sm text-gray-500">Pro tip: Press Cmd/Ctrl + A to select all code in a panel, then paste into your own files.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
