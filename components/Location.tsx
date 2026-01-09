import { MapPin, Car, Users, ShoppingBag } from 'lucide-react';

const highlights = [
  {
    icon: Car,
    title: 'Fácil Acesso',
    description: 'Avenida principal com estacionamento na frente',
  },
  {
    icon: Users,
    title: 'Alto Fluxo',
    description: 'Grande movimento de pedestres e veículos',
  },
  {
    icon: ShoppingBag,
    title: 'Zona Comercial',
    description: 'Vizinhança com diversas lojas e serviços',
  },
  {
    icon: MapPin,
    title: 'Infraestrutura',
    description: 'Ciclovia, calçada pavimentada e iluminação',
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
            Situado em uma das principais avenidas comerciais de Tubarão/SC
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56194.76619890086!2d-49.03858565!3d-28.4666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95219c6b7a5e8c5d%3A0xf6ad4f5c5e8f9c5e!2sTubar%C3%A3o%2C%20SC!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do imóvel em Tubarão/SC"
            />
          </div>

          {/* Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Tubarão/SC</h3>
                  <p className="text-gray-500">Avenida principal - Zona comercial</p>
                </div>
              </div>

              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-100">
                <p className="text-amber-800 text-sm">
                  <strong>Sobre Tubarão:</strong> Cidade polo da região sul de Santa
                  Catarina, com forte economia e crescimento constante. Excelente
                  infraestrutura urbana e qualidade de vida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
