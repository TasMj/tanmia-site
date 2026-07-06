const PLANS = [
  {
    name: 'Starter',
    setup: '790€',
    monthly: '100€/mois',
    description: 'Relance message automatique des leads existants',
    highlighted: false,
  },
  {
    name: 'Growth',
    setup: '2 500€',
    monthly: '400€/mois',
    description: 'Message + qualification + RDV',
    highlighted: true,
  },
  {
    name: 'Full System',
    setup: '6 000€',
    monthly: '900€/mois',
    description: "Système complet d'acquisition et de relance automatisée",
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-center mb-4">Offres</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-14"
          style={{ color: 'var(--text-primary)' }}
        >
          Trois niveaux de systèmes selon votre maturité
        </h2>

        <div className="grid sm:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="rounded-3xl p-8 flex flex-col"
              style={
                plan.highlighted
                  ? { background: 'var(--bg-dark)', color: 'var(--text-inverse)' }
                  : { border: '1px solid var(--border)' }
              }
            >
              {plan.highlighted && (
                <span
                  className="eyebrow mb-4 w-fit px-3 py-1 rounded-full"
                  style={{ background: 'rgba(10,102,255,0.15)' }}
                >
                  Recommandé
                </span>
              )}
              <h3
                className="text-[20px] font-semibold mb-1"
                style={{ color: plan.highlighted ? 'var(--text-inverse)' : 'var(--text-primary)' }}
              >
                {plan.name}
              </h3>
              <p
                className="text-[14px] mb-6"
                style={{ color: plan.highlighted ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)' }}
              >
                {plan.description}
              </p>

              <div className="mt-auto">
                <p
                  className="text-[32px] font-bold tracking-tight"
                  style={{ color: plan.highlighted ? 'var(--text-inverse)' : 'var(--text-primary)' }}
                >
                  {plan.setup}
                </p>
                <p
                  className="font-mono text-[13px] mb-6"
                  style={{ color: plan.highlighted ? 'var(--text-inverse-secondary)' : 'var(--text-secondary)' }}
                >
                  + {plan.monthly}
                </p>

                <a
                  href="#demo"
                  className="block text-center text-[14px] font-semibold px-5 py-3 rounded-full transition-transform hover:scale-[1.02]"
                  style={
                    plan.highlighted
                      ? { background: 'var(--accent)', color: 'white' }
                      : { border: '1px solid var(--border)', color: 'var(--text-primary)' }
                  }
                >
                  Réserver une démo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
