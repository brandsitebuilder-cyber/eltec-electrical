import { useState, type FormEvent } from 'react';
import { Zap, Building2, Home, Phone, Mail, MapPin, Star, ChevronRight, Menu, X, Shield, Clock, Award } from 'lucide-react';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 4000);
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-border-subtle">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Eltec Electrical" className="h-9 w-auto" />
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
            <a href="#services" className="hover:text-accent transition-colors">Services</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#reviews" className="hover:text-accent transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <a href="tel:+27813917733" className="flex items-center gap-2 bg-accent text-black font-semibold px-4 py-2 rounded-lg text-sm hover:bg-accent/90 transition-colors">
              <Phone className="w-4 h-4" />
              081 391 7733
            </a>
          </div>
          <button className="md:hidden text-text" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden bg-bg-card border-t border-border-subtle px-6 py-4 flex flex-col gap-4">
            <a href="#services" className="text-text-muted hover:text-accent" onClick={() => setMobileOpen(false)}>Services</a>
            <a href="#about" className="text-text-muted hover:text-accent" onClick={() => setMobileOpen(false)}>About</a>
            <a href="#reviews" className="text-text-muted hover:text-accent" onClick={() => setMobileOpen(false)}>Reviews</a>
            <a href="#contact" className="text-text-muted hover:text-accent" onClick={() => setMobileOpen(false)}>Contact</a>
            <a href="tel:+27813917733" className="flex items-center gap-2 bg-accent text-black font-semibold px-4 py-2 rounded-lg text-sm w-fit">
              <Phone className="w-4 h-4" /> 081 391 7733
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-glow via-transparent to-transparent opacity-30 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-accent text-sm mb-8">
            <Clock className="w-4 h-4" />
            24/7 Emergency Electrical Services
          </div>
          <div className="mb-8">
            <img src="/logo.png" alt="Eltec Electrical — Your Partner in Power" className="h-24 md:h-28 w-auto mx-auto" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Powering Cape Town's
            <br />
            <span className="text-accent">Industry & Homes</span>
          </h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-10">
            Commercial, industrial and residential electrical services. 
            Trusted by businesses across the Western Cape since establishment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors">
              Get a Quote <ChevronRight className="w-4 h-4" />
            </a>
            <a href="tel:+27813917733" className="inline-flex items-center gap-2 border border-border text-text px-8 py-3.5 rounded-lg hover:border-accent/30 transition-colors font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Electrical Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border-subtle rounded-2xl overflow-hidden">
            {[
              { icon: Building2, title: 'Commercial', desc: 'Office fit-outs, retail electrical, distribution boards, emergency lighting, COC certificates.', features: ['Office & Retail', 'DB Boards', 'Lighting Design'] },
              { icon: Zap, title: 'Industrial', desc: 'Factory wiring, motor controls, machine installations, power factor correction, preventative maintenance.', features: ['Factory Wiring', 'Motor Controls', 'Preventative Maintenance'] },
              { icon: Home, title: 'Residential', desc: 'Home rewiring, geyser installation, plug points, LED lighting, solar-ready DB boards, COC inspections.', features: ['Rewiring', 'Geysers', 'Solar-Ready'] },
            ].map((s, i) => (
              <div key={i} className="bg-bg-card p-8 hover:bg-bg-elevated transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <s.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">{s.title}</h3>
                <p className="text-text-muted text-sm mb-5 leading-relaxed">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-bg-card border-y border-border-subtle">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
          {[
            { value: '15+', label: 'Years Experience', icon: Award },
            { value: '4.8', label: 'Google Rating', icon: Star },
            { value: '24/7', label: 'Emergency Service', icon: Shield },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <s.icon className="w-6 h-6 text-accent mb-1" />
              <div className="text-3xl md:text-4xl font-bold text-accent">{s.value}</div>
              <div className="text-sm text-text-muted">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">About Us</p>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Electrical Excellence in the Western Cape</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>Eltec Electrical (Pty) Ltd provides professional electrical services across Cape Town's northern suburbs and beyond. We specialise in commercial, industrial and residential electrical work — from new installations to maintenance and emergency repairs.</p>
                <p>Based in Stikland Industrial, our team of qualified electricians delivers safe, code-compliant electrical solutions. Every job comes with a Certificate of Compliance where required.</p>
              </div>
            </div>
            <div className="md:col-span-2 bg-bg-card border border-border-subtle rounded-2xl p-6 space-y-4">
              <h4 className="font-semibold text-sm text-text-muted uppercase tracking-wider">Areas We Cover</h4>
              <div className="flex flex-wrap gap-2">
                {['Bellville','Durbanville','Brackenfell','Stikland','Parow','Goodwood','Kuils River','Kraaifontein'].map(a => (
                  <span key={a} className="px-3 py-1.5 bg-bg rounded-lg text-xs text-text-muted border border-border-subtle">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 px-6 bg-bg-card border-y border-border-subtle">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Reviews</p>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
            <span className="text-2xl font-bold ml-2">4.8</span>
          </div>
          <p className="text-text-muted mb-12">6 Google reviews</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { text: "Excellent service. Professional team and always reliable. They handle all our commercial electrical work.", author: "Business Client" },
              { text: "Fast response on emergency call-out. Had our power back on within hours. Highly recommended.", author: "Residential Client" },
              { text: "Did a full office rewire for us — neat work, on time, and on budget. Won't use anyone else now.", author: "Office Manager" },
              { text: "Came out at 10pm on a Saturday when our factory DB board tripped. Sorted within the hour. Legends.", author: "Factory Owner" },
            ].map((r, i) => (
              <div key={i} className="bg-bg border border-border-subtle rounded-xl p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-text text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="text-text-muted text-xs font-semibold">— {r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent text-sm font-semibold tracking-wider uppercase mb-3">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let's Talk</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              {formSent ? (
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-muted">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Name</label>
                      <input required className="w-full bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text focus:border-accent/30 focus:outline-none transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text-muted mb-2">Phone</label>
                      <input required type="tel" className="w-full bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text focus:border-accent/30 focus:outline-none transition-colors" placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Email</label>
                    <input required type="email" className="w-full bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text focus:border-accent/30 focus:outline-none transition-colors" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Service Needed</label>
                    <select className="w-full bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text focus:border-accent/30 focus:outline-none transition-colors">
                      <option>Commercial Electrical</option>
                      <option>Industrial Electrical</option>
                      <option>Residential Electrical</option>
                      <option>Emergency Repair</option>
                      <option>COC Certificate</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-muted mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-bg-card border border-border-subtle rounded-lg px-4 py-3 text-text focus:border-accent/30 focus:outline-none transition-colors resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <button type="submit" className="w-full bg-accent text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-accent/90 transition-colors flex items-center justify-center gap-2">
                    Send Message <ChevronRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
            <div className="md:col-span-2 space-y-8">
              <div className="bg-bg-card border border-border-subtle rounded-2xl p-6 space-y-5">
                {[
                  { icon: MapPin, label: 'Address', value: 'Unit 23, Hydro Park 2, Hydro Street\nStikland Industrial, 7530' },
                  { icon: Phone, label: 'Phone', value: '081 391 7733', href: 'tel:+27813917733' },
                  { icon: Mail, label: 'Email', value: 'info@eltec.co.za', href: 'mailto:info@eltec.co.za' },
                ].map((c, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <c.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted uppercase tracking-wider mb-1">{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className="text-text hover:text-accent transition-colors font-medium whitespace-pre-line">{c.value}</a>
                      ) : (
                        <p className="text-text font-medium whitespace-pre-line">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* Google Map */}
              <div className="bg-bg-card border border-border-subtle rounded-2xl overflow-hidden h-48">
                <iframe
                  title="Location"
                  className="w-full h-full"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5!2d18.665!3d-33.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzE4LjAiUyAxOMKwMzknNTQuMCJF!5e0!3m2!1sen!2sza!4v1"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-border-subtle">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-text-muted">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-accent" />
            <span>Eltec Electrical (Pty) Ltd © {new Date().getFullYear()}</span>
          </div>
          <p>Commercial · Industrial · Residential</p>
        </div>
      </footer>

      {/* WhatsApp Float */}
      <a
        href="https://wa.me/27813917733"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform hover:shadow-xl group"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
