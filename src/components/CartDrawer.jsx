import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function CartDrawer({ open, onClose, cart, updateQty, removeItem }) {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-40 flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-lg">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center text-slate-600 py-16">Your cart is empty</div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-3 border rounded-xl p-3">
                    <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-medium leading-snug">{item.name}</p>
                          <p className="text-xs text-slate-500 mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-slate-500 hover:text-red-600 p-1"><Trash2 size={16} /></button>
                      </div>
                      <div className="mt-3 flex items-center gap-3">
                        <button onClick={() => updateQty(item.id, -1)} className="p-1 rounded-lg border hover:bg-slate-50"><Minus size={14} /></button>
                        <span className="text-sm w-6 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="p-1 rounded-lg border hover:bg-slate-50"><Plus size={14} /></button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t p-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-slate-500">Shipping calculated at checkout</p>
              <button onClick={onClose} className="w-full rounded-xl bg-indigo-600 text-white py-3 font-medium hover:bg-indigo-500 transition">
                Continue to Checkout
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
