import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in duration-1000">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          TODO MARKET
        </h1>
        <p className="text-xl md:text-2xl text-indigo-200 max-w-2xl mx-auto font-light leading-relaxed">
          The ultimate marketplace for your tasks. Organize, prioritize, and conquer your goals with a premium interface.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Link 
            to="/market" 
            className="px-8 py-4 bg-white text-indigo-900 font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform active:scale-95 text-lg"
          >
            Go to Market
          </Link>
          <button className="px-8 py-4 bg-transparent border-2 border-white/20 backdrop-blur-md text-white font-bold rounded-2xl hover:bg-white/10 transition-all text-lg">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <div className="h-12 w-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Fast Execution</h3>
            <p className="text-indigo-200/70 text-sm">Lightning fast response times for all your task management needs.</p>
          </div>
          
          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <div className="h-12 w-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4 text-purple-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Secure Storage</h3>
            <p className="text-indigo-200/70 text-sm">Your data is encrypted and stored securely in the cloud.</p>
          </div>

          <div className="p-6 bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 hover:border-white/20 transition-all">
            <div className="h-12 w-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4 text-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Modern UI</h3>
            <p className="text-indigo-200/70 text-sm">Beautiful glassmorphism design that feels premium and fresh.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
