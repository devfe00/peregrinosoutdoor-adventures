
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Globe, Mountain } from "lucide-react";
import DestinationCard from "../components/DestinationCard";

const internationalDestinations = [
  {
    id: 1,
    name: "Patagonia - Argentina/Chile",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648",
    description: "Paisagens dramáticas entre glaciares, montanhas e lagos turquesa. O fim do mundo nunca foi tão belo.",
    tip: "Melhor época: dezembro a março (verão). Ventos fortes, leve roupas impermeáveis.",
    bestTime: "Dez - Mar",
    difficulty: "Avançado"
  },
  {
    id: 2,
    name: "Torres del Paine - Chile",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072",
    description: "Parque nacional com torres de granito icônicas, glaciares e uma vida selvagem única na Patagônia.",
    tip: "Reserve camping com antecedência. Clima muda rapidamente, prepare-se para tudo.",
    bestTime: "Nov - Mar",
    difficulty: "Avançado"
  },
  {
    id: 3,
    name: "Salar de Uyuni - Bolívia",
    image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368",
    description: "O maior deserto de sal do mundo se transforma em um espelho gigante durante a época das chuvas.",
    tip: "Para efeito espelho: janeiro a março. Para cristais de sal: maio a setembro.",
    bestTime: "Jan - Mar / Mai - Set",
    difficulty: "Intermediário"
  },
  {
    id: 4,
    name: "Machu Picchu - Peru",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360",
    description: "A cidade perdida dos Incas no alto dos Andes. Uma experiência espiritual e histórica única.",
    tip: "Reserve com 6 meses de antecedência. Trilha Inca requer boa forma física.",
    bestTime: "Mai - Set",
    difficulty: "Intermediário"
  },
  {
    id: 5,
    name: "Fiordos da Noruega",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000",
    description: "Paisagens épicas com cachoeiras gigantes, fiordes profundos e montanhas dramáticas.",
    tip: "Verão (junho-agosto) para trilhas. Inverno para aurora boreal.",
    bestTime: "Jun - Ago",
    difficulty: "Intermediário"
  },
  {
    id: 6,
    name: "Marrocos - Saara",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=4752",
    description: "Aventura no deserto com dunas infinitas, caravanas de camelos e noites estreladas.",
    tip: "Outubro a abril. Dias quentes, noites frias. Leve protetor solar e agasalho.",
    bestTime: "Out - Abr",
    difficulty: "Intermediário"
  }
];

const Internacional = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-all duration-300 group">
              <ArrowLeft className="w-6 h-6 group-hover:translate-x-[-4px] transition-transform duration-300" />
              <span className="hidden md:block">Voltar</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center animate-fade-in">
              🌍 DESTINOS INTERNACIONAIS
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4 animate-fade-in">
            O Mundo Te Espera
          </h2>
          <p className="text-lg text-indigo-700 max-w-3xl mx-auto animate-fade-in">
            Leve o espírito Peregrinos para além das fronteiras. Descubra destinos 
            que desafiam seus limites e expandem sua perspectiva de mundo.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalDestinations.map((destination, index) => (
              <div 
                key={destination.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard destination={destination} theme="internacional" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-indigo-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Sua Próxima Grande Aventura</h3>
          <p className="text-lg mb-6">
            O mundo é vasto e cheio de possibilidades. Onde sua jornada te levará?
          </p>
          <Link 
            to="/playlist" 
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-all duration-300 hover:scale-105 group"
          >
            <Mountain className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            Sons para sua Aventura Global
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-indigo-200">
            ©2025 Peregrinos.Inc | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Internacional;
