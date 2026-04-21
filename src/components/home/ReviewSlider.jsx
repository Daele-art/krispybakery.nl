import React from 'react';
import { Star } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

export default function ReviewSlider({ reviews, isLoading }) {
  const defaultReviews = [
    {
      id: 1,
      naam: 'Sarah M.',
      rating: 5,
      tekst: 'Absoluut fantastisch! De bruidstaart was nog mooier dan ik had gedroomd. Kris heeft echt naar onze wensen geluisterd.',
      gelegenheid: 'Bruiloft'
    },
    {
      id: 2,
      naam: 'Mark D.',
      rating: 5,
      tekst: 'De verjaardagstaart voor mijn dochter was perfect. Zowel mooi als heerlijk. Iedereen was onder de indruk!',
      gelegenheid: 'Verjaardag'
    },
    {
      id: 3,
      naam: 'Lisa V.',
      rating: 5,
      tekst: 'Geweldige service en de cupcakes waren overheerlijk. Zeker een aanrader voor elke gelegenheid!',
      gelegenheid: 'Feest'
    }
  ];

  const displayReviews = reviews.length > 0 ? reviews : defaultReviews;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-[#D2A679] fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A2A20] mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-[#3A2A20]/70 text-lg max-w-2xl mx-auto">
            Lees de ervaringen van onze tevreden klanten
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {isLoading ? (
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="card-shadow bg-white p-6">
                <div className="flex mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Skeleton key={i} className="w-4 h-4 mr-1" />
                  ))}
                </div>
                <Skeleton className="h-20 w-full mb-4" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </div>
            ))
          ) : (
            displayReviews.slice(0, 3).map((review) => (
              <div key={review.id} className="card-shadow bg-white p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {renderStars(review.rating)}
                </div>
                
                <blockquote className="text-[#3A2A20] mb-4 italic leading-relaxed">
                  "{review.tekst}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#5B3A2E]">{review.naam}</span>
                  {review.gelegenheid && (
                    <span className="text-sm text-[#3A2A20]/70 bg-[#D2A679]/20 px-3 py-1 rounded-full">
                      {review.gelegenheid}
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}