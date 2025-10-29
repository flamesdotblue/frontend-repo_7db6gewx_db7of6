import { ShoppingCart, Search, Package2 } from 'lucide-react';

export default function Navbar({ onSearch, cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-indigo-600 text-white grid place-items-center">
            <Package2 size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">SwiftCart</span>
        </div>

        <div className="hidden sm:flex items-center flex-1 max-w-lg mx-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              onChange={(e)=>onSearch(e.target.value)}
              placeholder="Search products, categories..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-0 focus:border-indigo-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={onOpenCart} className="relative rounded-xl border border-slate-200 p-2 hover:border-indigo-400 transition">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 text-[10px] px-1.5 py-0.5 rounded-full bg-indigo-600 text-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="sm:hidden p-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            onChange={(e)=>onSearch(e.target.value)}
            placeholder="Search products, categories..."
            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none ring-0 focus:border-indigo-400"
          />
        </div>
      </div>
    </header>
  );
}
