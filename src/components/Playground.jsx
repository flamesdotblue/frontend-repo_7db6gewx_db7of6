import { useMemo, useState } from "react";

export default function Playground() {
  const [html, setHtml] = useState(`<div class="card">
  <h1>Hello, HTML & CSS!</h1>
  <p>Edit the code and see changes live.</p>
  <button>Click me</button>
</div>`);
  const [css, setCss] = useState(`:root { --brand: #4f46e5; }
body { font-family: ui-sans-serif, system-ui; padding: 1.25rem; }
.card { max-width: 540px; margin: auto; background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; box-shadow: 0 10px 24px -12px rgba(0,0,0,.2); padding: 1.25rem; }
h1 { margin: 0 0 .25rem; font-size: 1.25rem; color: var(--brand); }
p { color: #374151; }
button { margin-top: .5rem; background: var(--brand); color: white; border: 0; padding: .5rem .75rem; border-radius: .5rem; }
button:hover { filter: brightness(0.95); }`);

  const srcDoc = useMemo(() => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>${css}</style>
  </head>
  <body>${html}</body>
</html>`, [html, css]);

  return (
    <section id="playground" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900">Hands-on playground</h3>
          <p className="mt-2 text-gray-600">Experiment with HTML and CSS side-by-side and see the live result instantly.</p>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <div className="px-4 py-2 text-xs font-medium text-gray-600 border-b bg-gray-50">index.html</div>
            <textarea
              value={html}
              onChange={(e) => setHtml(e.target.value)}
              spellCheck={false}
              className="w-full h-80 p-4 font-mono text-sm leading-relaxed outline-none resize-none"
            />
          </div>

          <div className="rounded-xl border border-gray-200 overflow-hidden bg-white">
            <div className="px-4 py-2 text-xs font-medium text-gray-600 border-b bg-gray-50">styles.css</div>
            <textarea
              value={css}
              onChange={(e) => setCss(e.target.value)}
              spellCheck={false}
              className="w-full h-80 p-4 font-mono text-sm leading-relaxed outline-none resize-none"
            />
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-gray-200 overflow-hidden bg-white">
          <div className="px-4 py-2 text-xs font-medium text-gray-600 border-b bg-gray-50">Preview</div>
          <iframe title="preview" className="w-full h-[28rem]" srcDoc={srcDoc} />
        </div>
      </div>
    </section>
  );
}
