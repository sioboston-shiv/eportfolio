import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }

export default function Hero({ data }) {
  return (
    <section className="min-h-[92vh] flex items-center px-10 md:px-20 py-16 border-b border-border">
      <motion.div
        className="max-w-3xl w-full"
        initial="hidden"
        animate="show"
        variants={{ show: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp}
          className="inline-flex items-center gap-2 bg-accent-light border border-accent-border text-accent text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-7"
        >
          <span className="text-[6px]">●</span>
          {data.eyebrow}
        </motion.div>

        <motion.div variants={fadeUp} className="text-[clamp(40px,8vw,66px)] font-extrabold tracking-tighter leading-none text-dark mb-1">
          {data.firstName}
        </motion.div>
        <motion.div variants={fadeUp} className="text-[clamp(40px,8vw,66px)] font-extrabold tracking-tighter leading-none text-accent mb-8">
          {data.lastName}
        </motion.div>

        <motion.p variants={fadeUp} className="text-lg text-muted max-w-xl leading-relaxed mb-10">
          {data.tagline}
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
          <a href={data.primaryBtn.href}
            className="bg-dark text-white text-sm font-semibold px-6 py-3 rounded-lg hover:bg-dark/90 transition-colors">
            {data.primaryBtn.label}
          </a>
          <a href={data.secondaryBtn.href} target="_blank" rel="noreferrer"
            className="border border-border text-muted text-sm font-medium px-6 py-3 rounded-lg hover:border-muted transition-colors">
            {data.secondaryBtn.label}
          </a>
        </motion.div>

        <motion.div variants={fadeUp} className="flex justify-between flex-wrap gap-5 mt-14 pt-9 border-t border-border">
          {data.stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold tracking-tight text-dark">{s.num}</div>
              <div className="text-[11px] text-faint font-semibold uppercase tracking-wide mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
