export default function AIStack({ data }) {
  return (
    <section id="ai-stack" className="bg-warm-alt px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-3">{data.heading}</h2>
      <p className="text-[15px] text-muted max-w-xl leading-relaxed mb-8">{data.sub}</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {data.tools.map(t => (
          <div key={t.name} className="p-4 border border-border rounded-xl bg-warm">
            <div className="text-sm font-bold text-dark">{t.name}</div>
            <div className="text-xs text-faint mt-0.5">{t.use}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
