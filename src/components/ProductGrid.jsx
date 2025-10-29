import { Star, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductGrid({ products, onAdd }) {
  return (
    <section className="mt-10">
      <div className="flex items-end justify-between mb-4">
        <h2 className="text-xl font-semibold">Featured Products</h2>
        <span className="text-sm text-slate-500">{products.length} items</span>
      </div>

      <AnimatePresence mode="popLayout">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-100 hover:ring-indigo-200 hover:shadow-lg transition"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold leading-snug">{p.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-amber-500">
                      <Star size={16} fill="#f59e0b" className="text-amber-400" />
                      <span className="text-xs text-slate-600">{p.rating} • {p.tag}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold tracking-tight">${p.price.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => onAdd(p)} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 active:scale-[.99] transition">
                  <Plus size={16} /> Add to cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
