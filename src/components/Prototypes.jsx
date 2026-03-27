import { useState } from 'react'
import ProtoModal from './ProtoModal'

export default function Prototypes({ data }) {
  const [active, setActive] = useState(null)

  return (
    <section id="prototypes" className="bg-warm-alt px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-3">{data.heading}</h2>
      <p className="text-[15px] text-muted max-w-xl leading-relaxed mb-8">{data.sub}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.items.map(item => (
          <div key={item.title} className="p-5 border border-border rounded-xl bg-warm flex flex-col gap-2.5">
            <div className="flex flex-wrap gap-1.5">
              {item.tech.map(t => (
                <span key={t} className="px-2 py-0.5 bg-[#e7e0d8] text-mid text-[10px] font-semibold rounded">{t}</span>
              ))}
            </div>
            <div className="text-[15px] font-bold text-dark">{item.title}</div>
            <div className="text-xs text-muted leading-snug flex-1">{item.desc}</div>
            <button onClick={() => setActive(item)} className="text-xs font-semibold text-accent text-left hover:underline">
              View Prototype →
            </button>
          </div>
        ))}
      </div>

      {active && <ProtoModal item={active} onClose={() => setActive(null)} />}
    </section>
  )
}
