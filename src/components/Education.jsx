export default function Education({ data }) {
  return (
    <section id="education" className="px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-8">{data.heading}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.items.map(e => (
          <div key={e.institution} className="p-5 border border-border rounded-xl bg-warm">
            <div className="text-sm font-bold text-dark mb-1">{e.institution}</div>
            <div className="text-sm text-muted">{e.degree}</div>
            <div className="text-[11px] text-faint mt-1">{e.location}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
