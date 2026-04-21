
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ShoppingBag, MessageCircle, Quote, Instagram } from 'lucide-react'; // Added Instagram import

export default function OverPage() {
  useEffect(() => {
    document.title = 'Over Kris - KrisPy Bakery | Ambachtelijk bakken vanuit Zierikzee';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leer Kris kennen, de passioneerde baker achter KrisPy Bakery. Ambachtelijk bakken vanuit het hart in Zierikzee. Elke creatie met liefde gemaakt.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leer Kris kennen, de passioneerde baker achter KrisPy Bakery. Ambachtelijk bakken vanuit het hart in Zierikzee. Elke creatie met liefde gemaakt.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = 'Over Kris - KrisPy Bakery Zierikzee';
    else { // Create if not found
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:title');
      meta.content = 'Over Kris - KrisPy Bakery Zierikzee';
      document.head.appendChild(meta);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = 'Ontmoet Kris, de passioneerde baker achter KrisPy Bakery in Zierikzee. Ambachtelijk en met liefde.';
    else { // Create if not found
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'og:description');
      meta.content = 'Ontmoet Kris, de passioneerde baker achter KrisPy Bakery in Zierikzee. Ambachtelijk en met liefde.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Sectie 1 — Intro */}
        <section className="text-center">
          <div className="accent-line mx-auto"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3A2A20] mb-4">
            Over mij
          </h1>
          <div className="text-lg text-[#3A2A20]/80 max-w-3xl mx-auto space-y-4 text-center leading-relaxed">
            <p>Hoi, ik ben Kris en ik bak me een weg door het leven, van koekjes tot taarten en alles ertussenin. Al sinds ik klein was stond ik met mijn neus boven de beslagkom. Wat toen begon als geklieder met bloem en boter, is inmiddels uitgegroeid tot mijn grootste passie: bakken.</p>
            <p>Ik woon in hartje Zierikzee en vul mijn huis – en soms zelfs de hele straat – met de geur van versgebakken koekjes, cupcakes, taarten en kaneelbroodjes. Voor mij draait bakken niet alleen om smaak (al kan ik geen nee zeggen tegen chocola, slagroom en alles wat daar tussen past), maar vooral om dat ene moment waarop iemand een hap neemt en vanzelf begint te glimlachen.</p>
            <p>Want waar je hart vol van is – en liefde door de maag gaat – daar stroomt het vanzelf van over. Familie, vrienden en kennissen krijgen dus regelmatig iets lekkers voorgeschoteld. En de buren? Die hoeven alleen maar hun neus te volgen.</p>
            <p>Bakken is voor mij delen. En wat ik met liefde uit de oven haal, deel ik ook graag met jou.</p>
          </div>
        </section>

        {/* Sectie 2 — Kris in Actie (Hoofdfocus) */}
        <section className="text-center">
          <div className="max-w-lg mx-auto">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden card-shadow hover:shadow-2xl transition-shadow duration-500">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/226ab6d97_Krisgender-revealtaartWes.jpg"
                alt="Kris van KrisPy Bakery met een zelfgemaakte taart, stralend van trots en vreugde"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-[#3A2A20]/60 text-sm mt-4 italic">
              De vreugde van het delen - Kris met een van haar speciale taarten
            </p>
          </div>
        </section>

        {/* Sectie 3 — Quote */}
        <section>
          <div className="bg-[#F7F1E6] rounded-2xl p-8 text-center card-shadow max-w-3xl mx-auto">
            <Quote className="w-8 h-8 text-[#D2A679] mx-auto mb-4" />
            <blockquote className="text-xl italic text-[#3A2A20] leading-relaxed">
              "Bakken is voor mij een manier om mensen blij te maken met iets unieks en persoonlijks."
            </blockquote>
          </div>
        </section>

        {/* Sectie 4 — Call-to-action */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#3A2A20] mb-4">
            Benieuwd naar mijn creaties?
          </h2>
          <p className="text-[#3A2A20]/80 mb-8 max-w-lg mx-auto">
            Bekijk mijn Instagram-pagina voor inspiratie of plaats direct je bestelling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.instagram.com/krispy.bakery/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-[#5B3A2E] text-[#5B3A2E] hover:bg-[#5B3A2E] hover:text-white">
                <Instagram className="w-5 h-5 mr-2" />
                Bekijk Instagram
              </Button>
            </a>
            <Link to={createPageUrl('Bestellen')}>
              <Button size="lg" className="btn-primary w-full sm:w-auto">
                <ShoppingBag className="w-5 h-5 mr-2" />
                Bestel direct
              </Button>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
