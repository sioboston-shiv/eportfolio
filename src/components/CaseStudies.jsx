export default function CaseStudies({ data }) {
  return (
    <section id="projects" className="px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-8">{data.heading}</h2>

      <div className="flex flex-col gap-5">
        {data.projects.map(p => (
          <div key={p.title} className="p-7 border border-border rounded-xl bg-warm">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
              <div className="text-[17px] font-bold text-dark">{p.title}</div>
              <div className="text-[11px] text-faint font-semibold uppercase tracking-wide whitespace-nowrap pt-0.5">{p.org}</div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">{p.summary}</p>
            <div className="flex flex-wrap gap-2">
              {p.metrics.map(m => (
                <span key={m} className="px-3 py-1 bg-accent-light border border-accent-border text-accent-dark text-[11px] font-semibold rounded-md">
                  {m}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
