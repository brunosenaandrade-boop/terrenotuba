import {
  MapPin,
  Maximize,
  Store,
  TreePine,
  TrendingUp,
  Building2,
} from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Rua Chile - Tubarão/SC',
    description: 'Localização privilegiada com alto fluxo de veículos e pedestres',
  },
  {
    icon: Maximize,
    title: 'Terreno 490m²',
    description: '14 metros de frente x 35 metros de comprimento - amplo espaço',
  },
  {
    icon: Store,
    title: 'Loja Comercial',
    description: 'Ponto comercial consolidado com fachada em vidro e excelente visibilidade',
  },
  {
    icon: Building2,
    title: 'Casa Residencial',
    description: 'Imóvel residencial nos fundos - ideal para moradia ou renda extra',
  },
  {
    icon: TreePine,
    title: 'Área Verde',
    description: 'Quintal amplo e gramado com jardim tropical e árvores frutíferas',
  },
  {
    icon: TrendingUp,
    title: 'Alto Potencial',
    description: 'Região em valorização constante - excelente para investimento',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que este imóvel?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um investimento completo com múltiplas possibilidades de uso e renda
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
                Imóvel Misto: Comercial + Residencial
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Este é um imóvel único que combina o melhor dos dois mundos: um ponto
                comercial consolidado na frente, ideal para diversos tipos de negócio,
                e uma residência confortável nos fundos com amplo quintal.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">490</p>
                <p className="text-sm text-gray-300">m² de terreno</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">2</p>
                <p className="text-sm text-gray-300">imóveis no local</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">Alto</p>
                <p className="text-sm text-gray-300">fluxo na avenida</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-amber-400">Pronto</p>
                <p className="text-sm text-gray-300">para usar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
