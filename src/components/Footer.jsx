import { BRAND_NAME } from '../config'

export default function Footer() {
  return (
    <footer className="py-12 px-6" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} {BRAND_NAME}. Tous droits réservés.
        </p>

        <div className="flex items-center gap-6">
          <a href="/mentions-legales.html" className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Mentions légales
          </a>
          <a href="/confidentialite.html" className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Confidentialité
          </a>
          <a href="/cgv.html" className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            CGV
          </a>
        </div>
      </div>
    </footer>
  )
}
