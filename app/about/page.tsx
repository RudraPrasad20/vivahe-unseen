'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'

const portraits = [
  'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85',
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <header className="nav-wrap"><a href="/" className="brand" aria-label="Vivahe Unseen home"><span>vivahe</span>unseen</a><a className="about-back" href="/"><ArrowLeft size={16} /> Back home</a></header>
      <section className="about-hero section-pad"><div className="section-kicker">THE PEOPLE BEHIND THE SCREEN</div><h1>Stories that feel<br /><em>like you.</em></h1><p>Vivahe Unseen is a wedding content studio for the couples who want to remember how it felt, not just how it looked.</p></section>
      <section className="about-intro section-pad"><div className="about-images"><img src={portraits[0]} alt="Wedding couple smiling together" /><img src={portraits[1]} alt="Bride in traditional wedding attire" /></div><div className="about-copy"><div className="section-kicker">OUR POINT OF VIEW</div><h2 className="display-heading">The in-between<br /><em>is everything.</em></h2><p>We are Souvik and Suraj, two visual storytellers who believe the best parts of a wedding happen between the planned moments: a shaky laugh, a secret glance, a dance floor that refuses to empty.</p><p>We move lightly, shoot honestly, and turn the energy of your day into social-first films you can revisit whenever you miss it.</p><a className="solid-btn" href="/#contact">Work with us <ArrowRight size={16} /></a></div></section>
      <section className="about-quote"><p>“Not just a wedding video.<br /><em>A feeling, kept alive.</em>”</p></section>
      <footer className="mega-footer"><div className="footer-meta"><span>© 2026 Vivahe Unseen</span><span>Made for the moments between the moments.</span></div><a className="footer-wordmark" href="/" aria-label="Vivahe Unseen home">vivahe<br /><em>unseen</em></a></footer>
    </main>
  )
}
