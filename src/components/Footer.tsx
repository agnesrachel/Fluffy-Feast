import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="Facebook">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="Xiaohongshu">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="WeChat">
              <MessageCircle size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600" aria-label="WhatsApp">
              <Phone size={24} />
            </a>
          </div>
          <p className="text-gray-500">©2025 by Fluffy Feast</p>
        </div>
      </div>
    </footer>
  );
}