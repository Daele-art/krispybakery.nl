import React from 'react';
import { Button } from '@/components/ui/button';
import { Info, MessageCircle } from 'lucide-react';

const prijzenData = [
  {
    emoji: '🎂',
    titel: 'Speciale taarten & gelegenheden',
    beschrijving: 'Perfect voor verjaardagen, jubilea, bruiloften en babyshowers.',
    prijsTiers: [
      { type: null, prices: [
        { aantal: 'Basis taart (6–8 pers.)', prijs: 'vanaf €45' },
        { aantal: 'Grote/uitgebreide taart', prijs: '€80–100+' },
        { aantal: 'Speciale gelegenheid', prijs: 'vanaf €60' }
      ]}
    ],
    ctaText: 'Bestel taart'
  },
  {
    emoji: '🧁',
    titel: 'Cupcakes',
    beschrijving: 'Luchtig en feestelijk, verkrijgbaar vanaf 6 stuks.',
    prijsTiers: [
      { type: 'Standaard', prices: [
        { aantal: '6 stuks', prijs: '€14' },
        { aantal: '12 stuks', prijs: '€28' },
        { aantal: '18 stuks', prijs: '€42' }
      ]},
      { type: 'Luxe', sub: '(thema, kinderfeest)', prices: [
        { aantal: '6 stuks', prijs: '€18' },
        { aantal: '12 stuks', prijs: '€36' },
        { aantal: '18 stuks', prijs: '€54' }
      ]}
    ],
    extraInfo: 'Mix & Match smaken per 6',
    ctaText: 'Bestel cupcakes'
  },
  {
    emoji: '🍪',
    titel: 'Cookies',
    beschrijving: 'Versgebakken met wisselende seizoenssmaken.',
    prijsTiers: [
      { type: 'Standaard', prices: [
        { aantal: '6 stuks', prijs: '€12' },
        { aantal: '12 stuks', prijs: '€24' },
        { aantal: '18 stuks', prijs: '€36' }
      ]},
      { type: 'Luxe', sub: '(gevuld, gedipt)', prices: [
        { aantal: '6 stuks', prijs: '€15' },
        { aantal: '12 stuks', prijs: '€30' },
        { aantal: '18 stuks', prijs: '€45' }
      ]}
    ],
    ctaText: 'Bestel cookies'
  },
  {
    emoji: '🥯',
    titel: 'Cinnamonrolls',
    beschrijving: 'Zachte kaneelrollen die ruiken naar gezelligheid.',
    prijsTiers: [
      { type: 'Standaard', prices: [
        { aantal: '6 stuks', prijs: '€18' },
        { aantal: '12 stuks', prijs: '€36' },
        { aantal: '18 stuks', prijs: '€54' }
      ]},
      { type: 'Luxe', sub: '(roomkaas-topping)', prices: [
        { aantal: '6 stuks', prijs: '€22,50' },
        { aantal: '12 stuks', prijs: '€45' },
        { aantal: '18 stuks', prijs: '€67,50' }
      ]}
    ],
    ctaText: 'Bestel rolls'
  }
];

const infoBlokjes = [
  { icon: Info, text: 'Cupcakes, cookies en cinnamon rolls zijn verkrijgbaar vanaf 6 stuks en kunnen per 6 worden verhoogd.' },
  { icon: Info, text: 'Smaken kunnen per 6 worden gecombineerd.' },
  { icon: MessageCircle, text: 'Bestellen gaat eenvoudig via WhatsApp!' }
];

export default function RichtprijzenSectie() {
  return (
    <section className="py-20 bg-[#FBF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A2A20] mb-4">
            Richtprijzen
          </h2>
          <p className="text-lg text-[#3A2A20]/70 max-w-xl mx-auto">
            Ambachtelijk gebakken. Cupcakes, cookies en cinnamon rolls vanaf 6 stuks, daarna te verhogen per 6.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {prijzenData.map((product) => (
            <div key={product.titel} className="bg-white rounded-2xl p-8 border border-[#E6D7C6]/50 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold text-[#3A2A20] mb-2">
                  {product.emoji} {product.titel}
                </h3>
                <p className="text-[#3A2A20]/70">{product.beschrijving}</p>
              </div>
              
              <div className="space-y-6 flex-grow">
                {product.prijsTiers.map((tier, index) => (
                  <div key={index}>
                    {tier.type && (
                      <h4 className="font-semibold text-[#5B3A2E] mb-2">
                        {tier.type}
                        {tier.sub && <span className="font-normal text-[#3A2A20]/60 ml-2">{tier.sub}</span>}
                      </h4>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
                      {tier.prices.map((item, i) => (
                        <div key={i} className="p-3 rounded-lg bg-[#F7F1E6]">
                          <div className="text-sm font-medium text-[#3A2A20]">{item.aantal}</div>
                          <div className="text-sm font-semibold text-[#3A2A20]">{item.prijs}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {product.extraInfo && (
                <p className="text-center text-sm text-[#3A2A20]/60 mt-4">{product.extraInfo}</p>
              )}

              <div className="mt-8 text-center">
                <a href="#whatsapp-template">
                  <Button size="lg" className="btn-primary w-full sm:w-auto px-10">
                    {product.ctaText}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-[#E6D7C6] pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {infoBlokjes.map((info, index) => (
              <div key={index} className="flex flex-col items-center">
                <info.icon className="w-6 h-6 text-[#D2A679] mb-2" />
                <p className="text-sm text-[#3A2A20]/80 max-w-xs">{info.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}