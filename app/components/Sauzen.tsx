export default function Sauzen() {
    const sauzen = [
      {
        naam: 'Spicy Cocktail',
        afbeelding: '/spicy-cocktail-b.jpg',
        kort: 'Lekkere pittige saus met chipotle kick.',
        alt: 'Spicy Cocktail Saus',
      },
      {
        naam: 'Smokey Cocktail',
        afbeelding: '/smokey-cocktail-b.jpg',
        kort: 'Romige saus met een zachte rooksmaak.',
        alt: 'Smokey Cocktail Saus',
      },
      {
        naam: 'Smokey Barbecue',
        afbeelding: '/smokey-barbecue-b.jpg',
        kort: 'Zoete, gerookte barbecuesaus met karakter.',
        alt: 'Smokey Barbecue Saus',
      },
    ]
  
    return (
      <section className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">🧄 Sauzen van het huis</h2>
  
        <div className="flex gap-6 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6">
          {sauzen.map((saus, index) => (
            <div
              key={index}
              className="min-w-[250px] sm:min-w-0 flex-shrink-0 bg-black text-white rounded shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 overflow-hidden flex flex-col"
            >
              <img
                src={saus.afbeelding}
                alt={saus.alt}
                className="w-full h-60 object-contain"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{saus.naam}</h3>
                <p className="text-sm">{saus.kort}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
  