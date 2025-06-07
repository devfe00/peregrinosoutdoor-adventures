import { Link } from "react-router-dom";
import { ArrowLeft, Settings, Clock, Mail, Users } from "lucide-react";

const Manutencao = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative flex flex-col">
      {/* header */}
      <header className="bg-gray-600 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6" />
              <span className="hidden md:block">Voltar</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Clube Exclusivo
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/*principal coteudo */}
      <section className="py-20 flex-1">
        <div className="container mx-auto px-6 text-center">
          {/* manuntencao*/}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-12 border-l-4 border-orange-500">
            <Settings className="w-16 h-16 mx-auto mb-6 text-orange-500" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Página em Manutenção
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Estamos preparando algo especial para você! Esta seção estará disponível em breve 
              com novidades incríveis para a comunidade Peregrinos.
            </p>
            
            {/*em breve */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3 text-left">
                <Users className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Clube Peregrinos</h4>
                  <p className="text-sm text-gray-600">Comunidade exclusiva de aventureiros</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <Mail className="w-6 h-6 text-green-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Newsletter</h4>
                  <p className="text-sm text-gray-600">Dicas e destinos exclusivos</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <Clock className="w-6 h-6 text-purple-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Recomendações</h4>
                  <p className="text-sm text-gray-600">Compartilhe suas descobertas</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-left">
                <Settings className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Formulário de Contato</h4>
                  <p className="text-sm text-gray-600">Fale diretamente com os<br></br>CEO's da Peregrinos.Inc</p>
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <p className="text-sm text-gray-500 mb-4">
                Enquanto isso, continue explorando nossos destinos e playlists!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  to="/brasil" 
                  className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Destinos Brasil
                </Link>
                <Link 
                  to="/internacional" 
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Destinos Internacionais
                </Link>
                <Link 
                  to="/playlist" 
                  className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                >
                  Playlists
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*footer*/}
      <footer className="bg-black/10 backdrop-blur-sm text-center py-3 sm:py-4 mt-auto">

        <p className="text-black/90 text-xs sm:text-sm px-4">
          ©2025 Peregrinos.Inc | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Manutencao;