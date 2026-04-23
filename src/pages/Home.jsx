import React, { useState, useEffect } from 'react';

import HeroSection from '../components/home/HeroSection';
import USPSection from '../components/home/USPSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import MaatwerkTeaser from '../components/home/MaatwerkTeaser';
import InstagramStrip from '../components/home/InstagramStrip';
import ReviewSlider from '../components/home/ReviewSlider';

export default function Home() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      naam: 'Sanne',
      beoordeling: 5,
      review_tekst: 'Heerlijke cupcakes en supermooie afwerking. Zeker voor herhaling vatbaar.'
    },
    {
      id: 2,
      naam: 'Milan',
      beoordeling: 5,
      review_tekst: 'De taart zag er prachtig uit en smaakte ook top. Echt ambachtelijk.'
    },
    {
      id: 3,
      naam: 'Laura',
      beoordeling: 5,
      review_tekst: 'Fijne communicatie en alles vers bereid. Aanrader voor feestjes en speciale momenten.'
    }
  ]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    document.title = 'KrisPy Bakery | Ambachtelijke taarten, cupcakes en koekjes in Zierikzee';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Ontdek KrisPy Bakery in Zierikzee. Handgemaakte taarten, cupcakes, koekjes en cinnamon rolls. Vers, ambachtelijk en altijd speciaal voor jou.'
      );
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content =
        'Ontdek KrisPy Bakery in Zierikzee. Handgemaakte taarten, cupcakes, koekjes en cinnamon rolls. Vers, ambachtelijk en altijd speciaal voor jou.';
      document.head.appendChild(meta);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = 'KrisPy Bakery – Ambachtelijk gebak in Zierikzee';

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content =
        'Ambachtelijke taarten, cupcakes, koekjes en cinnamon rolls. Vers uit onze bakkerij in Zierikzee.';
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <USPSection />
      <FeaturedProducts />
      <MaatwerkTeaser />
      <InstagramStrip />
      <ReviewSlider reviews={reviews} isLoading={isLoading} />
    </div>
  );
}
