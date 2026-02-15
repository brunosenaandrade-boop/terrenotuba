import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-amber-500 text-7xl font-bold mb-4">404</p>
        <h1 className="text-white text-2xl font-bold mb-2">Página não encontrada</h1>
        <p className="text-gray-400 mb-8">
          A página que você procura não existe ou foi removida.
        </p>
        <Link
          href="/"
          className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-xl transition-colors"
        >
          Ver o Terreno
        </Link>
      </div>
    </div>
  );
}
