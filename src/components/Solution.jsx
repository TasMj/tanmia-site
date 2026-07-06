const CAPABILITIES = [
  'Relancer vos prospects automatiquement',
  'Personnaliser les messages selon leur profil',
  'Qualifier les réponses',
  'Envoyer vers un rendez-vous commercial',
  'Trier les leads chauds et froids',
]

export default function Solution() {
  return (
    <section id="solution" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="eyebrow text-center mb-4">La solution</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-14"
          style={{ color: 'var(--text-primary)' }}
        >
          Nous avons construit un système qui relance vos leads automatiquement jusqu'à conversion.
        </h2>

        <ul className="space-y-4 mb-14">
          {CAPABILITIES.map((item) => (
            <li key={item} className="flex items-start gap-4">
              <span
                className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center"
                style={{ background: 'var(--accent-soft)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--accent)' }} />
              </span>
              <span className="text-[17px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div
          className="rounded-3xl px-8 py-10 text-center"
          style={{ background: 'var(--bg-dark)' }}
        >
          <p className="text-[20px] sm:text-[24px] font-semibold leading-snug" style={{ color: 'var(--text-inverse)' }}>
            Votre pipeline commercial continue de travailler même quand votre équipe ne le fait pas.
          </p>
        </div>
      </div>
    </section>
  )
}
