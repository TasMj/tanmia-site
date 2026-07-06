const BENEFITS = [
  { title: 'Plus de rendez-vous', detail: 'sans effort supplémentaire' },
  { title: 'Récupération de leads déjà payés', detail: 'ads, inbound…' },
  { title: 'Réduction du travail manuel', detail: 'commercial' },
  { title: 'Pipeline automatisé', detail: 'et structuré' },
  { title: 'Meilleure visibilité', detail: 'sur vos prospects' },
]

export default function Benefits() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-center mb-4">Bénéfices</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-14"
          style={{ color: 'var(--text-primary)' }}
        >
          Ce que vous obtenez réellement
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ border: '1px solid var(--border)' }}
            >
              <h3 className="text-[17px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {b.title}
              </h3>
              <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                {b.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
