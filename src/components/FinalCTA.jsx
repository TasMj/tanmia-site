import CalendlyEmbed from './CalendlyEmbed'
import ContactForm from './ContactForm'
import { CONTACT_EMAIL } from '../config'

export default function FinalCTA() {
  return (
    <section id="demo" className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2
            className="text-[32px] sm:text-[40px] font-bold tracking-tight mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Prêt à récupérer vos leads perdus ?
          </h2>
          <p className="text-[17px] leading-relaxed max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Réservez une démo et découvrez combien de rendez-vous vous perdez actuellement sans le savoir.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <CalendlyEmbed />
          <ContactForm />
        </div>

        <p className="text-center font-mono text-[12px] mt-10" style={{ color: 'var(--text-secondary)' }}>
          {CONTACT_EMAIL}
        </p>
      </div>
    </section>
  )
}
