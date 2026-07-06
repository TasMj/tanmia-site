import { useEffect, useState } from 'react'
import { BRAND_NAME } from '../config'

const LINKS = [
  { href: '#solution', label: 'Solution' },
  { href: '#fonctionnement', label: 'Fonctionnement' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-[var(--bg-alt)]' : 'bg-transparent border-transparent'
        }`}
      style={{ borderColor: scrolled ? 'var(--border)' : 'transparent' }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-[17px] font-semibold tracking-tight transition-colors"
          style={{ color: scrolled ? 'var(--text-primary)' : 'var(--text-white)' }}
        >
          {BRAND_NAME}
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14px] font-medium transition-colors hover:text-[var(--accent)]"
                style={{ color: scrolled ? 'var(--text-primary)' : 'var(--text-white)' }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#demo"
          className="text-[13px] font-semibold px-4 py-2 rounded-full text-white transition-transform hover:scale-[1.03]"
          style={{ background: 'var(--accent)' }}
        >
          Réserver une démo
        </a>
      </nav>
    </header>
  )
}
