import {
  MapPin,
  Maximize,
  Ruler,
  TrendingUp,
  Building2,
  Banknote,
} from 'lucide-react';

const features = [
  {
    icon: Maximize,
    title: '490m² de Terreno',
    description: 'Área total generosa para projetos comerciais, incorporação ou desenvolvimento imobiliário.',
  },
  {
    icon: Ruler,
    title: '14m de Testada',
    description: '14 metros de frente por 35 de profundidade — testada ampla para fachada comercial de alto impacto.',
  },
  {
    icon: MapPin,
    title: 'Zona Comercial Premium',
    description: 'Vila Moema, entre Farol Shopping e Praça Shopping, a metros da Av. Marcolino Martins Cabral.',
  },
  {
    icon: TrendingUp,
    title: 'Região em Valorização',
    description: 'Eixo comercial de maior crescimento de Tubarão. Tendência de valorização contínua nos próximos anos.',
  },
  {
    icon: Building2,
    title: 'Potencial Construtivo',
    description: 'Zoneamento comercial permite construção de lojas, clínicas, escritórios, edifício misto ou galpão.',
  },
  {
    icon: Banknote,
    title: 'Renda Imediata',
    description: 'Estrutura comercial já existente no terreno — gere receita enquanto planeja seu projeto.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que este terreno?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um ativo imobiliário em localização estratégica, com potencial de desenvolvimento e renda imediata
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors">
                <feature.icon className="w-7 h-7 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight box */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Terreno Pronto para Desenvolver
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                490m² em uma das localizações comerciais mais valorizadas de Tubarão.
                A estrutura comercial existente gera renda enquanto você
                planeja a melhor utilização do terreno. Ideal para construtoras,
                investidores e empresários com visão de longo prazo.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">490</p>
                <p className="text-sm text-gray-300">m² de terreno</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">14m</p>
                <p className="text-sm text-gray-300">de testada</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">R$ 3.265</p>
                <p className="text-sm text-gray-300">por m²</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">Renda</p>
                <p className="text-sm text-gray-300">imediata no local</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
