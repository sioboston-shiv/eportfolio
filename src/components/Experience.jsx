export default function Experience({ data }) {
  return (
    <section id="experience" className="bg-warm-alt px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-2">{data.heading}</h2>

      <div className="divide-y divide-border">
        {data.roles.map(role => (
          <div key={role.dates} className="flex flex-col md:flex-row gap-2 md:gap-7 py-6">
            <div className="md:min-w-[110px]">
              <div className="text-[11px] text-faint font-semibold uppercase tracking-wide">{role.dates}</div>
            </div>
            <div>
              <div className="text-base font-bold text-dark mb-0.5">{role.title}</div>
              <div className="text-sm font-semibold text-accent mb-2">{role.org}</div>
              <div className="text-sm text-muted leading-relaxed">{role.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
