export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-32">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Seu banco digital, simples e poderoso
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Controle suas finanças, crie cofrinhos, faça transferências instantâneas e acompanhe tudo em tempo real — sem taxas escondidas.
        </p>
        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl shadow-lg transition">
            Abrir conta gratuita
          </button>
          <button className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-2xl shadow-lg transition">
            Saiba mais
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-blue-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Transações instantâneas</h3>
            <p className="text-gray-600">Faça PIX, TED e DOC em segundos, com segurança e sem complicação.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Cofrinhos inteligentes</h3>
            <p className="text-gray-600">Crie objetivos financeiros, acompanhe metas e organize suas economias.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Cartões virtuais e físicos</h3>
            <p className="text-gray-600">Use cartões de débito e crédito com limite personalizado e segurança.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-6 py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para simplificar sua vida financeira?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já estão economizando tempo e dinheiro com nosso banco digital.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition">
          Criar minha conta agora
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-gray-100 text-gray-700 text-sm text-center">
        <p>© {new Date().getFullYear()} SeuBanco Digital. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}