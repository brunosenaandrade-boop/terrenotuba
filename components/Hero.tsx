'use client';

import Image from 'next/image';
import { trackCTAClick } from '@/lib/tracking';

export default function Hero() {
  const scrollToContact = () => {
    trackCTAClick('Hero - Tenho Interesse');
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToGallery = () => {
    trackCTAClick('Hero - Ver Fotos');
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fachada-principal.jpg"
          alt="Terreno comercial 490m² em Tubarão/SC - Vila Moema"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <span className="inline-block bg-amber-500 text-black font-semibold px-3 py-1.5 rounded-full text-xs sm:text-sm mb-4 sm:mb-6">
          490m² em Zona Comercial Premium
        </span>

        <h1 className="text-[1.7rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
          Terreno Comercial
          <span className="text-amber-400 block">14m de Testada</span>
        </h1>

        <p className="text-sm sm:text-xl md:text-2xl text-gray-200 mb-4 sm:mb-6">
          Vila Moema, Tubarão/SC
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> — </span>
          <span className="sm:hidden"> </span>
          A 900m do Farol Shopping
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 inline-block">
          <p className="text-gray-300 text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">Investimento</p>
          <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400">
            R$ 1.600.000
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1 sm:mt-2">R$ 3.265/m² — Zona comercial valorizada</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all hover:scale-105 shadow-lg"
          >
            Quero Mais Informações
          </button>
          <a
            href="#galeria"
            onClick={scrollToGallery}
            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-full text-base sm:text-lg transition-all"
          >
            Ver Fotos do Terreno
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
