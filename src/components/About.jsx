import { useState } from 'react'
import { motion } from 'framer-motion'

export default function About({ data }) {
  const [open, setOpen] = useState(false)

  return (
    <section id="about" className="bg-warm-alt px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-8">{data.heading}</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-[15px] text-mid leading-[1.75]">{data.bio}</p>

          <button
            onClick={() => setOpen(o => !o)}
            className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-widest text-accent"
          >
            <span className={`transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>▶</span>
            Fun Fact
          </button>

          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-2.5 pl-5 border-l-[3px] border-accent bg-accent-light rounded-r-lg py-4 px-5 text-[13px] text-muted italic leading-relaxed"
            >
              {data.funFact}
            </motion.div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {data.pills.map(p => (
            <span key={p} className="px-3.5 py-1.5 bg-accent-light border border-accent-border text-accent-dark text-xs font-medium rounded-full">
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
