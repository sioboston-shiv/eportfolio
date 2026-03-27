export default function Footer({ data }) {
  return (
    <footer id="footer" className="bg-dark px-10 md:px-20 py-11 flex flex-wrap justify-between items-center gap-5">
      <div>
        <div className="text-lg font-extrabold text-white tracking-tight">{data.name}</div>
        <a href={`mailto:${data.email}`} className="text-sm text-accent mt-1 hover:text-white transition-colors">{data.email}</a>
        <a href={data.linkedin} target="_blank" rel="noreferrer" className="block text-sm text-accent mt-1 hover:text-white transition-colors">LinkedIn →</a>
      </div>
      <div className="flex gap-5">
        {data.links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
            className="text-sm text-mid hover:text-white transition-colors">
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  )
}
