
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  useEffect(() => {
    document.title = 'Veelgestelde Vragen - KrisPy Bakery | Info over bestellen en levertijden';
    
    // Update or create meta description
    const newDescriptionContent = 'Antwoorden op veelgestelde vragen over bestellen bij KrisPy Bakery Zierikzee. Info over levertijden, prijzen, dieetwensen, allergenen en meer.';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', newDescriptionContent);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = newDescriptionContent;
      document.head.appendChild(metaDescription);
    }

    // Update or create Open Graph title
    const newOgTitleContent = 'FAQ - KrisPy Bakery Zierikzee';
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', newOgTitleContent);
    } else {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      ogTitle.content = newOgTitleContent;
      document.head.appendChild(ogTitle);
    }

    // Update or create Open Graph description
    const newOgDescriptionContent = 'Veelgestelde vragen over bestellen, levertijden en producten bij KrisPy Bakery.';
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', newOgDescriptionContent);
    } else {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      ogDescription.content = newOgDescriptionContent;
      document.head.appendChild(ogDescription);
    }

  }, []);

  const faqSections = [
    {
      title: "Bestellen & Levertijd",
      items: [
        {
          question: "Wanneer kan ik mijn bestelling ophalen?",
          answer: "Standaard duurt het 2 tot 4 weken voordat jouw bestelling klaar is. Bij drukte kan dit iets langer zijn. Omdat KrisPy Bakery een eenmanszaak is, plannen we samen de exacte afhaaldatum in. Heb je een spoedbestelling? Stuur gerust een WhatsApp-bericht, dan kijken we naar de mogelijkheden."
        },
        {
          question: "Wat kost het?",
          answer: "De prijs is altijd in overleg en afhankelijk van de maat, smaak en de complexiteit van de decoratie. Nadat je je wensen hebt doorgegeven, ontvang je een vrijblijvend prijsvoorstel."
        },
        {
          question: "Hoe werkt de betaling en wanneer is mijn bestelling definitief?",
          answer: "Na akkoord op het prijsvoorstel en de details van je bestelling, vragen we om een vooruitbetaling. Zodra je betaling is ontvangen, wordt je bestelling definitief ingepland en in productie genomen. Zonder betaling kan je bestelling helaas niet worden gestart."
        },
        {
          question: "Kan ik mijn bestelling afhalen of wordt het bezorgd?",
          answer: "Alle bestellingen kunnen alleen worden afgehaald op het adres Beddeweeg 12, 4301 EK Zierikzee. We spreken in overleg een datum en tijd af."
        },
        {
          question: "Hoe plaats ik een bestelling?",
          answer: "Je kunt eenvoudig bestellen via WhatsApp. Gebruik de template op onze Bestelpagina om je wensen door te geven."
        },
        {
          question: "Kan ik een bestelling wijzigen of annuleren?",
          answer: "Neem zo snel mogelijk contact op via WhatsApp als je een bestelling wilt wijzigen of annuleren. Omdat we kleinschalig werken, bekijken we samen wat er nog mogelijk is."
        }
      ]
    },
    {
      title: "Producten & Dieetwensen",
      items: [
        {
          question: "Welke soorten gebak bieden jullie aan?",
          answer: "Wij maken met plezier maatwerk taarten, cupcakes, cookies, cinnamon rolls en gebak voor speciale gelegenheden. Omdat KrisPy Bakery een eenmanszaak is, kan het aanbod per periode verschillen."
        },
        {
          question: "Kan ik dieetwensen of allergenen doorgeven?",
          answer: "Ja, graag zelfs. Geef je dieetwensen en allergieën door bij je bestelling via WhatsApp. We denken graag mee over wat mogelijk is, al kunnen we niet altijd elke wens realiseren."
        },
        {
          question: "Bieden jullie glutenvrij, suikervrij of veganistisch gebak aan?",
          answer: "Dit kan op aanvraag en is afhankelijk van het product. Bespreek je wensen via WhatsApp, dan kijken we samen wat haalbaar is."
        },
        {
          question: "Hoe kan ik mijn gebak het beste bewaren?",
          answer: "De meeste producten bewaar je het best in de koelkast. Bij het ophalen geven we altijd een persoonlijk advies mee, zodat je gebak zo lang mogelijk vers blijft."
        }
      ]
    },
    {
      title: "Contact & Overig",
      items: [
        {
          question: "Hoe kan ik contact opnemen?",
          answer: "De snelste manier is via WhatsApp: +31 6 57 58 68 40."
        },
        {
          question: "Kan ik langskomen in de bakkerij?",
          answer: "KrisPy Bakery is een aan-huis bakkerij. We ontvangen alleen op afspraak voor het ophalen van bestellingen."
        },
        {
          question: "Accepteren jullie cadeaubonnen?",
          answer: "Op dit moment nog niet. Mogelijk in de toekomst wel."
        },
        {
          question: "Waar is KrisPy Bakery gevestigd?",
          answer: "Wij zijn gevestigd in Zierikzee, Zeeland. Alle bestellingen worden vanuit hier gemaakt en meegegeven."
        }
      ]
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="accent-line mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A2A20] mb-4">
            Veelgestelde vragen
          </h1>
          <p className="text-xl text-[#3A2A20]/80 max-w-2xl mx-auto">
            Hier vind je antwoorden op de meest gestelde vragen over KrisPy Bakery. 
            Staat je vraag er niet bij? Neem gerust contact op!
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-[#F7F1E6] rounded-2xl p-6 card-shadow">
              <h2 className="text-2xl font-bold text-[#3A2A20] mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-[#D2A679]" />
                {section.title}
              </h2>
              
              <Accordion type="single" collapsible className="w-full">
                {section.items.map((item, itemIndex) => (
                  <AccordionItem 
                    key={itemIndex} 
                    value={`section-${sectionIndex}-item-${itemIndex}`}
                    className="border-b border-[#E6D7C6] last:border-b-0"
                  >
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#3A2A20] hover:no-underline py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-[#3A2A20]/80 pb-4 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 card-shadow">
            <h3 className="text-2xl font-bold text-[#3A2A20] mb-4">
              Staat je vraag er niet bij?
            </h3>
            <p className="text-[#3A2A20]/70 mb-6">
              Neem gerust contact met ons op via WhatsApp. We helpen je graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/31657586840" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="btn-primary w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Stuur WhatsApp bericht
                </Button>
              </a>
              <Link to={createPageUrl('Bestellen')}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#5B3A2E] text-[#5B3A2E] hover:bg-[#5B3A2E] hover:text-white">
                  Ga naar bestelpagina
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
