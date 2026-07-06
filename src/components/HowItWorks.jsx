import PipelineFlow from './PipelineFlow'

const STEPS = [
  {
    number: '01',
    title: 'Import de vos leads existants',
  },
  {
    number: '02',
    title: 'Relance automatique intelligente',
    detail: 'Email, LinkedIn, WhatsApp, Instagram (selon votre formule)',
  },
  {
    number: '03',
    title: 'Conversion en rendez-vous',
    detail: 'Via Calendly (ou autre outil de prise de rdv)',
  },
]

export default function HowItWorks() {
  return (
    <section id="fonctionnement" className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow text-center mb-4">Fonctionnement</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-16"
          style={{ color: 'var(--text-primary)' }}
        >
          Un système simple, mais puissant
        </h2>

        <div className="mb-16" style={{ color: 'var(--text-primary)' }}>
          <PipelineFlow variant="labeled" className="w-full h-[160px]" />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.number} className="rounded-2xl p-7 bg-white" style={{ border: '1px solid var(--border)' }}>
              <span className="font-mono text-[13px] font-semibold" style={{ color: 'var(--accent)' }}>
                {step.number}
              </span>
              <h3 className="text-[18px] font-semibold mt-3 mb-1" style={{ color: 'var(--text-primary)' }}>
                {step.title}
              </h3>
              {step.detail && (
                <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>
                  {step.detail}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
