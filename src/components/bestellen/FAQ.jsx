import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wanneer kan ik mijn bestelling ophalen?",
    answer: "Standaard duurt het 2 tot 4 weken voordat jouw bestelling klaar is. Bij drukte kan dit iets langer zijn. Zodra we jouw aanvraag ontvangen, stemmen we samen de exacte ophaaldatum af. Heb je een spoedbestelling? Stuur gerust een WhatsApp-bericht, dan kijken we samen naar de mogelijkheden.",
  },
  {
    question: "Wat kost het?",
    answer: "Je kunt de richtprijzen vinden in de prijzensectie hierboven. Gebruik deze om je eigen prijsinschatting te maken bij je bestelling. De definitieve prijs ontvang je altijd van Kris na het doorsturen van je bestelling via WhatsApp. Deze kan iets afwijken van de richtprijs, afhankelijk van specifieke wensen, decoratie-complexiteit of seizoensgebonden ingrediënten.",
  },
  {
    question: "Hoe werkt de betaling en wanneer is mijn bestelling definitief?",
    answer: "Na akkoord op het prijsvoorstel vragen we om een vooruitbetaling. Zodra je betaling is ontvangen, wordt je bestelling definitief ingepland. Zonder betaling kan deze helaas niet in productie worden genomen.",
  },
  {
    question: "Kan ik mijn bestelling afhalen of wordt het bezorgd?",
    answer: "Alleen afhalen is mogelijk op het adres: Beddeweeg 12, 4301 EK Zierikzee. We spreken in overleg een geschikte datum en tijd af voor het afhalen.",
  },
  {
    question: "Wat is de minimale bestelhoeveelheid?",
    answer: "Voor cupcakes, cookies en cinnamon rolls is de minimale bestelhoeveelheid 6 stuks. Je kunt daarna verhogen per 6 stuks (dus 6, 12, 18, 24, etc.). Voor taarten op maat is de minimale afname afhankelijk van het type en formaat.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#3A2A20] mb-8">
          Veelgestelde vragen
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#E6D7C6]">
              <AccordionTrigger className="text-left text-lg font-semibold text-[#3A2A20] hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-[#3A2A20]/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}