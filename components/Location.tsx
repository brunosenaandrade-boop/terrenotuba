import { MapPin, ShoppingCart, Building2, Stethoscope, Landmark, Car } from 'lucide-react';

const nearbyPlaces = [
  {
    icon: ShoppingCart,
    title: 'Farol Shopping',
    description: 'Av. Marcolino, 2525 - Mesmo bairro',
    distance: '3 min',
  },
  {
    icon: ShoppingCart,
    title: 'Praça Shopping',
    description: 'Av. Marcolino, 1315 - Centro',
    distance: '4 min',
  },
  {
    icon: Stethoscope,
    title: 'Hospital Unimed',
    description: 'Pronto atendimento 24h, UTI',
    distance: '3 min',
  },
  {
    icon: Landmark,
    title: 'Bancos',
    description: 'Sicoob, Bradesco, Itaú, Caixa',
    distance: '3-4 min',
  },
  {
    icon: Building2,
    title: 'Centro Médico Unimed',
    description: 'Av. Marcolino, 2300 - Diversas especialidades',
    distance: '3 min',
  },
  {
    icon: Car,
    title: 'BR-101',
    description: 'Acesso rápido à rodovia federal',
    distance: '3 min',
  },
];

export default function Location() {
  return (
    <section id="localizacao" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Localização Estratégica
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No principal eixo comercial de Tubarão — alto fluxo, visibilidade e acesso a serviços essenciais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.5!2d-49.0148571!3d-28.4718138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95219c7a5e8c5d3b%3A0x1234567890abcdef!2sRua%20Prof%C2%AA%20Eug%C3%AAnia%20dos%20Reis%20Perito%2C%2036%20-%20Vila%20Moema%2C%20Tubar%C3%A3o%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do terreno em Tubarão/SC"
            />
            <div className="p-4 bg-slate-800 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="font-semibold">Rua Profª Eugênia dos Reis Perito, 36</p>
                  <p className="text-sm text-gray-300">Vila Moema - Tubarão/SC - CEP 88705-370</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Places */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-amber-500" />
                O que tem por perto
              </h3>

              <div className="grid gap-4">
                {nearbyPlaces.map((place, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-amber-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                      <place.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{place.title}</h4>
                      <p className="text-gray-500 text-sm">{place.description}</p>
                    </div>
                    <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                      {place.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
              <h4 className="font-bold mb-2">Por que Vila Moema?</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Eixo comercial de maior valorização de Tubarão</li>
                <li>• Alto fluxo de veículos e pedestres</li>
                <li>• Av. Marcolino Martins Cabral a poucos metros</li>
                <li>• Infraestrutura completa — ideal para empreendimentos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
