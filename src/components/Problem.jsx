const PAIN_POINTS = [
  'Prospects qui ne répondent jamais',
  'Leads oubliés dans le CRM',
  'Relances manuelles inefficaces',
  'Manque de suivi commercial',
]

export default function Problem() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Vos leads ne sont pas perdus… ils sont juste mal suivis.
        </h2>

        <p
          className="text-[17px] leading-relaxed text-center max-w-2xl mx-auto mb-12"
          style={{ color: 'var(--text-secondary)' }}
        >
          La majorité des entreprises perdent entre 40 % et 80 % de leurs leads simplement parce qu'ils ne sont pas relancés correctement.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {PAIN_POINTS.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-2xl px-5 py-4 bg-white"
              style={{ border: '1px solid var(--border)' }}
            >
              <span
                className="flex-shrink-0 w-2 h-2 rounded-full"
                style={{ background: 'var(--accent)' }}
              />
              <span className="text-[15px]" style={{ color: 'var(--text-primary)' }}>
                {point}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
          Résultat : des opportunités perdues chaque semaine.
        </p>
      </div>
    </section>
  )
}
