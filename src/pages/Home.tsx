import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../types';

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

export function Home({ onAddToCart }: HomeProps) {
  return (
    <div className="pt-24 pb-16">
      {/* Hero Section with Mission Statement */}
      <div className="bg-indigo-600 -mt-24 mb-12 py-16 text-center text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Fluffy Feast</h1>
          <p className="text-xl mb-8">
            Nourishing your pets with love and care. We're committed to providing the highest quality therapeutic and nutritional solutions for your beloved companions.
          </p>
        </div>
      </div>

      {/* Quick Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link
          to="/therapy/all"
          className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Food Therapy</h2>
          <p className="text-gray-600">Specialized nutrition for specific health conditions</p>
        </Link>
        
        <Link
          to="/fresh-snacks"
          className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Pet Snacks</h2>
          <p className="text-gray-600">Healthy and delicious treats for your pets</p>
        </Link>
        
        <Link
          to="/pet-supplies"
          className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">Pet Supplies</h2>
          <p className="text-gray-600">Essential accessories and care products</p>
        </Link>
      </div>

      {/* Featured Products */}
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}