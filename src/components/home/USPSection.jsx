import React from 'react';
import { Cake, Heart, Leaf, Phone } from 'lucide-react';

export default function USPSection() {
  const usps = [
    {
      icon: Cake,
      title: 'Dagvers',
      description: 'Alles wordt vers op de dag gebakken voor de beste smaak en kwaliteit.'
    },
    {
      icon: Heart,
      title: 'Maatwerk',
      description: 'Elk gebakje wordt persoonlijk aangepast aan jouw wensen en gelegenheid.'
    },
    {
      icon: Leaf,
      title: 'Lokale ingrediënten',
      description: 'We werken met verse, lokale ingrediënten voor de beste smaak.'
    },
    {
      icon: Phone,
      title: 'Persoonlijk contact',
      description: 'Direct contact met Kris voor al je vragen en speciale wensen.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-[#D2A679]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#D2A679]/30 transition-colors duration-300">
                <usp.icon className="w-8 h-8 text-[#5B3A2E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#3A2A20] mb-2">{usp.title}</h3>
              <p className="text-[#3A2A20]/70 text-sm leading-relaxed">{usp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}