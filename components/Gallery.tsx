'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const images = [
  { src: '/images/fachada-principal.jpg', alt: 'Fachada da loja - Vista frontal', category: 'Fachada' },
  { src: '/images/foto-01.jpg', alt: 'Fachada da loja - Vista lateral', category: 'Fachada' },
  { src: '/images/foto-02.jpg', alt: 'Fachada da loja - Outra vista', category: 'Fachada' },
  { src: '/images/foto-03.jpg', alt: 'Fachada - Vista ampla', category: 'Fachada' },
  { src: '/images/foto-04.jpg', alt: 'Fachada - Perspectiva', category: 'Fachada' },
  { src: '/images/foto-05.jpg', alt: 'Fachada completa', category: 'Fachada' },
  { src: '/images/foto-06.jpg', alt: 'Vista aérea - Avenida', category: 'Vista Aérea' },
  { src: '/images/foto-07.jpg', alt: 'Telhado - Vista superior', category: 'Estrutura' },
  { src: '/images/foto-08.jpg', alt: 'Telhado - Detalhe', category: 'Estrutura' },
  { src: '/images/foto-09.jpg', alt: 'Telhado da casa', category: 'Estrutura' },
  { src: '/images/foto-10.jpg', alt: 'Telhado - Vista geral', category: 'Estrutura' },
  { src: '/images/foto-11.jpg', alt: 'Quintal - Vista aérea', category: 'Quintal' },
  { src: '/images/foto-12.jpg', alt: 'Quintal - Jardim', category: 'Quintal' },
  { src: '/images/foto-13.jpg', alt: 'Quintal - Área verde', category: 'Quintal' },
  { src: '/images/foto-14.jpg', alt: 'Vista geral do imóvel', category: 'Vista Aérea' },
  { src: '/images/foto-15.jpg', alt: 'Área verde - Detalhe', category: 'Quintal' },
  { src: '/images/foto-16.jpg', alt: 'Estrutura do telhado', category: 'Estrutura' },
  { src: '/images/foto-17.jpg', alt: 'Vegetação do quintal', category: 'Quintal' },
];

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Galeria de Fotos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conheça todos os detalhes deste imóvel comercial único em Tubarão/SC
          </p>
        </div>

        {/* Main Carousel */}
        <div className="mb-4">
          <Swiper
            modules={[Navigation, Pagination, Thumbs]}
            navigation
            pagination={{ clickable: true }}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            className="rounded-2xl overflow-hidden shadow-xl"
            style={{ height: '500px' }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
                    {image.category}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Thumbnails */}
        <Swiper
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          spaceBetween={10}
          breakpoints={{
            640: { slidesPerView: 6 },
            768: { slidesPerView: 8 },
            1024: { slidesPerView: 10 },
          }}
          className="mt-4"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-square rounded-lg overflow-hidden cursor-pointer opacity-70 hover:opacity-100 transition-opacity border-2 border-transparent hover:border-amber-500">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Photo count */}
        <p className="text-center text-gray-500 mt-6">
          {images.length} fotos disponíveis - Clique para ampliar
        </p>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 text-white hover:text-amber-400 transition-colors z-50 p-2"
          >
            <ChevronLeft size={48} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-amber-400 transition-colors z-50 p-2"
          >
            <ChevronRight size={48} />
          </button>

          <div className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4">
            <Image
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
            <p className="text-lg">{images[lightboxIndex].alt}</p>
            <p className="text-sm text-gray-400">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
