
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function MaatwerkTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden card-shadow">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/a6ff9218f_Taart20.jpg"
                alt="Gender reveal taart met naam en versieringen, perfect voorbeeld van maatwerk van KrisPy Bakery"
                className="w-full h-full object-cover scale-75"
                loading="lazy"
                style={{ transform: 'scale(0.75)' }}
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <div className="accent-line"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3A2A20] mb-4">
                Jouw perfecte taart op maat
              </h2>
              <p className="text-[#3A2A20]/70 text-lg leading-relaxed mb-6">
                Of het nu gaat om een bruiloft, verjaardag, of jubileum - wij maken 
                de perfecte taart die past bij jouw speciale moment. Van concept tot 
                uitvoering, alles in nauw overleg met jou.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D2A679] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A2A20]">Vertel ons je idee</h4>
                  <p className="text-[#3A2A20]/70 text-sm">Deel je wensen, gelegenheid en inspiratie</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D2A679] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A2A20]">Wij maken een voorstel</h4>
                  <p className="text-[#3A2A20]/70 text-sm">Inclusief smaken, ontwerp en prijs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D2A679] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-[#3A2A20]">Perfecte oplevering</h4>
                  <p className="text-[#3A2A20]/70 text-sm">Op tijd en precies zoals je het voor ogen had</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link to={createPageUrl('Bestellen')}>
                <Button size="lg" className="btn-primary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Vraag maatwerk aan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
