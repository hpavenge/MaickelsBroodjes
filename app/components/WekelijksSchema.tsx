'use client'
import { useEffect, useState } from 'react'

const dagen = ['dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']

const locaties = {
  even: {
    dinsdag: [
      {
        naam: 'Den Engelsen Bedrijfswagens',
        adres: 'De Keten 1, 5651 GJ Eindhoven',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=De+Keten+1,+Eindhoven',
      },
    ],
    woensdag: [
      {
        naam: 'Huijbregts Helmond',
        adres: 'Vossenbeemd 101, 5705 CL Helmond',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Vossenbeemd+101,+Helmond',
      },
      {
        naam: 'Aarle-Rixtel Kerkplein',
        adres: 'Kouwenberg, 5735 GM Aarle-Rixtel',
        tijd: '16.00 – 19.00 uur',
        maps: 'https://maps.google.com/?q=Kouwenberg+5735+GM+Aarle-Rixtel',
      },
    ],
    donderdag: [
      {
        naam: 'Let’s Wash Carwash Veghel',
        adres: 'Doornhoek 2910, 5465 TC Veghel',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Doornhoek+2910,+Veghel',
      },
      {
        naam: 'Albert Heijn Gemert',
        adres: 'Kapelaanstraat 25, 5421 DD Gemert',
        tijd: '16.00 – 19.00 uur',
        maps: 'https://maps.google.com/?q=Kapelaanstraat+25,+Gemert',
      },
    ],
    vrijdag: [
      {
        naam: 'RVL Auto’s',
        adres: 'Bosscheweg 34, 5741 SX Beek en Donk',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Bosscheweg+34,+Beek+en+Donk',
      },
    ],
    zaterdag: [
      {
        naam: 'Hevu Tools',
        adres: 'Beekerheide 20, 5741 HC Beek en Donk',
        tijd: '12.00 – 15.00 uur',
        maps: 'https://maps.google.com/?q=Beekerheide+20,+Beek+en+Donk',
      },
    ],
  },
  oneven: {
    dinsdag: [
      {
        naam: 'Gate 54 Flightforum',
        adres: 'Luchthavenweg 54, 5657 EB Eindhoven',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Luchthavenweg+54,+Eindhoven',
      },
    ],
    woensdag: [
      {
        naam: 'Mastermate Willemsen',
        adres: 'Scheiweg 27, 5421 XL Gemert',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Scheiweg+27,+Gemert',
      },
    ],
    donderdag: [
      {
        naam: 'It-Connectie Asten',
        adres: 'Stikker 18, 5721 VD Asten',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Stikker+18,+Asten',
      },
      {
        naam: 'Oranjeplein Mariahout',
        adres: 'Oranjeplein, 5738 AN Mariahout',
        tijd: '16.00 – 19.00 uur',
        maps: 'https://maps.google.com/?q=Oranjeplein,+Mariahout',
      },
    ],
    vrijdag: [
      {
        naam: 'Sanders Heftrucks',
        adres: 'Varenschut 19, 5705 DK Helmond',
        tijd: '12.00 – 13.30 uur',
        maps: 'https://maps.google.com/?q=Varenschut+19,+Helmond',
      },
    ],
    zaterdag: [
      {
        naam: 'Hevu Tools',
        adres: 'Beekerheide 20, 5741 HC Beek en Donk',
        tijd: '12.00 – 15.00 uur',
        maps: 'https://maps.google.com/?q=Beekerheide+20,+Beek+en+Donk',
      },
    ],
  },
}

export default function WekelijksSchema() {
  const [selectedDay, setSelectedDay] = useState('dinsdag')
  const [isEvenWeek, setIsEvenWeek] = useState(false)

  useEffect(() => {
    const now = new Date()
    const dayNumber = now.getDay() // zondag = 0
    const oneJan = new Date(now.getFullYear(), 0, 1)
    const numberOfDays = Math.floor((now.getTime() - oneJan.getTime()) / (24 * 60 * 60 * 1000))
    const weekNumber = Math.ceil((now.getDay() + 1 + numberOfDays) / 7)
  
    setIsEvenWeek(weekNumber % 2 === 0)
  
    const dayNames = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
    const vandaag = dayNames[dayNumber]
    if (dagen.includes(vandaag)) setSelectedDay(vandaag)
  }, [])
  

  const weekType = isEvenWeek ? 'even' : 'oneven'
  const data = locaties[weekType][selectedDay] || []

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">📅 Schema</h2>

      <div className="hidden md:flex justify-between flex-wrap gap-2 mb-6 w-full">
        {dagen.map((dag) => (
            <button
            key={dag}
            onClick={() => setSelectedDay(dag)}
            className={`flex-1 px-4 py-2 rounded text-center transition-all ${
                selectedDay === dag ? 'bg-white text-black font-semibold' : 'border border-white text-white'
            }`}
            >
            {dag.charAt(0).toUpperCase() + dag.slice(1)}
            </button>
        ))}
    </div>    
    
    {/* //Mobile navigation for days */}
    <div className="flex md:hidden justify-between items-center mb-6">
        <button
            onClick={() => {
            const currentIdx = dagen.indexOf(selectedDay)
            const prev = (currentIdx - 1 + dagen.length) % dagen.length
            setSelectedDay(dagen[prev])
            }}
            className="px-3 py-2 border border-white rounded"
        >
            ←
        </button>
        <span className="text-lg capitalize">{selectedDay}</span>
        <button
            onClick={() => {
            const currentIdx = dagen.indexOf(selectedDay)
            const next = (currentIdx + 1) % dagen.length
            setSelectedDay(dagen[next])
            }}
            className="px-3 py-2 border border-white rounded"
        >
            →
        </button>
    </div>

    <div
    key={selectedDay}
    className="space-y-6 transition-all duration-500 ease-in-out animate-fade"
    >
        {data.map((locatie, idx) => (
            <div key={idx} className="border border-white p-4 rounded">
            <h3 className="text-xl font-semibold mb-1">{locatie.naam}</h3>
            <p className="text-sm text-gray-300">{locatie.adres}</p>
            <p className="text-sm">🕒 {locatie.tijd}</p>
            <a
                href={locatie.maps}
                target="_blank"
                className="inline-block mt-2 text-sm underline text-blue-400"
            >
                Open in Google Maps
            </a>
            </div>
        ))}
    </div>

    </section>
  )
}
