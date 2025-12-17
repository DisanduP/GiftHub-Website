import { useState, useMemo } from 'react';
import { ProductCard } from './ProductCard';
import { Product } from '../App';

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Personalized Photo Frame',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1608232034071-c604ddc8470a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'personalized',
    description: 'Beautiful wooden frame with custom engraving',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '2',
    name: 'Luxury Jewelry Box',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1760804775871-ccf97811de4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'jewelry',
    description: 'Elegant velvet-lined jewelry organizer',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '3',
    name: 'Scented Candle Set',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1643122966676-29e8597257f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'home',
    description: 'Set of 3 premium aromatherapy candles',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '4',
    name: 'Birthday Crown',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1763828028975-afa6ae9d04de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'birthday',
    description: 'Sparkly birthday crown for special celebrations',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '5',
    name: 'Anniversary Wine Glasses',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1606238023543-ba68f2cc50f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'anniversary',
    description: 'Engraved crystal wine glasses for couples',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '6',
    name: 'Holiday Ornament Set',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1602521879046-b994fcd56190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'holiday',
    description: 'Beautiful handcrafted Christmas ornaments',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '7',
    name: 'Custom Name Necklace',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1611012756377-05e2e4269fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'jewelry',
    description: 'Gold-plated necklace with personalized name',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '8',
    name: 'Succulent Garden Kit',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1621512367176-03782e847fa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'home',
    description: 'Complete kit to grow your own succulent garden',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '9',
    name: 'Memory Book Album',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1684741890382-e13579787ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'personalized',
    description: 'Leather-bound photo album for precious memories',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '10',
    name: 'Birthday Balloon Bouquet',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1583875762487-5f8f7c718d14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'birthday',
    description: 'Colorful helium balloon arrangement',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '11',
    name: 'Couple\'s Spa Set',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1554424518-336ec861b705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'anniversary',
    description: 'Luxurious spa kit for romantic evenings',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '12',
    name: 'Holiday Cookie Cutters',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1672447371481-6efa8c4be6a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    category: 'holiday',
    description: 'Festive cookie cutter set with recipes',
    rating: 4.5,
    inStock: true,
  },
];

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
  selectedCategory: string;
  searchQuery: string;
}

export function ProductGrid({ onAddToCart, selectedCategory, searchQuery }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    let filtered = mockProducts;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2>
            {selectedCategory === 'all' 
              ? 'All Gifts' 
              : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Gifts`}
          </h2>
          <p className="text-muted-foreground">
            {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}