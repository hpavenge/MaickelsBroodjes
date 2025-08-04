import HeroCarousel from './components/HeroCarousel';
import WekelijksSchema from './components/WekelijksSchema'
import Sauzen from './components/Sauzen'
import ContactForm from './components/ContactForm'


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <HeroCarousel/>

      {/* Locaties */}
      <WekelijksSchema />

      {/* Sauzen */}
      <Sauzen />

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">📬 Contact / Boekingen</h2>
        <ContactForm />
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Maickels Broodjes ·{" "}
        <a href="https://www.instagram.com/maickelsbroodjes" target="_blank" className="underline">
          Instagram
        </a>
      </footer>
    </main>
  );
}
