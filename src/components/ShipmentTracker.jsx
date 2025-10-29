import { Truck, Package, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  { id: 'ordered', label: 'Order Placed', icon: Package },
  { id: 'processing', label: 'Processing', icon: Clock },
  { id: 'shipped', label: 'Shipped', icon: Truck },
  { id: 'delivered', label: 'Delivered', icon: CheckCircle2 },
];

export default function ShipmentTracker({ tracking }) {
  if (!tracking) {
    return (
      <section className="mt-16">
        <div className="bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-100">
          <h2 className="text-xl font-semibold">Shipment Tracking</h2>
          <p className="mt-2 text-slate-600 text-sm">Place an order to receive a tracking ID and follow the shipment in real-time.</p>
        </div>
      </section>
    );
  }

  const currentIndex = Math.min(tracking.timelineIndex ?? 1, steps.length - 1);

  return (
    <section className="mt-16">
      <div className="bg-white/70 backdrop-blur rounded-2xl p-6 ring-1 ring-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">Tracking #{tracking.id}</h2>
            <p className="text-sm text-slate-600">ETA: {tracking.etaDays} {tracking.etaDays === 1 ? 'day' : 'days'}</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                const active = idx <= currentIndex;
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: idx * 0.04 }}
                    className="relative pl-12"
                  >
                    <div className={`absolute left-0 top-0 h-8 w-8 rounded-full grid place-items-center ring-2 ${active ? 'bg-indigo-600 text-white ring-indigo-200' : 'bg-white text-slate-400 ring-slate-200'}`}>
                      <Icon size={16} />
                    </div>
                    <div className="rounded-xl border p-4 bg-white">
                      <p className="font-medium">{s.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{active ? 'Completed' : 'Pending'}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
