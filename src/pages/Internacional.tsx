
import { Link } from "react-router-dom";
import { ArrowLeft, Plane, Globe, Mountain } from "lucide-react";
import DestinationCard from "../components/DestinationCard";

const internationalDestinations = [
  {
    id: 1,
    name: "Patagonia",
    country: "Argentina/Chile",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3000",
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=3000",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=3000",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=3000"
    ],
    description: "Paisagens dramáticas entre glaciares, montanhas e lagos turquesa. O fim do mundo nunca foi tão belo.",
    rating: 4.9,
    bestTime: "Dez - Mar",
    highlights: ["Glaciares", "Montanhas", "Lagos turquesa", "Paisagens dramáticas"]
  },
  {
    id: 2,
    name: "Torres del Paine",
    country: "Chile",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3000",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=3000",
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&w=3000",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000",
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648"
    ],
    description: "Parque nacional com torres de granito icônicas, glaciares e uma vida selvagem única na Patagônia.",
    rating: 4.8,
    bestTime: "Nov - Mar",
    highlights: ["Torres de granito", "Parque nacional", "Vida selvagem", "Glaciares"]
  },
  {
    id: 3,
    name: "Salar de Uyuni",
    country: "Bolívia",
    images: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=3000",
      "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=3000",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=4752",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=3000",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=3000"
    ],
    description: "O maior deserto de sal do mundo se transforma em um espelho gigante durante a época das chuvas.",
    rating: 4.9,
    bestTime: "Jan - Mar / Mai - Set",
    highlights: ["Deserto de sal", "Efeito espelho", "Cristais de sal", "Paisagem única"]
  },
  {
    id: 4,
    name: "Machu Picchu",
    country: "Peru",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360",
      "https://images.unsplash.com/photo-1580841962527-f7d2e19b0353?q=80&w=3000",
      "https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=3000",
      "https://images.unsplash.com/photo-1546614042-7df3c24c9e1a?q=80&w=3000",
      "https://images.unsplash.com/photo-1524055988636-436cfa46e59e?q=80&w=3000",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=3000"
    ],
    description: "A cidade perdida dos Incas no alto dos Andes. Uma experiência espiritual e histórica única.",
    rating: 4.8,
    bestTime: "Mai - Set",
    highlights: ["Cidade Inca", "História", "Andes", "Trilha Inca"]
  },
  {
    id: 5,
    name: "Fiordos da Noruega",
    country: "Noruega",
    images: [
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000",
      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=3000",
      "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?q=80&w=3000",
      "https://images.unsplash.com/photo-1570700905904-3b1c3c8cbfa9?q=80&w=3000",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=3000",
      "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?q=80&w=3000"
    ],
    description: "Paisagens épicas com cachoeiras gigantes, fiordes profundos e montanhas dramáticas.",
    rating: 4.7,
    bestTime: "Jun - Ago",
    highlights: ["Fiordos", "Cachoeiras", "Montanhas", "Aurora boreal"]
  },
  {
    id: 6,
    name: "Marrocos - Saara",
    country: "Marrocos",
    images: [
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=4752",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=3000",
      "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=3000",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3000",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=3000",
      "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?q=80&w=3000"
    ],
    description: "Aventura no deserto com dunas infinitas, caravanas de camelos e noites estreladas.",
    rating: 4.6,
    bestTime: "Out - Abr",
    highlights: ["Deserto", "Dunas", "Camelos", "Noites estreladas"]
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
