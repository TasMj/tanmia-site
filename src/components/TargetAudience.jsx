const FIT = [
  'Vous avez déjà des leads mais peu de suivi',
  'Vous utilisez un CRM mais il est sous-exploité',
  'Vous voulez plus de rendez-vous sans recruter',
  'Vous avez un cycle de vente B2B/B2C',
]

const NOT_FIT = [
  "Vous n'avez aucun lead",
  'Vous cherchez du "trafic magique"',
  'Vous ne faites pas de vente B2B/B2C',
]

export default function TargetAudience() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-14"
          style={{ color: 'var(--text-primary)' }}
        >
          Ce système est fait pour vous si…
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 bg-white" style={{ border: '1px solid var(--border)' }}>
            <ul className="space-y-4">
              {FIT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-white"
                    style={{ background: 'var(--accent)' }}
                  >
                    ✓
                  </span>
                  <span className="text-[15px] leading-snug" style={{ color: 'var(--text-primary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-7 bg-white" style={{ border: '1px solid var(--border)' }}>
            <p className="eyebrow mb-4" style={{ color: 'var(--text-secondary)' }}>
              Pas pour vous si
            </p>
            <ul className="space-y-4">
              {NOT_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold"
                    style={{ background: 'var(--bg-alt)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
                  >
                    ✕
                  </span>
                  <span className="text-[15px] leading-snug" style={{ color: 'var(--text-secondary)' }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
