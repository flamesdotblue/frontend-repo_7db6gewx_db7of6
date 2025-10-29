export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Build beautiful sites with HTML & CSS
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A curated, practical guide to the fundamentals of the web. Learn the tags, the box model, layout systems, and modern styling techniques with hands-on examples.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#playground" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-2.5 text-white font-medium shadow hover:bg-indigo-700 transition-colors">
                Try the Playground
              </a>
              <a href="#topics" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-700 font-medium hover:bg-gray-50">
                Explore Topics
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
              <div className="h-full w-full grid grid-rows-3 grid-cols-6">
                <div className="col-span-6 row-span-1 bg-gradient-to-r from-indigo-50 to-fuchsia-50 border-b border-gray-100 flex items-center px-6">
                  <div className="text-[10px] font-mono text-gray-500">index.html</div>
                </div>
                <div className="col-span-3 row-span-2 p-4">
                  <pre className="h-full w-full overflow-auto text-xs leading-relaxed"><code>{`<!doctype html>
<html>
  <head>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1 class="title">Hello, web!</h1>
  </body>
</html>`}</code></pre>
                </div>
                <div className="col-span-3 row-span-2 p-4 bg-gray-50 border-l border-gray-200">
                  <pre className="h-full w-full overflow-auto text-xs leading-relaxed"><code>{`/* styles.css */
:root { --indigo: #4f46e5; }
body { font-family: ui-sans-serif, system-ui; }
.title { color: var(--indigo); }`}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
