import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Review } from '@/api/entities';

import HeroSection from '../components/home/HeroSection';
import USPSection from '../components/home/USPSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import MaatwerkTeaser from '../components/home/MaatwerkTeaser';
import InstagramStrip from '../components/home/InstagramStrip';
import ReviewSlider from '../components/home/ReviewSlider';

export default function Home() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set page title and meta tags
    document.title = 'KrisPy Bakery | Ambachtelijke taarten, cupcakes en koekjes in Zierikzee';
    
    // Update or create meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ontdek KrisPy Bakery in Zierikzee. Handgemaakte taarten, cupcakes, koekjes en cinnamon rolls. Vers, ambachtelijk en altijd speciaal voor jou.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Ontdek KrisPy Bakery in Zierikzee. Handgemaakte taarten, cupcakes, koekjes en cinnamon rolls. Vers, ambachtelijk en altijd speciaal voor jou.';
      document.head.appendChild(meta);
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = 'KrisPy Bakery – Ambachtelijk gebak in Zierikzee';

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.content = 'Ambachtelijke taarten, cupcakes, koekjes en cinnamon rolls. Vers uit onze bakkerij in Zierikzee.';
    
    loadReviews();
  }, []);

  const loadReviews = async () => {
    try {
      setIsLoading(true);
      const reviewsData = await Review.filter({ goedgekeurd: true }, '-created_date', 6);
      setReviews(reviewsData);
    } catch (error) {
      console.error('Error loading reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

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