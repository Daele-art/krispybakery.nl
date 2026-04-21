
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Product } from '@/api/entities';
import { Skeleton } from '@/components/ui/skeleton';

const ProductCardSkeleton = () => (
  <div className="card-shadow bg-white p-6 text-center">
    <Skeleton className="h-12 w-12 mx-auto mb-4 rounded-full" />
    <Skeleton className="h-6 w-3/4 mx-auto mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mx-auto mb-4" />
    <div className="flex items-center justify-between">
      <Skeleton className="h-7 w-28" />
      <Skeleton className="h-9 w-24" />
    </div>
  </div>
);

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedProducts = async () => {
      try {
        setIsLoading(true);
        // We halen maximaal 4 producten op die als 'uitgelicht' zijn gemarkeerd.
        const products = await Product.filter({ uitgelicht: true }, '-created_date', 4);
        setFeaturedProducts(products);
      } catch (error) {
        console.error("Fout bij het laden van uitgelichte producten:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadFeaturedProducts();
  }, []);

  const getEmojiForCategory = (category) => {
    switch (category) {
      case 'taarten': return '🎂';
      case 'cupcakes': return '🧁';
      case 'koekjes': return '🍪';
      case 'cinnamonrolls': return '🥯';
      case 'bruidstaarten': return '💐';
      default: return '🍰';
    }
  };

  return (
    <section className="py-20 bg-[#F7F1E6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="accent-line mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A2A20] mb-4">
            KrisPy's specialiteiten
          </h2>
          <p className="text-[#3A2A20]/70 text-lg max-w-2xl mx-auto">
            Een voorproefje van onze favorieten, met liefde voor jou gemaakt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {isLoading ? (
            Array(4).fill(0).map((_, index) => <ProductCardSkeleton key={index} />)
          ) : (
            featuredProducts.map((product) => (
              <div key={product.id} className="card-shadow bg-white overflow-hidden group hover:shadow-2xl transition-all duration-300 h-full">
                <div className="p-6 text-center h-full flex flex-col justify-between">
                  <div>
                    <div className="text-4xl mb-3">{getEmojiForCategory(product.categorie)}</div>
                    <h3 className="text-xl font-semibold text-[#3A2A20] mb-3">{product.naam}</h3>
                    <p className="text-[#3A2A20]/70 mb-6 text-center leading-relaxed text-sm min-h-[4.5rem] flex items-center justify-center">
                      {product.korte_beschrijving}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#5B3A2E] font-semibold text-lg italic">
                      Vanaf €{product.vanaf_prijs.toFixed(2)}
                    </span>
                    <Link to={createPageUrl('Bestellen')}>
                      <Button size="sm" className="btn-primary">
                        Bekijk & Bestel
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
