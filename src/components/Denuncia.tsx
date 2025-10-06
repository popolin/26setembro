import React from 'react';
import Gallery from './Gallery';

const BACKGROUND_IMAGE_URL = '/assets/background.png';

export default function Denuncia() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <header className="relative" role="banner">
        <img
          className="w-full h-[38svh] md:h-[48svh] object-cover"
          src={BACKGROUND_IMAGE_URL}
          alt="Letreiro EU coração 26 diante do parque na Colônia Agrícola 26 de Setembro"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
        <div className="absolute inset-x-0 bottom-4 text-white drop-shadow-lg">
          <div className="max-w-[1100px] w-[92vw] mx-auto flex items-end justify-between gap-4">
            <h1 className="m-0 font-extrabold tracking-tight text-[clamp(1.6rem,3.2vw+1rem,3rem)]">
              Colônia Agrícola 26 de Setembro
            </h1>
            <span className="bg-green-600/90 text-white px-3 py-1 rounded-full font-semibold text-sm">
              Comunidade & Natureza (Flona)
            </span>
          </div>
        </div>
      </header>

      <section className="py-8">
        <div className="max-w-[1100px] w-[92vw] mx-auto">
          <p className="text-slate-600 leading-7 text-[1.05rem]">
            Este é o site oficial de moradores e amigos da{' '}
            <strong>Colônia Agrícola 26 de Setembro</strong>. Aqui reunimos
            informações da comunidade e ações para defender a qualidade de vida,
            a segurança e o meio ambiente do nosso bairro.
          </p>
        </div>
      </section>

      {/* ALERTA */}
      <section className="py-4">
        <div className="max-w-[1100px] w-[92vw] mx-auto">
          <div className="bg-white border border-slate-200 border-l-8 border-l-red-600 rounded-xl p-5 shadow-[0_10px_24px_rgba(2,6,23,.06)]">
            <h3 className="text-xl font-semibold mb-2">
              ⚠️ Alerta: instalação industrial em local inadequado
            </h3>
            <p className="mb-2">
              Uma <strong>fábrica de reciclagem</strong> se instalou na entrada
              da cidade <strong>sem estudo prévio de impacto</strong>,
              prejudicando fortemente os moradores desde o início de 2025. O
              funcionamento gera{' '}
              <strong>ruído contínuo de segunda a sábado</strong>, afetando
              especialmente crianças e idosos que residem na região há muitos
              anos.
            </p>
            <p className="font-semibold">Principais impactos para a cidade:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Impacto visual e na identidade urbana;</li>
              <li>Trânsito pior por caminhões e veículos pesados;</li>
              <li>Problemas ambientais;</li>
              <li>Desvalorização de imóveis residenciais;</li>
              <li>Problemas de saúde e bem‑estar da população;</li>
              <li>Comprometimento do planejamento urbano;</li>
              <li>Risco iminente de incêndio;</li>
              <li>Concentração de animais e insetos.</li>
            </ul>
            <p className="mt-3">
              📄 <strong>Abaixo‑assinado:</strong> pedimos o apoio de todos para{' '}
              <strong>protocolar a retirada da fábrica</strong>. Assine aqui:{' '}
              <a
                className="text-green-600 underline hover:no-underline"
                href="https://chng.it/VbLWDj8gG6"
                target="_blank"
                rel="noopener noreferrer"
              >
                chng.it/VbLWDj8gG6
              </a>
              .
            </p>
            <p className="mt-2">
              🗣️ Também é essencial que esta insatisfação chegue às autoridades
              competentes, incluindo o{' '}
              <strong>Governador Ibaneis Rocha </strong>e a{' '}
              <strong>Vice‑Governadora Celina Leão</strong>, que têm realizado
              importantes ações pela nossa região.
            </p>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Rodapé simples */}
      <footer className="py-8">
        <div className="max-w-[1100px] w-[92vw] mx-auto text-slate-600 text-sm">
          © {new Date().getFullYear()} Colônia Agrícola 26 de Setembro —
          Comunidade unida pela qualidade de vida.
        </div>
      </footer>
    </main>
  );
}
