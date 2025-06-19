import HeroCarousel from './components/HeroCarousel';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <HeroCarousel/>

      {/* Locaties */}
      <section id="locaties" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">📍 Standplaatsen</h2>
        <ul className="space-y-3 text-lg">
          <li>📍 <strong>Dinsdag</strong> – Luchthavenweg 54, Eindhoven</li>
          <li>📍 <strong>Woensdag</strong> – Scheiweg 27, Gemert</li>
          <li>📍 <strong>Donderdag</strong> – Stikker 18, Asten</li>
          <li>📍 <strong>Vrijdag</strong> – Varenshut 19, Helmond</li>
        </ul>
      </section>

      {/* Sauzen */}
      <section className="max-w-4xl mx-auto px-4 py-16 bg-white text-black rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">🌶️ Sauzen van het huis</h2>
        <p className="text-lg">
          Unieke sauzen waar je je vingers bij aflikt – pittig, romig of verrassend zoet.
          Altijd vers en huisgemaakt!
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-6">📬 Contact / Boekingen</h2>
        <form className="space-y-4">
          <input
            className="w-full p-3 text-black rounded"
            type="text"
            placeholder="Naam"
          />
          <input
            className="w-full p-3 text-black rounded"
            type="email"
            placeholder="E-mail"
          />
          <textarea
            className="w-full p-3 text-black rounded"
            placeholder="Bericht"
            rows={5}
          ></textarea>
          <button
            className="px-5 py-2 bg-white text-black font-medium rounded hover:bg-gray-200 transition"
            type="submit"
          >
            Verstuur
          </button>
        </form>
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
