'use client';

import { useRef } from 'react';
import { trackVideoPlay, trackCTAClick } from '@/lib/tracking';

export default function VideoTour() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackedRef = useRef(false);

  const handlePlay = () => {
    if (!trackedRef.current) {
      trackedRef.current = true;
      trackVideoPlay();
    }
  };

  const scrollToContact = () => {
    trackCTAClick('Video CTA - Tenho Interesse');
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="video" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-100 text-amber-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Tour Virtual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça o Terreno
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja a localização, dimensões, estrutura existente e o potencial de desenvolvimento deste terreno
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          <video
            ref={videoRef}
            controls
            preload="metadata"
            playsInline
            onPlay={handlePlay}
            className="w-full"
            poster="/images/fachada-principal.jpg"
          >
            <source src="/videos/tour-terreno.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos HTML5.
          </video>
        </div>

        {/* CTA abaixo do vídeo */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Quer conhecer o terreno pessoalmente? Agende uma visita.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg"
          >
            Tenho Interesse
          </button>
        </div>
      </div>
    </section>
  );
}
