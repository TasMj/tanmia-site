import PipelineFlow from './PipelineFlow'

export default function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-32 px-6 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="../../public/videos/particules.mp4" type="video/mp4" />
      </video>

      <div
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
        style={{ color: 'var(--border)' }}
      >
        {/* <PipelineFlow variant="ambient" className="w-full h-[240px]" /> */}
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-6"
          style={{ color: 'var(--text-white)' }}
        >Automatisation commerciale IA</p>

        <h1
          className="text-[44px] sm:text-[60px] lg:text-[62px] font-extrabold leading-[1.05] tracking-tight mb-6"
          style={{ color: 'var(--text-inverse)' }}
        >
          Transformez vos leads dormants en rendez-vous commerciaux
        </h1>

        <p
          className="text-[18px] sm:text-[20px] leading-relaxed max-w-4xl mx-auto mb-10"
          style={{ color: 'var(--text-white)' }}
        >
          Nous construisons des systèmes de relance et de qualification automatisés qui réactivent vos prospects et les convertissent en appels commerciaux.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#demo"
            className="w-full sm:w-auto text-[15px] font-semibold px-7 py-3.5 rounded-full text-white transition-transform hover:scale-[1.03]"
            style={{ background: 'var(--accent)' }}
          >
            Réserver une démo
          </a>
          <a
            href="#fonctionnement"
            className="w-full sm:w-auto bg-white text-[15px] font-semibold px-7 py-3.5 rounded-full transition-colors transition-transform hover:scale-[1.03]"
    style={{ color: 'var(--text-primary)', border: '1px solid var(--border)' }}          >
            Voir comment ça fonctionne
          </a>
        </div>

        <p className="font-mono text-[12px] tracking-wide" style={{ color: 'var(--text-white)' }}>
          Sans recruter. Sans augmenter vos équipes commerciales.
        </p>
      </div>
    </section>
  )
}
