'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fachada-principal.jpg"
          alt="Imóvel comercial em Tubarão/SC"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-amber-500 text-black font-semibold px-4 py-2 rounded-full text-sm mb-6">
          Oportunidade de Investimento
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
          Terreno Comercial em
          <span className="text-amber-400 block">Tubarão/SC</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-6">
          Ponto comercial consolidado em avenida de alto fluxo
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 inline-block">
          <p className="text-gray-300 text-sm uppercase tracking-wider mb-2">Valor</p>
          <p className="text-4xl md:text-5xl font-bold text-amber-400">
            R$ 1.500.000
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            Tenho Interesse
          </button>
          <a
            href="#galeria"
            className="border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-lg transition-all"
          >
            Ver Fotos
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
