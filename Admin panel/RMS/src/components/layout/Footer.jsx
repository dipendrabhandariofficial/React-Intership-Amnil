import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-8 py-4">
      <div className="flex items-center justify-between text-sm text-gray-600">
        <p>© 2025 RestaurantOS. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gray-900">Help Center</a>
          <a href="#" className="hover:text-gray-900">Privacy Policy</a>
          <a href="#" className="hover:text-gray-900">Terms of Service</a>
          <a href="#" className="hover:text-gray-900">Contact Support</a>
          <span className="text-gray-400">Version 20.11.2</span>
        </div>
      </div>
    </footer>
  );
}