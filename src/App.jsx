import { useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import ShipmentTracker from './components/ShipmentTracker.jsx';

const initialProducts = [
  {
    id: 'p-1',
    name: 'Wireless Noise-Canceling Headphones',
    price: 199.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1704440278730-b420f5892700?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXaXJlbGVzcyUyME5vaXNlLUNhbmNlbGluZyUyMEhlYWRwaG9uZXN8ZW58MHwwfHx8MTc2MTc0MzQ0MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Audio'
  },
  {
    id: 'p-2',
    name: 'Smartwatch Pro X',
    price: 249.0,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1518085250887-2f903c200fee?q=80&w=1400&auto=format&fit=crop',
    tag: 'Wearables'
  },
  {
    id: 'p-3',
    name: '4K Ultra HD Action Camera',
    price: 299.0,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1733218430878-902cc0cff502?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHw0SyUyMFVsdHJhJTIwSEQlMjBBY3Rpb24lMjBDYW1lcmF8ZW58MHwwfHx8MTc2MTc0MzQ0Mnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Cameras'
  },
  {
    id: 'p-4',
    name: 'Mechanical Keyboard (RGB)',
    price: 129.0,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop',
    tag: 'Peripherals'
  },
  {
    id: 'p-5',
    name: 'Ergonomic Office Chair',
    price: 349.0,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1400&auto=format&fit=crop',
    tag: 'Furniture'
  },
  {
    id: 'p-6',
    name: 'USB-C Hub 9-in-1',
    price: 79.0,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1744687170935-570aeec8ffa9?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVU0ItQyUyMEh1YiUyMDktaW4tMXxlbnwwfDB8fHwxNzYxNzQzNDQzfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Accessories'
  },
];

export default function App() {
  const [query, setQuery] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [delivery, setDelivery] = useState('normal'); // normal | fast
  const [tracking, setTracking] = useState(null);

  const products = useMemo(() => initialProducts, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return products.filter(p => p.name.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q));
  }, [products, query]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, delta) => {
    setCart(prev => prev
      .map(item => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item)
      .filter(item => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = delivery === 'fast' ? 14.99 : 0;
  const total = subtotal + shipping;

  const checkout = () => {
    if (cart.length === 0) return;
    const fakeTrackingId = 'TRK-' + Math.random().toString(36).slice(2, 8).toUpperCase();
    setTracking({ id: fakeTrackingId, status: 'processing', etaDays: delivery === 'fast' ? 2 : 5, timelineIndex: 1 });
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <Navbar onSearch={setQuery} cartCount={cart.reduce((n,i)=>n+i.qty,0)} onOpenCart={() => setCartOpen(true)} />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-28">
        <section className="pt-8 sm:pt-12">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-100">Your modern shop, fast delivery</span>
            <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold tracking-tight">
              Discover. Order. Track. All in one place.
            </h1>
            <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
              Browse curated tech products, choose delivery options, and follow shipments in real-time.
            </p>
          </div>
        </section>

        <ProductGrid products={filtered} onAdd={addToCart} />

        <section className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <label className={`flex-1 cursor-pointer rounded-xl border p-4 transition hover:border-indigo-400 ${delivery==='normal' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200'}`}>
                <input type="radio" name="delivery" className="hidden" checked={delivery==='normal'} onChange={()=>setDelivery('normal')} />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Standard Delivery</p>
                    <p className="text-sm text-slate-600">Arrives in 4-6 business days</p>
                  </div>
                  <p className="text-sm font-semibold text-emerald-600">Free</p>
                </div>
              </label>

              <label className={`flex-1 cursor-pointer rounded-xl border p-4 transition hover:border-indigo-400 ${delivery==='fast' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200'}`}>
                <input type="radio" name="delivery" className="hidden" checked={delivery==='fast'} onChange={()=>setDelivery('fast')} />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Fast Delivery</p>
                    <p className="text-sm text-slate-600">Arrives in 1-2 business days</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">$14.99</p>
                </div>
              </label>
            </div>
            <div className="mt-6 text-sm text-slate-600">
              Change this anytime before checkout. Fast delivery is tracked with priority handling.
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-100">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{shipping===0 ? 'Free' : `$${shipping.toFixed(2)}`}</span></div>
              <div className="flex justify-between font-semibold text-slate-900 pt-2 border-t"><span>Total</span><span>${total.toFixed(2)}</span></div>
            </div>
            <button onClick={checkout} disabled={cart.length===0} className="mt-6 w-full rounded-xl bg-indigo-600 text-white py-3 font-medium hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition">
              Checkout & Get Tracking
            </button>
          </div>
        </section>

        <ShipmentTracker tracking={tracking} />
      </main>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} cart={cart} updateQty={updateQty} removeItem={removeFromCart} />
    </div>
  );
}
