export default function Skills({ data }) {
  return (
    <section id="skills" className="px-10 md:px-20 py-16 border-b border-border">
      <div className="text-[11px] font-bold uppercase tracking-widest text-accent mb-2.5">{data.label}</div>
      <h2 className="text-[34px] font-extrabold tracking-tight text-dark mb-8">{data.heading}</h2>

      <div className="grid sm:grid-cols-2 gap-5">
        {data.categories.map(cat => (
          <div key={cat.name} className="p-5 border border-border rounded-xl bg-warm">
            <div className="text-xs font-bold uppercase tracking-widest text-accent mb-3">{cat.name}</div>
            <div className="flex flex-wrap gap-1.5">
              {cat.items.map(item => (
                <span key={item} className="px-3 py-1 bg-warm border border-border rounded-full text-xs text-muted font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
