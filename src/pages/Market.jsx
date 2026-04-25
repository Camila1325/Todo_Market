import React from 'react';
import { Link } from 'react-router-dom';

const Market = () => {
  const items = [
    { id: 1, name: 'Premium Task Pack', price: '$9.99', category: 'Productivity' },
    { id: 2, name: 'Dark Mode Theme', price: '$4.99', category: 'Customization' },
    { id: 3, name: 'Unlimited Projects', price: '$19.99', category: 'Storage' },
    { id: 4, name: 'Priority Support', price: '$14.99', category: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 p-8">
      <nav className="flex justify-between items-center mb-12 max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          TodoMarket
        </Link>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
            Cart (0)
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Marketplace</h1>
          <p className="text-slate-400">Enhance your productivity with our exclusive add-ons.</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group">
              <div className="h-40 bg-slate-700 rounded-xl mb-4 group-hover:scale-[1.02] transition-transform flex items-center justify-center text-slate-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{item.category}</span>
              <h3 className="text-xl font-bold mt-1 mb-2">{item.name}</h3>
              <div className="flex justify-between items-center mt-4">
                <span className="text-2xl font-black text-white">{item.price}</span>
                <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm hover:bg-cyan-400 transition-colors">
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Market;
