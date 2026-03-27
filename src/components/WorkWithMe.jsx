export default function WorkWithMe({ data }) {
  return (
    <section id="contact" className="bg-warm-alt px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-8">{data.heading}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.cards.map(c => (
          <div key={c.type} className="p-6 border border-border rounded-xl bg-warm">
            <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2">{c.type}</div>
            <div className="text-base font-bold text-dark mb-2">{c.title}</div>
            <div className="text-xs text-muted leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
