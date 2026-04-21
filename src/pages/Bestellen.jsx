
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { MessageCircle, Gift, Copy, Check, ChevronRight } from 'lucide-react';

import BestellenHero from '../components/bestellen/BestellenHero';
import RichtprijzenSectie from '../components/bestellen/RichtprijzenSectie';
import HoeWerkt from '../components/bestellen/HoeWerkt';
import WhatsappTemplate from '../components/bestellen/WhatsappTemplate';
import FAQ from '../components/bestellen/FAQ';

export default function BestellenPage() {
  useEffect(() => {
    document.title = 'Bestellen - KrisPy Bakery | Ambachtelijke taarten op maat in Zierikzee';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Bestel ambachtelijk gebak bij KrisPy Bakery in Zierikzee. Maatwerk taarten, cupcakes, cookies en cinnamon rolls. Eenvoudig bestellen via WhatsApp met levertijd 2-4 weken.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Bestel ambachtelijk gebak bij KrisPy Bakery in Zierikzee. Maatwerk taarten, cupcakes, cookies en cinnamon rolls. Eenvoudig bestellen via WhatsApp met levertijd 2-4 weken.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = 'Bestellen bij KrisPy Bakery - Ambachtelijk gebak in Zierikzee';

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = 'Bestel verse taarten, cupcakes en meer. Maatwerk mogelijk. Levertijd 2-4 weken.';
  }, []);

  return (
    <div className="bg-white">
      <BestellenHero />
      <RichtprijzenSectie />
      <HoeWerkt />
      <WhatsappTemplate />
      <FAQ />
      
      {/* Final CTA */}
      <section className="py-20 bg-[#F7F1E6]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-[#3A2A20] mb-4">
            Klaar om iets lekkers samen te stellen?
          </h2>
          <a href="#whatsapp-template">
            <Button size="lg" className="btn-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Naar bestel-template
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
