
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-[#F7F1E6] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="accent-line"></div>
              <p className="text-2xl md:text-3xl font-bold text-[#5B3A2E] mb-4">
                Zoet, Vers & Altijd Speciaal voor jou
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#3A2A20] leading-tight">
                Vers gebakken.<br />
                <span className="font-normal text-[#3A2A20]/80">Persoonlijk gemaakt.</span>
              </h1>
              <p className="text-xl text-[#3A2A20]/80 mt-6 max-w-lg">
                Ambachtelijk gebak en maatwerk vanuit onze aan-huis bakkerij. 
                Elke creatie wordt met liefde en zorg voor jou gemaakt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={createPageUrl('Bestellen')}>
                <Button 
                  size="lg"
                  className="w-full sm:w-auto btn-primary"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Bestel direct
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center text-[#3A2A20]/70">
                <span className="text-sm font-medium">Dagvers gebakken</span>
              </div>
              <div className="w-1 h-1 bg-[#D2A679] rounded-full" aria-hidden="true"></div>
              <div className="flex items-center text-[#3A2A20]/70">
                <span className="text-sm font-medium">Lokale ingrediënten</span>
              </div>
              <div className="w-1 h-1 bg-[#D2A679] rounded-full" aria-hidden="true"></div>
              <div className="flex items-center text-[#3A2A20]/70">
                <span className="text-sm font-medium">Op maat gemaakt</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden card-shadow">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/d1deb20a4_Taartfotohomepagina.jpg"
                alt="Ambachtelijke taart met romige topping en chocolade krullen, handgemaakt door KrisPy Bakery in Zierikzee"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -right-6 bg-[#5B3A2E] text-white px-6 py-3 rounded-2xl card-shadow" aria-label="Opgericht in 2025">
              <div className="text-center">
                <div className="text-2xl font-bold">EST</div>
                <div className="text-sm">2025</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
