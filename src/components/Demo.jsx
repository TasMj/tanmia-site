export default function Demo() {
  return (
    <section className="py-28 px-6" style={{ background: 'var(--bg-alt)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="eyebrow mb-4">Démo</p>
        <h2
          className="text-[32px] sm:text-[40px] font-bold tracking-tight mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          Voir le système en action
        </h2>
        <p className="text-[17px] leading-relaxed mb-12" style={{ color: 'var(--text-secondary)' }}>
          Découvrez comment un lead non répondu devient un rendez-vous commercial automatiquement.
        </p>
        <div className="rounded-3xl overflow-hidden aspect-video">
          <video 
            controls 
            poster={`${import.meta.env.BASE_URL}videos/demo-miniature.png`}
            className="w-full h-full object-cover">
            <source 
              src={`${import.meta.env.BASE_URL}videos/demo.mp4`} 
              type="video/mp4" 
            />
          </video>
        </div>
      </div>
    </section>
  )
}
