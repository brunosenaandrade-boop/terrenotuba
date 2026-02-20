'use client';

export default function ImpressaoPage() {
  return (
    <>
      <style>{`
        body { background: #f1f5f9 !important; }

        .print-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 40px 20px;
        }

        .print-info {
          text-align: center;
          margin-bottom: 30px;
          color: #64748b;
          font-size: 14px;
          line-height: 1.6;
        }
        .print-info strong { color: #1e293b; }

        .placa {
          width: 1200px;
          height: 600px;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          display: flex;
          box-shadow: 0 25px 60px rgba(0,0,0,0.3);
        }
        .placa::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 8px;
          background: linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b);
        }

        .placa-info {
          flex: 1;
          padding: 28px 40px 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tag-vende {
          display: inline-block;
          background: #f59e0b;
          color: #0f172a;
          font-weight: 800;
          font-size: 16px;
          padding: 6px 18px;
          border-radius: 50px;
          letter-spacing: 2px;
          text-transform: uppercase;
          width: fit-content;
        }

        .titulo { margin-top: 6px; }
        .titulo h1 {
          font-size: 62px;
          font-weight: 900;
          color: #ffffff;
          line-height: 1.0;
          letter-spacing: -2px;
        }
        .titulo h1 span {
          color: #fbbf24;
          display: block;
        }

        .specs {
          display: flex;
          gap: 24px;
          margin-top: 12px;
        }
        .spec-item { text-align: center; }
        .spec-valor {
          font-size: 30px;
          font-weight: 800;
          color: #fbbf24;
          line-height: 1;
        }
        .spec-label {
          font-size: 13px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 4px;
        }
        .spec-divider {
          width: 2px;
          background: #334155;
          border-radius: 2px;
        }

        .bottom-row {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .localizacao {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .localizacao svg {
          width: 20px; height: 20px;
          color: #f59e0b;
          flex-shrink: 0;
        }
        .localizacao span {
          font-size: 15px;
          color: #cbd5e1;
          font-weight: 500;
        }

        .whatsapp {
          display: flex;
          align-items: center;
          gap: 14px;
          background: linear-gradient(135deg, #15803d 0%, #166534 100%);
          padding: 12px 24px;
          border-radius: 14px;
          width: fit-content;
          margin-top: 0;
          border: 3px solid #22c55e;
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.3), 0 4px 15px rgba(0,0,0,0.3);
        }
        .whatsapp svg {
          width: 32px; height: 32px;
          color: #ffffff;
          flex-shrink: 0;
        }
        .whatsapp-text {
          display: flex;
          flex-direction: column;
        }
        .whatsapp-label {
          font-size: 13px;
          color: #86efac;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
        }
        .whatsapp-number {
          font-size: 30px;
          color: #ffffff;
          font-weight: 900;
          letter-spacing: 2px;
        }

        .placa-qr {
          width: 300px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 30px;
          position: relative;
        }
        .placa-qr::before {
          content: '';
          position: absolute;
          left: 0; top: 40px; bottom: 40px;
          width: 4px;
          background: linear-gradient(180deg, #f59e0b, #fbbf24, #f59e0b);
          border-radius: 2px;
        }

        .qr-titulo {
          font-size: 13px;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 700;
          margin-bottom: 16px;
          text-align: center;
        }
        .qr-code-container {
          width: 200px; height: 200px;
          padding: 8px;
          border: 3px solid #1e293b;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .qr-code-container img {
          width: 100%;
          height: 100%;
          image-rendering: pixelated;
        }

        .qr-url { margin-top: 16px; text-align: center; }
        .qr-url-label {
          font-size: 11px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 4px;
        }
        .qr-url span {
          font-size: 16px;
          font-weight: 700;
          color: #1e293b;
          letter-spacing: 0.3px;
        }

        .qr-instrucao {
          margin-top: 14px;
          font-size: 12px;
          color: #94a3b8;
          text-align: center;
          line-height: 1.4;
        }
        .qr-instrucao svg {
          width: 16px; height: 16px;
          display: inline-block;
          vertical-align: middle;
          margin-right: 4px;
        }

        .btn-print {
          margin-top: 30px;
          background: #1e293b;
          color: white;
          border: none;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .btn-print:hover { background: #0f172a; }

        * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
          color-adjust: exact !important;
        }

        @media print {
          body { background: white !important; margin: 0; padding: 0; }
          .print-info, .btn-print { display: none !important; }
          .print-page { padding: 0; min-height: auto; }
          .placa {
            box-shadow: none;
            border-radius: 0;
            width: 100%;
            height: auto;
            aspect-ratio: 2 / 1;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .placa, .placa * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }
      `}</style>

      <div className="print-page">
        <div className="print-info">
          <strong>Placa de Venda — Terreno Comercial Tubarão/SC</strong>
          <br />
          Tamanho para impressao: <strong>200cm x 100cm (2m x 1m)</strong> — ACM
          ou lona
          <br />
          Clique no botao abaixo para imprimir ou salvar como PDF
        </div>

        <div className="placa">
          <div className="placa-info">
            <div>
              <div className="tag-vende">VENDE-SE</div>
              <div className="titulo">
                <h1>
                  Terreno
                  <span>Comercial</span>
                </h1>
              </div>
              <div className="specs">
                <div className="spec-item">
                  <div className="spec-valor">490m²</div>
                  <div className="spec-label">Area total</div>
                </div>
                <div className="spec-divider" />
                <div className="spec-item">
                  <div className="spec-valor">14m</div>
                  <div className="spec-label">Testada</div>
                </div>
                <div className="spec-divider" />
                <div className="spec-item">
                  <div className="spec-valor">35m</div>
                  <div className="spec-label">Profundidade</div>
                </div>
              </div>
            </div>

            <div className="bottom-row">
              <div className="localizacao">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  Vila Moema, Tubarão/SC
                  <br />
                  Prox. Farol Shopping
                </span>
              </div>

              <div className="whatsapp">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <div className="whatsapp-text">
                  <span className="whatsapp-label">WhatsApp</span>
                  <span className="whatsapp-number">(48) 3192-0163</span>
                </div>
              </div>
            </div>
          </div>

          <div className="placa-qr">
            <div className="qr-titulo">Acesse o site</div>
            <div className="qr-code-container">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/qrcode-site.png"
                alt="QR Code - terrenotubarao.com.br"
              />
            </div>
            <div className="qr-url">
              <div className="qr-url-label">Visite nosso site</div>
              <span>terrenotubarao.com.br</span>
            </div>
            <div className="qr-instrucao">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              Aponte a camera do celular
              <br />
              para o QR Code
            </div>
          </div>
        </div>

        <button className="btn-print" onClick={() => window.print()}>
          Imprimir / Salvar como PDF
        </button>
      </div>
    </>
  );
}
