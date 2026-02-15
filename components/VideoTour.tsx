'use client';

import { Play } from 'lucide-react';
import { trackVideoPlay, trackCTAClick } from '@/lib/tracking';

// TODO: Substitua pelo ID do vídeo no YouTube
const YOUTUBE_VIDEO_ID = 'SEU_VIDEO_ID';

export default function VideoTour() {
  const hasVideo = YOUTUBE_VIDEO_ID !== 'SEU_VIDEO_ID';

  const handlePlay = () => {
    trackVideoPlay();
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
            Conheça o Imóvel por Dentro
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Assista ao vídeo e veja de perto toda a estrutura, localização e potencial deste terreno comercial
          </p>
        </div>

        {/* Video Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900">
          {hasVideo ? (
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?rel=0&modestbranding=1`}
                title="Video Tour - Terreno Comercial Tubarão/SC"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                onLoad={handlePlay}
              />
            </div>
          ) : (
            /* Placeholder enquanto o vídeo não é adicionado */
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-amber-500/20 rounded-full flex items-center justify-center mb-6">
                  <Play className="w-10 h-10 text-amber-400 ml-1" />
                </div>
                <p className="text-white text-xl font-semibold mb-2">Vídeo Tour em Breve</p>
                <p className="text-gray-400 text-sm">O tour completo do imóvel será disponibilizado aqui</p>
              </div>
            </div>
          )}
        </div>

        {/* CTA abaixo do vídeo */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Gostou do que viu? Fale conosco e agende uma visita presencial.
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
