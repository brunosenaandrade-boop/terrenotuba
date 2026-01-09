'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  mensagem: string;
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus('loading');

    try {
      // TODO: Substitua pelo seu endpoint do Formspree ou EmailJS
      // Exemplo Formspree: https://formspree.io/f/SEU_ID
      const response = await fetch('https://formspree.io/f/SEU_ID_AQUI', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: data.nome,
          telefone: data.telefone,
          email: data.email,
          mensagem: data.mensagem,
          assunto: 'Interesse no Imóvel Comercial - Tubarão/SC',
        }),
      });

      if (response.ok) {
        setStatus('success');
        reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interessado neste imóvel?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Preencha o formulário ao lado e entraremos em contato o mais rápido
              possível para agendar uma visita ou tirar suas dúvidas.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">R$</span>
                </div>
                <div>
                  <p className="text-sm text-amber-700 uppercase tracking-wider">Valor do Imóvel</p>
                  <p className="text-3xl font-bold text-gray-900">1.500.000</p>
                </div>
              </div>
              <p className="text-amber-800 text-sm">
                Aceita financiamento bancário. Consulte condições de pagamento.
              </p>
            </div>

            <div className="space-y-4 text-gray-600">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Resposta em até 24 horas
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Agendamento de visita sem compromisso
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Documentação regularizada
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Mensagem enviada!
                </h3>
                <p className="text-gray-600 mb-6">
                  Obrigado pelo interesse. Entraremos em contato em breve.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome completo *
                  </label>
                  <input
                    {...register('nome', { required: 'Nome é obrigatório' })}
                    type="text"
                    id="nome"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.nome ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                    placeholder="Seu nome"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-500">{errors.nome.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    {...register('telefone', { required: 'Telefone é obrigatório' })}
                    type="tel"
                    id="telefone"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.telefone ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                    placeholder="(00) 00000-0000"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-sm text-red-500">{errors.telefone.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail *
                  </label>
                  <input
                    {...register('email', {
                      required: 'E-mail é obrigatório',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'E-mail inválido',
                      },
                    })}
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                    placeholder="seu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem
                  </label>
                  <textarea
                    {...register('mensagem')}
                    id="mensagem"
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Escreva sua mensagem ou dúvidas aqui..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5" />
                    <p>Erro ao enviar. Tente novamente ou entre em contato por telefone.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-black font-bold py-4 px-8 rounded-xl text-lg transition-all flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Ao enviar, você concorda em receber contato sobre este imóvel.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
