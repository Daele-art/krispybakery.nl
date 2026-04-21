import React from 'react';
import { Edit, MessageCircle, CalendarCheck } from 'lucide-react';

const steps = [
  { 
    icon: Edit, 
    title: 'Deel je idee', 
    description: 'Kopieer de WhatsApp-template hieronder en stuur je aanvraag rechtstreeks door naar Kris via WhatsApp.' 
  },
  { 
    icon: MessageCircle, 
    title: 'Voorstel & prijs', 
    description: 'Je ontvangt een voorstel met smaken, ontwerp en prijs in overleg.' 
  },
  { 
    icon: CalendarCheck, 
    title: 'Bevestiging & planning', 
    description: 'Na akkoord plannen we jouw bestelling in. Houd rekening met een levertijd van 2–4 weken.' 
  },
];

export default function HoeWerkt() {
  return (
    <section id="hoe-werkt-bestellen" className="py-20 bg-[#F7F1E6]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#3A2A20] mb-12">Hoe werkt bestellen?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-[#D2A679]/20 rounded-2xl flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-[#5B3A2E]" />
              </div>
              <h3 className="text-lg font-semibold text-[#3A2A20] mb-2">
                <span className="text-[#D2A679] mr-2">{index + 1}.</span>{step.title}
              </h3>
              <p className="text-[#3A2A20]/70 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}