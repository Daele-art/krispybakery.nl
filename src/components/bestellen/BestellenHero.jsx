import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

export default function BestellenHero() {
  return (
    <section className="bg-[#F7F1E6] py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3A2A20] mb-4">
          Bestellen op maat
        </h1>
        <p className="text-xl text-[#3A2A20]/80 mb-8">
          Ambachtelijk gebak, vers en persoonlijk. Stel hieronder je bestelling samen.
        </p>
        <a href="#whatsapp-template">
          <Button size="lg" className="btn-primary">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start je bestelling
          </Button>
        </a>
        <p className="text-sm text-[#3A2A20]/60 mt-4">
          Levertijd: <strong>2–4 weken</strong> • Prijs: <strong>in overleg</strong>
        </p>
      </div>
    </section>
  );
}