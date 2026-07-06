import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from '../config'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const isConfigured = ![EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY].some((v) =>
    v.includes('PLACEHOLDER')
  )

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isConfigured) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { name: form.name, email: form.email, message: form.message },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="rounded-3xl p-8" style={{ border: '1px solid var(--border)' }}>
      <h3 className="text-[18px] font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
        Ou envoyez-nous un message
      </h3>
      <p className="text-[14px] mb-6" style={{ color: 'var(--text-secondary)' }}>
        Nous répondons sous 24h ouvrées.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          required
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-colors"
          style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-colors"
          style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl text-[15px] outline-none transition-colors resize-none"
          style={{ border: '1px solid var(--border)', color: 'var(--text-primary)' }}
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full text-[15px] font-semibold px-6 py-3.5 rounded-full text-white transition-transform hover:scale-[1.01] disabled:opacity-60"
          style={{ background: 'var(--accent)' }}
        >
          {status === 'sending' ? 'Envoi…' : 'Envoyer le message'}
        </button>

        {status === 'success' && (
          <p className="text-[14px] font-medium" style={{ color: 'var(--accent)' }}>
            Message envoyé. Nous revenons vers vous rapidement.
          </p>
        )}
        {status === 'error' && !isConfigured && (
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Le formulaire n'est pas encore connecté. Ajoute tes identifiants EmailJS dans{' '}
            <code className="font-mono">src/config.js</code>.
          </p>
        )}
        {status === 'error' && isConfigured && (
          <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>
            Une erreur est survenue. Réessaie ou écris-nous directement.
          </p>
        )}
      </form>
    </div>
  )
}
