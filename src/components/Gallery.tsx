/* eslint-disable @typescript-eslint/no-explicit-any */
import useEmblaCarousel from 'embla-carousel-react';
import React, { useCallback, useEffect, useState } from 'react';

const SLIDES: Array<
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'video'; src: string; alt?: string }
  | { kind: 'youtube'; src: string; title?: string }
> = [
  {
    kind: 'image',
    src: '/assets/img1.jpg',
    alt: 'Bagunça',
  },
  {
    kind: 'image',
    src: '/assets/img2.jpg',
    alt: 'Sujeira',
  },
  {
    kind: 'image',
    src: '/assets/img3.jpg',
    alt: 'Irresponsabilidade',
  },
  { kind: 'video', src: '/assets/vid1.mp4' },
  { kind: 'video', src: '/assets/vid2.mp4' },
];

const emblaOptions = { loop: false, dragFree: false, align: 'start' };

function classNames(...xs: Array<string | false | undefined>) {
  return xs.filter(Boolean).join(' ');
}

function Dot({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-current={active}
      className={classNames(
        'w-2 h-2 rounded-full',
        active ? 'bg-green-600' : 'bg-slate-300',
      )}
      onClick={onClick}
    />
  );
}

function PrevNextButtons({ embla }: { embla: any | undefined }) {
  const onPrev = useCallback(() => embla?.scrollPrev(), [embla]);
  const onNext = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <>
      <button
        type="button"
        onClick={onPrev}
        aria-label="Anterior"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full grid place-items-center shadow hover:bg-white"
      >
        <span aria-hidden>‹</span>
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label="Próximo"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 w-10 h-10 rounded-full grid place-items-center shadow hover:bg-white"
      >
        <span aria-hidden>›</span>
      </button>
    </>
  );
}

export default function Galery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions as any);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Pausar video ao trocar de slide
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(
      'video[data-embla-video]',
    );
    videos.forEach(v => v.pause());
  }, [selectedIndex]);

  return (
    <div className="py-10" aria-label="Galeria de fotos e vídeos">
      <div className="max-w-[1100px] w-[92vw] mx-auto">
        <h2 className="mb-3 text-[clamp(1.4rem,2.2vw,2rem)] font-semibold">
          Galeria
        </h2>
        <p className="text-slate-600 -mt-1 mb-4">
          Alguns exemplos de como esta fábrica vem nos prejudicando
        </p>

        <div className="relative overflow-hidden bg-white rounded-2xl shadow-[0_10px_25px_rgba(2,6,23,.08)]">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {SLIDES.map((slide, i) => (
                <figure
                  className="flex-[0_0_100%] m-0 relative bg-black"
                  key={i}
                >
                  {slide.kind === 'image' && (
                    <img
                      src={slide.src}
                      alt={slide.alt ?? 'Imagem da comunidade'}
                      className="w-full h-[52svh] md:h-[60svh] object-cover select-none"
                      draggable={false}
                    />
                  )}

                  {slide.kind === 'video' && (
                    <video
                      data-embla-video
                      controls
                      playsInline
                      className="w-full h-[52svh] md:h-[60svh] object-cover select-none"
                    >
                      <source src={slide.src} type="video/mp4" />
                    </video>
                  )}

                  {slide.kind === 'youtube' && (
                    <div className="relative w-full h-[52svh] md:h-[60svh]">
                      <iframe
                        src={slide.src}
                        title={slide.title ?? 'Vídeo no YouTube'}
                        className="absolute inset-0 w-full h-full rounded-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                  )}
                </figure>
              ))}
            </div>
          </div>

          <PrevNextButtons embla={emblaApi ?? undefined} />

          <div className="absolute left-0 right-0 bottom-2 flex items-center justify-center gap-2">
            {scrollSnaps.map((_, i) => (
              <Dot
                key={i}
                active={i === selectedIndex}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
