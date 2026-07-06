import { CALENDLY_URL } from '../config'

export default function CalendlyEmbed() {
  const isPlaceholder = CALENDLY_URL.includes('PLACEHOLDER')

  return (
    <div className="rounded-3xl overflow-hidden" style={{ border: '1px solid var(--border)' }}>
      {isPlaceholder ? (
        <div
          className="flex flex-col items-center justify-center gap-3 py-24 px-6 text-center"
          style={{ background: 'var(--bg-alt)' }}
        >
          <p className="font-mono text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Calendrier à connecter
          </p>
          <p className="text-[14px] max-w-sm" style={{ color: 'var(--text-secondary)' }}>
            Ajoute ton lien Calendly dans <code className="font-mono">src/config.js</code> (variable{' '}
            <code className="font-mono">CALENDLY_URL</code>) pour afficher le calendrier ici.
          </p>
        </div>
      ) : (
        <iframe
          src={CALENDLY_URL}
          title="Réserver une démo"
          width="100%"
          height="700"
          style={{ border: 0 }}
        />
      )}
    </div>
  )
}
