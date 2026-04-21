import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Check, MessageCircle } from 'lucide-react';

export default function WhatsappTemplate() {
  const [isCopied, setIsCopied] = useState(false);
  const templateText = `🍰 KrisPy Bakery – 
Hallo Kris, ik wil een bestelling plaatsen

Producttype:
Taart 🎂 / Cupcakes 🧁 / Cookies 🍪 / Cinnamon-rolls 🌀

✨ Variant: Standaard / Luxe
😋 Smaak: …
🔢 Aantal stuks / personen: …
🎨 Thema / decoratie: …
🥛 Dieetwensen (optioneel): …
📅 Gewenste afhaaldatum: …
👤 Naam: …`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <section id="whatsapp-template" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3A2A20]">Kopieer & Plak: WhatsApp-template</h2>
          <p className="text-[#3A2A20]/70 mt-2">
            Kopieer de tekst hieronder, vul je gegevens in en stuur naar Kris.
          </p>
        </div>
        
        <div className="bg-[#F7F1E6] border border-[#E6D7C6] rounded-2xl p-6">
          <textarea
            readOnly
            rows="15"
            className="w-full font-mono text-sm border border-[#E6D7C6] rounded-lg p-4 bg-white resize-none focus:ring-2 focus:ring-[#D2A679]"
            value={templateText}
          />
          <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center">
            <Button onClick={handleCopy} variant="outline" className="w-full sm:w-auto border-[#5B3A2E] text-[#5B3A2E] hover:bg-[#5B3A2E] hover:text-white">
              {isCopied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
              {isCopied ? 'Gekopieerd!' : 'Kopieer tekst'}
            </Button>
            <a href="https://wa.me/31657586840" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full btn-primary">
                <MessageCircle className="w-4 h-4 mr-2" />
                Open WhatsApp
              </Button>
            </a>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-xs text-blue-800 font-medium mb-2">💡 Tips voor je bestelling:</p>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Gebruik de richtprijzen uit de sectie hierboven voor een prijsindicatie</li>
              <li>• Cupcakes, cookies en cinnamon rolls: vanaf 6 stuks, daarna per 6 te verhogen</li>
              <li>• Voor speciale taarten: denk aan complexiteit van decoratie</li>
              <li>• Houd rekening met 2-4 weken levertijd</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}