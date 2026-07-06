import { useState } from 'react'

const FAQS = [
  {
    q: 'Est-ce que ça remplace mon équipe commerciale ?',
    a: 'Non, ça les aide à se concentrer uniquement sur les leads chauds.',
  },
  {
    q: 'Est-ce compliqué à mettre en place ?',
    a: 'Non, nous installons tout pour vous.',
  },
  {
    q: 'Est-ce que ça fonctionne sans CRM ?',
    a: 'Oui, nous pouvons structurer votre pipeline de zéro.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border)' }}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left"
      >
        <span className="text-[17px] font-medium pr-6" style={{ color: 'var(--text-primary)' }}>
          {faq.q}
        </span>
        <span
          className="flex-shrink-0 text-[20px] font-light transition-transform duration-300"
          style={{ color: 'var(--accent)', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: isOpen ? '120px' : '0px' }}
      >
        <p className="pb-6 text-[15px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {faq.a}
        </p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="eyebrow text-center mb-4">FAQ</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight text-center mb-14"
          style={{ color: 'var(--text-primary)' }}
        >
          Questions fréquentes
        </h2>

        <div>
          {FAQS.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
