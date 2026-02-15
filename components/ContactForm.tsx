'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle, Loader2, MessageCircle } from 'lucide-react';
import { trackFormSubmit, trackFormStart, trackWhatsAppClick } from '@/lib/tracking';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, FORMSPREE_ID } from '@/lib/constants';

interface FormData {
  nome: string;
  telefone: string;
  interesse: string;
  prazo: string;
  pagamento: string;
  mensagem: string;
  website: string; // honeypot
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const formStartedRef = useRef(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const handleFormInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart();
    }
  };

  const onSubmit = async (data: FormData) => {
    // Honeypot: se preenchido, é bot
    if (data.website) return;

    setStatus('loading');

    trackFormSubmit({
      interesse: data.interesse,
      prazo: data.prazo,
      pagamento: data.pagamento,
    });

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.nome,
          telefone: data.telefone,
          interesse: data.interesse,
          prazo: data.prazo,
          forma_pagamento: data.pagamento,
          mensagem: data.mensagem,
          assunto: `Lead Qualificado - ${data.interesse} - Terreno Tubarão/SC`,
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

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Interesse neste terreno?
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Preencha seus dados para receber informações detalhadas sobre o terreno,
              documentação e condições de negociação.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">R$</span>
                </div>
                <div>
                  <p className="text-sm text-amber-700 uppercase tracking-wider">Valor do Terreno</p>
                  <p className="text-3xl font-bold text-gray-900">1.600.000</p>
                </div>
              </div>
              <p className="text-amber-800 text-sm">
                R$ 3.265/m² — Aceita financiamento e negociação direta.
              </p>
            </div>

            <div className="space-y-4 text-gray-600 mb-8">
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                Resposta em até 24 horas
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                Visita ao terreno sem compromisso
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                Documentação e matrícula regularizadas
              </p>
            </div>

            {/* WhatsApp CTA alternativo */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <p className="text-gray-700 font-semibold mb-3 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-green-600" />
                Prefere conversar diretamente?
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chamar no WhatsApp
              </a>
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
                  Obrigado pelo interesse. Entraremos em contato em até 24 horas.
                </p>
                <p className="text-gray-500 text-sm mb-6">
                  Se preferir atendimento imediato:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Falar no WhatsApp Agora
                </a>
                <button
                  onClick={() => {
                    setStatus('idle');
                    formStartedRef.current = false;
                  }}
                  className="block mx-auto mt-4 text-amber-600 hover:text-amber-700 font-semibold text-sm"
                >
                  Enviar nova mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                onClick={handleFormInteraction}
                className="space-y-5"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Preencha seus dados
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  Campos com * são obrigatórios
                </p>

                {/* Honeypot anti-spam */}
                <div className="absolute opacity-0 -z-10" aria-hidden="true">
                  <input
                    {...register('website')}
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome completo *
                  </label>
                  <input
                    {...register('nome', { required: 'Nome é obrigatório', maxLength: { value: 100, message: 'Máximo 100 caracteres' } })}
                    type="text"
                    id="nome"
                    maxLength={100}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.nome ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                    placeholder="Seu nome"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-500">{errors.nome.message}</p>
                  )}
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    {...register('telefone', { required: 'Telefone é obrigatório', maxLength: { value: 20, message: 'Máximo 20 caracteres' } })}
                    type="tel"
                    id="telefone"
                    maxLength={20}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.telefone ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all`}
                    placeholder="(48) 99999-0000"
                  />
                  {errors.telefone && (
                    <p className="mt-1 text-sm text-red-500">{errors.telefone.message}</p>
                  )}
                </div>

                {/* Qualificação: Interesse */}
                <div>
                  <label htmlFor="interesse" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Qual seu interesse? *
                  </label>
                  <select
                    {...register('interesse', { required: 'Selecione seu interesse' })}
                    id="interesse"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.interesse ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="investimento">Investimento</option>
                    <option value="negocio_proprio">Negócio próprio</option>
                    <option value="construcao">Construção / Incorporação</option>
                    <option value="revenda">Revenda</option>
                    <option value="outro">Outro</option>
                  </select>
                  {errors.interesse && (
                    <p className="mt-1 text-sm text-red-500">{errors.interesse.message}</p>
                  )}
                </div>

                {/* Qualificação: Prazo */}
                <div>
                  <label htmlFor="prazo" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Prazo para decisão *
                  </label>
                  <select
                    {...register('prazo', { required: 'Selecione o prazo' })}
                    id="prazo"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.prazo ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="imediato">Imediato (até 30 dias)</option>
                    <option value="3_meses">Em até 3 meses</option>
                    <option value="6_meses">Em até 6 meses</option>
                    <option value="pesquisando">Apenas pesquisando</option>
                  </select>
                  {errors.prazo && (
                    <p className="mt-1 text-sm text-red-500">{errors.prazo.message}</p>
                  )}
                </div>

                {/* Qualificação: Forma de Pagamento */}
                <div>
                  <label htmlFor="pagamento" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Forma de pagamento *
                  </label>
                  <select
                    {...register('pagamento', { required: 'Selecione a forma de pagamento' })}
                    id="pagamento"
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.pagamento ? 'border-red-500' : 'border-gray-200'
                    } focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all bg-white`}
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="a_vista">À vista</option>
                    <option value="financiamento">Financiamento bancário</option>
                    <option value="parcelado">Parcelado direto</option>
                    <option value="permuta">Permuta</option>
                    <option value="a_combinar">A combinar</option>
                  </select>
                  {errors.pagamento && (
                    <p className="mt-1 text-sm text-red-500">{errors.pagamento.message}</p>
                  )}
                </div>

                {/* Mensagem */}
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensagem <span className="text-gray-400">(opcional)</span>
                  </label>
                  <textarea
                    {...register('mensagem', { maxLength: { value: 500, message: 'Máximo 500 caracteres' } })}
                    id="mensagem"
                    rows={3}
                    maxLength={500}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                    placeholder="Dúvidas, observações ou preferência de horário para contato..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 bg-red-50 p-4 rounded-xl">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <p>Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.</p>
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
                      Enviar Dados
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão seguros. Usaremos apenas para contato sobre este terreno.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
