import React from 'react';
import { ShoppingCart, Menu, X, ChevronDown, User, HelpCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartItemCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isTherapyOpen, setIsTherapyOpen] = React.useState(false);

  const therapyCategories = [
    { name: 'All Food Therapy', path: '/therapy/all' },
    { name: 'Eye Disease', path: '/therapy/eyes' },
    { name: 'Kidney Disease', path: '/therapy/kidney' },
    { name: 'Heart Disease', path: '/therapy/heart' },
    { name: 'Skin & Hair Problems', path: '/therapy/skin' },
    { name: 'Asthma & Throat Disease', path: '/therapy/respiratory' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              Fluffy Feast
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Food Therapy Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsTherapyOpen(!isTherapyOpen)}
                className="flex items-center text-gray-700 hover:text-indigo-600 gap-1"
              >
                Food Therapy
                <ChevronDown size={16} />
              </button>
              <div className={`absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg ${isTherapyOpen ? 'block' : 'hidden'} group-hover:block`}>
                <div className="py-1">
                  {therapyCategories.map((category) => (
                    <Link
                      key={category.path}
                      to={category.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setIsTherapyOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/fresh-snacks" className="text-gray-700 hover:text-indigo-600">
              Fresh Snacks
            </Link>
            
            <Link to="/pet-supplies" className="text-gray-700 hover:text-indigo-600">
              Pet Supplies
            </Link>

            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">
              Contact Us
            </Link>

            <Link to="/faq" className="text-gray-700 hover:text-indigo-600">
              FAQ
            </Link>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-indigo-600"
            >
              <ShoppingCart />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            <Link to="/login" className="text-gray-700 hover:text-indigo-600">
              <User />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <button
              onClick={() => setIsTherapyOpen(!isTherapyOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600 flex items-center justify-between"
            >
              Food Therapy
              <ChevronDown size={16} className={isTherapyOpen ? 'rotate-180' : ''} />
            </button>
            {isTherapyOpen && (
              <div className="pl-6 space-y-1">
                {therapyCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block px-3 py-2 text-gray-600 hover:text-indigo-600"
                    onClick={() => {
                      setIsTherapyOpen(false);
                      setIsMenuOpen(false);
                    }}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
            <Link
              to="/fresh-snacks"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Fresh Snacks
            </Link>
            <Link
              to="/pet-supplies"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Pet Supplies
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <button
              onClick={() => {
                onCartClick();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-gray-700 hover:text-indigo-600"
            >
              Cart ({cartItemCount})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}