import { useEffect, useRef, useState } from 'react'

export default function ProtoModal({ item, onClose }) {
  const iframeRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [timedOut, setTimedOut] = useState(false)

  useEffect(() => {
    setLoaded(false)
    setTimedOut(false)
    const t = setTimeout(() => setTimedOut(true), 35000)
    return () => clearTimeout(t)
  }, [item])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark/70 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-white rounded-2xl w-[90vw] h-[85vh] max-w-6xl flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-warm flex-shrink-0">
          <div className="text-sm font-bold text-dark">{item.title}</div>
          <div className="flex items-center gap-2.5">
            <a href={item.url} target="_blank" rel="noreferrer"
              className="text-xs font-semibold text-accent border border-accent-border bg-accent-light px-2.5 py-1 rounded-md">
              Open in new tab ↗
            </a>
            <button onClick={onClose} className="text-muted hover:text-dark hover:bg-border rounded px-1.5 py-0.5 text-lg leading-none">✕</button>
          </div>
        </div>

        {/* Loader */}
        {!loaded && (
          <div className="absolute inset-0 top-[53px] flex flex-col items-center justify-center gap-4 bg-warm z-10">
            {!timedOut ? (
              <>
                <div className="w-9 h-9 rounded-full border-[3px] border-border border-t-accent animate-spin" />
                <p className="text-sm text-muted text-center max-w-xs leading-relaxed">
                  Waking up prototype… this can take up to 30 seconds on first load.
                </p>
              </>
            ) : (
              <a href={item.url} target="_blank" rel="noreferrer"
                className="text-sm font-semibold text-accent border border-accent-border bg-accent-light px-4 py-2 rounded-lg">
                Taking longer than expected — open in new tab ↗
              </a>
            )}
          </div>
        )}

        <iframe
          ref={iframeRef}
          src={item.url}
          className={`flex-1 border-none w-full transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setLoaded(true)}
          title={item.title}
          allowFullScreen
        />
      </div>
    </div>
  )
}
