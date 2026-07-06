// ─────────────────────────────────────────────────────────────
// CONFIGURATION — modifie uniquement ce fichier pour connecter
// Calendly et l'envoi d'email. Aucun autre fichier à toucher.
// ─────────────────────────────────────────────────────────────

// 1. CALENDLY
// Une fois ton compte Calendly créé, remplace l'URL ci-dessous
// par ton lien d'événement (ex: https://calendly.com/tanmia/demo-30min)
export const CALENDLY_URL = 'https://calendly.com/PLACEHOLDER/demo'

// 2. EMAILJS (pour le formulaire de contact)
// Crée un compte gratuit sur https://www.emailjs.com
// 1) Ajoute un "Email Service" (Gmail, Outlook...) -> copie le Service ID
// 2) Crée un "Email Template" avec les variables {{name}}, {{email}}, {{message}}
//    -> copie le Template ID
// 3) Dans Account > General, copie ta Public Key
export const EMAILJS_SERVICE_ID = 'PLACEHOLDER_SERVICE_ID'
export const EMAILJS_TEMPLATE_ID = 'PLACEHOLDER_TEMPLATE_ID'
export const EMAILJS_PUBLIC_KEY = 'PLACEHOLDER_PUBLIC_KEY'

// 3. CONTACT
export const CONTACT_EMAIL = 'tasnim@tanmia.fr'

// 4. MARQUE
export const BRAND_NAME = 'Tanmia'
