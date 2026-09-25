'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUp, ChevronLeft, ChevronRight, Menu, Play, Volume2, VolumeX, X } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85', alt: 'Bride in traditional wedding attire' },
  { src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=85', alt: 'Wedding ceremony flowers' },
  { src: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=85', alt: 'Couple laughing together' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?auto=format&fit=crop&w=900&q=85', alt: 'Outdoor wedding table' },
  { src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85', alt: 'Wedding bouquet' },
  { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=900&q=85', alt: 'Decorated wedding venue' },
]

const videos = [
  { poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=85', title: 'The bride edit' },
  { poster: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=700&q=85', title: 'A day in details' },
  { poster: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=700&q=85', title: 'Just married' },
]

const faqs = [
  { question: 'What does a wedding content creator do?', answer: 'We capture the little, in-the-moment stories of your wedding day and turn them into polished reels, stories, and posts while the celebration is still happening.' },
  { question: 'How quickly will we receive our content?', answer: 'You will receive a first batch of edited vertical content within 24–48 hours, with the remaining gallery delivered according to your selected package.' },
  { question: 'Do you travel for weddings?', answer: 'Yes. We love travelling for celebrations across India. Share your venue and date with us and we will include travel details in your custom proposal.' },
  { question: 'Can we share a moodboard or references?', answer: 'Absolutely. Your references, colours, music, and must-have moments help us make the coverage feel unmistakably yours.' },
]

export function WeddingScroll() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [muted, setMuted] = useState(true)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [slide, setSlide] = useState(0)
  const [carouselApi, setCarouselApi] = useState<any>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!carouselApi) return
    const interval = window.setInterval(() => carouselApi.scrollNext(), 3200)
    return () => window.clearInterval(interval)
  }, [carouselApi])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return
    let x = -100
    let y = -100
    let targetX = x
    let targetY = y
    const move = (event: MouseEvent) => { targetX = event.clientX; targetY = event.clientY }
    const animate = () => {
      x += (targetX - x) * 0.18
      y += (targetY - y) * 0.18
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
      requestAnimationFrame(animate)
    }
    window.addEventListener('mousemove', move)
    const frame = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(frame) }
  }, [])

  return (
    <main className="site-shell">
      <div ref={cursorRef} className="cursor-dot" aria-hidden="true" />
      <header className="nav-wrap">
        <a href="#home" className="brand" aria-label="Vivahe Unseen home"><span>vivahe</span>unseen</a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#home">Home</a><a href="#faqs">FAQs</a><a href="#portfolio">Portfolio</a>
          <a href="#blogs">Blogs</a><a href="/about">About</a><a href="#contact">Contact</a>
        </nav>
        <button className="menu-button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={22} /></button>
      </header>

      {menuOpen && <div className="mobile-menu"><button className="close-menu" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X /></button>{['Home', 'FAQs', 'Portfolio', 'Blogs', 'About', 'Contact'].map((item) => <a key={item} href={item === 'About' ? '/about' : `#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</div>}

      <section id="home" className="hero section-pad">
        <div className="hero-title"><span className="flourish">❧</span><h1>India&apos;s Best</h1><span className="flourish flip">❧</span></div>
        <h2>- &nbsp; Wedding Content Creators &nbsp; -</h2>
        <p>We specialize in live social media coverage of your wedding with stunning reels, engaging stories, and curated posts. Our team provides professional editing and personalized content, ensuring your celebration shines online. Let&apos;s make every moment shareable, memorable &amp; uniquely yours!</p>
        <a className="outline-btn" href="#contact">BROCHURE <ArrowDown size={15} /></a>
        <div className="hero-collage">
          {gallery.slice(0, 3).map((image) => <img key={image.src} src={image.src} alt={image.alt} />)}
        </div>
      </section>

      <section id="portfolio" className="reel-section section-pad">
        <div className="section-kicker">THE MAGIC IN MOTION</div><h2 className="display-heading">Your day,<br /><em>as it felt.</em></h2>
        <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="video-carousel"><CarouselContent>{videos.map((video, index) => <CarouselItem key={video.title} className="video-slide"><button className="video-card" onClick={() => setActiveVideo(index)} aria-label={`Play ${video.title}`}><img src={video.poster} alt="" /><span className="play"><Play fill="currentColor" size={18} /></span><span className="video-label">{video.title}</span><span className="sound" onClick={(event) => { event.stopPropagation(); setMuted(!muted) }}>{muted ? <VolumeX size={15} /> : <Volume2 size={15} />}</span></button></CarouselItem>)}</CarouselContent><CarouselPrevious /><CarouselNext /></Carousel>
      </section>

      <section id="about" className="story section-pad">
        <div className="story-photo"><img src={gallery[3].src} alt="A wedding celebration outdoors" /></div>
        <div className="story-copy"><div className="section-kicker">BEHIND THE SCREEN</div><h2 className="display-heading">Souvik<br /><em>&amp; Suraj</em></h2><p>Two storytellers, one shared obsession: making your love story impossible to scroll past. We are the friends with the camera who notice the in-between moments.</p><a className="text-link" href="#contact">Meet the founders <ArrowRight size={16} /></a></div>
      </section>

      <section id="blogs" className="gear section-pad"><div className="section-kicker">THE TOOLKIT</div><h2 className="display-heading">Gears we use<br /><em>to tell your love story</em></h2><p className="narrow-copy">Great stories need great tools. We use the best phones, lenses, and gear to make your big day look and feel unforgettable.</p><div className="gear-slider"><button aria-label="Previous gear" onClick={() => setSlide((slide + 2) % 3)}><ChevronLeft /></button><div><img src={gallery[slide + 3].src} alt="Wedding content creation detail" /><span>01 / 03</span></div><button aria-label="Next gear" onClick={() => setSlide((slide + 1) % 3)}><ChevronRight /></button></div></section>

      <section id="faqs" className="faq-section section-pad"><div className="section-kicker">GOOD TO KNOW</div><div className="faq-layout"><h2 className="display-heading">Questions,<br /><em>answered.</em></h2><Accordion type="single" collapsible className="faq-list">{faqs.map((faq, index) => <AccordionItem value={`faq-${index}`} key={faq.question}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent>{faq.answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section id="contact" className="contact section-pad"><div><div className="section-kicker">ONE MORE THING</div><h2 className="display-heading">Let&apos;s<br /><em>connect.</em></h2><p>Still wondering if we&apos;re the right fit for your wedding?<br />Let&apos;s chat and show you what&apos;s possible.</p><a className="solid-btn" href="mailto:hello@theweddingscroll.in">Start a conversation <ArrowRight size={16} /></a></div><div className="contact-art"><img src={gallery[5].src} alt="Wedding guests celebrating" /></div></section>

      <footer className="mega-footer"><div className="footer-meta"><span>© 2026 Vivahe Unseen</span><span>Made for the moments between the moments.</span><span>Stories worth reliving.</span></div><a className="footer-wordmark" href="#home" aria-label="Vivahe Unseen home">vivahe<br /><em>unseen</em></a></footer>
      <button className="scroll-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top"><ArrowUp size={18} /></button><a className="whatsapp" href="https://wa.me/919999999999" aria-label="Chat on WhatsApp">◔</a>
      {activeVideo !== null && <div className="video-modal" role="dialog" aria-modal="true" aria-label="Wedding reel"><button onClick={() => setActiveVideo(null)} aria-label="Close video"><X /></button><div className="modal-video"><img src={videos[activeVideo].poster} alt={videos[activeVideo].title} /><span className="play large"><Play fill="currentColor" size={25} /></span><p>{videos[activeVideo].title}</p></div></div>}
    </main>
  )
}
