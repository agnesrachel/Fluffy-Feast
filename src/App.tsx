import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { FoodTherapy } from './pages/FoodTherapy';
import { FreshSnacks } from './pages/FreshSnacks';
import { PetSupplies } from './pages/PetSupplies';
import { Login } from './pages/Login';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';
import type { Product, CartItem } from './types';

function App() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const addToCart = (product: Product) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id);
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...items, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar
          cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
          onCartClick={() => setIsCartOpen(true)}
        />

        <main className="flex-1 max-w-7xl mx-auto px-4 w-full">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} />} />
            <Route path="/therapy/:category" element={<FoodTherapy onAddToCart={addToCart} />} />
            <Route path="/fresh-snacks" element={<FreshSnacks />} />
            <Route path="/pet-supplies" element={<PetSupplies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>

        <Footer />

        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      </div>
    </Router>
  );
}

export default App;