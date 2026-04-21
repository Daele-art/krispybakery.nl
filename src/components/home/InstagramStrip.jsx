import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';

export default function InstagramStrip() {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/60c16bd22_Cupcakes70.jpg',
      alt: 'Luxe cupcakes met gouden decoratie en glamoureuze topping van KrisPy Bakery'
    },
    {
      id: 2,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/6d696a693_Cupcakes34.jpg',
      alt: 'Schattige bloem cupcakes met bijtjes decoratie, perfect voor een lente feestje'
    },
    {
      id: 3,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/be369905a_TaartLekker.jpg',
      alt: 'Ambachtelijke taart met romige topping en chocolade krullen van KrisPy Bakery'
    },
    {
      id: 4,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/7287802a3_Cupcakes10.jpg',
      alt: 'Groene thema cupcakes met verschillende decoraties en vrolijke kleuren'
    },
    {
      id: 5,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/26986d2c1_Cupcakes20.jpg',
      alt: 'Elegante cupcakes met roze vlinders, perfect voor een meisjesfeestje'
    },
    {
      id: 6,
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68a3583a27cb83ccaffafd0e/d32b68a13_Cupcakes41.jpg',
      alt: 'Baby shower cupcakes met schattige voetjes decoratie in roze en wit'
    }
  ];

  return (
    <section className="py-16 bg-[#F7F1E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-[#5B3A2E]" />
            <h2 className="text-2xl font-bold text-[#3A2A20]">Volg ons op Instagram</h2>
          </div>
          <p className="text-[#3A2A20]/70">
            Ontdek onze nieuwste creaties en krijg inspiratie voor je volgende bestelling
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/krispy.bakery/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden card-shadow hover:shadow-lg transition-all duration-300"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/krispy.bakery/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5B3A2E] font-medium hover:text-[#4A2F25] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            @krispy.bakery - Bekijk meer op Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}