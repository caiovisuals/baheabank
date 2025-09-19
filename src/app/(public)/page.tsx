import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen w-full flex flex-col bg-gradient-to-br from-blue-50 to-white text-gray-900">
      <header className="px-10 py-6 flex justify-between items-center">
        <div className="w-[22%]">
          logo
        </div>
        <div className="w-[54%] flex items-center justify-center">
          <nav className="flex flex-row items-center justify-center gap-8 whitespace-nowrap">
            <a>Conta</a>
            <a>Porquinho</a>
            <a>Cartão de Crédito</a>
            <a>Empréstimos e Financiamentos</a>
            <a>Investimentos</a>
            <a>Maquininha</a>
          </nav>
        </div>
        <div className="w-[22%] flex flex-row items-center gap-6 justify-end">
          <button>Abra sua conta</button>
          <button>Acesse sua conta</button>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-100 h-[calc(80vh-72px)]">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Seu banco digital, simples, transparente e baiano.
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
      <section className="px-6 py-20 bg-blue-600 text-white flex flex-col items-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Tudo que você precisa de um banco. Em um só banco.</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="p-6 bg-blue-700 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Transações instantâneas</h3>
            <p>Faça PIX, TED e DOC em segundos, com segurança e sem complicação.</p>
          </div>
          <div className="p-6 bg-blue-700 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Cofrinhos inteligentes</h3>
            <p>Crie objetivos financeiros, acompanhe metas e organize suas economias.</p>
          </div>
          <div className="p-6 bg-blue-700 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Cartões virtuais e físicos</h3>
            <p>Use cartões de débito e crédito com limite personalizado e segurança.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Escolha o seu cartão</h2>
        <div className="flex flex-row gap-10 justify-center">
          <div className="bg-amber-200 p-8 rounded-2xl">
            <img src="" alt=""></img>
            <h2>Platinum</h2>
            <p>Crédito e debito, pontos e alto limte.</p>
            <button className="mt-6">Quero ter esse</button>
          </div>
          <div className="bg-amber-200 p-8 rounded-2xl">
            <img src="" alt=""></img>
            <h2>Business</h2>
            <p>Crédito e debito, pontos e alto limte.</p>
            <button className="mt-6">Quero ter esse</button>
          </div>
          <div className="bg-amber-200 p-8 rounded-2xl">
            <img src="" alt=""></img>
            <h2>Black</h2>
            <p>Crédito e debito, pontos e alto limte.</p>
            <button className="mt-6">Quero ter esse</button>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Conheça nossos produtos</h2>
        <div className="flex flex-row gap-8 justify-center">
          <a>Para você</a>
          <a>Para sua empresa</a>
        </div>
        <div></div>
      </section>

      {/* Call-to-Action Section */}
      <section className="px-6 py-24 bg-blue-600 text-white text-center gap-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para simplificar sua vida financeira?</h2>
        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
          Junte-se a milhares de usuários que já estão economizando tempo e dinheiro com nosso banco digital.
        </p>
        <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition">
          Criar minha conta agora
        </button>
      </section>

      {/* Footer */}
      <footer className="px-85 py-24 flex flex-col gap-8">
        <div className="flex flex-row gap-25">
          <div className="flex flex-col gap-2">
            <span>LINKS ÚTEIS</span>
            <nav className="flex flex-col">
              <a>Conta</a>
              <a>Porquinho</a>
              <a>Cartão de Crédito</a>
              <a>Empréstimos e Financiamentos</a>
              <a>Investimentos</a>
              <a>Maquininha</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <span>DÚVIDAS</span>
            <nav className="flex flex-col">
              <a>Fale conosco</a>
              <a>Negocie sua dívida</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <span>SOBRE NÓS</span>
            <nav className="flex flex-col">
              <a>Quem Somos</a>
              <a>Trabalhe Conosco</a>
              <a>Rancho dos Devs</a>
            </nav>
          </div>
          <div className="flex flex-col gap-2">
            <span>REDES SOCIAIS</span>
            <nav className="flex flex-col">
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
              <a href=""><img src="" alt=""/></a>
            </nav>
          </div>
        </div>
        <div className="flex flex-row justify-between items-end">
          <div className="flex flex-col gap-5">
            <h1>Logo</h1>
            <p>© {new Date().getFullYear()} BaheaBank</p>
            <div>
              <p>CNPJ: 00.000.000/0000-00</p>
              <p>Avenida Oceanica, Salvador, Bahia - 00000-000</p>
            </div>
          </div>
          <div className="flex flex-row gap-8">
            <Link href="/(others)/rates">Tarifas</Link>
            <Link href="/(others)/terms">Termos de Uso</Link>
            <Link href="/(others)/security">Segurança</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}