import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Placa de Venda - Terreno Comercial Tubarão/SC | Impressão",
  robots: { index: false, follow: false },
};

export default function ImpressaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
