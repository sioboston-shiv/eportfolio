import { useState } from 'react'

export default function Nav({ data }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-10 h-14 bg-warm/95 backdrop-blur border-b border-border">
      <div className="font-bold text-sm tracking-tight text-dark">{data.logo}</div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-6">
        {data.links.map(link => (
          <button key={link} onClick={() => scrollTo(link)} className="text-muted text-xs hover:text-accent transition-colors">
            {link}
          </button>
        ))}
      </div>

      {/* CTA + hamburger */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => scrollTo('Contact')}
          className="bg-accent text-white text-xs font-semibold px-3.5 py-1.5 rounded-md hover:bg-accent/90 transition-colors"
        >
          {data.cta}
        </button>
        <button className="md:hidden text-muted" onClick={() => setMenuOpen(o => !o)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen
              ? <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              : <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-warm border-b border-border flex flex-col py-2 md:hidden">
          {data.links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-left px-6 py-3 text-sm text-muted hover:text-accent">
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
