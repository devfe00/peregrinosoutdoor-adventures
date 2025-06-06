
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Camera } from "lucide-react";
import DestinationCard from "../components/DestinationCard";

const brasilDestinations = [
  {
    id: 1,
    name: "Chapada Diamantina - BA",
    country: "Brasil",
    images: [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3000",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=3000",
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=3000",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=3000",
      "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?q=80&w=3000"
    ],
    description: "Trilhas incríveis entre cânions, cachoeiras cristalinas e formações rochosas únicas. Um dos tesouros mais preservados do Brasil.",
    rating: 4.8,
    bestTime: "Mai - Set",
    highlights: ["Trilhas", "Cachoeiras", "Cânions", "Formações rochosas"]
  },
  {
    id: 2,
    name: "Lençóis Maranhenses - MA",
    country: "Brasil",
    images: [
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=7360",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=3000",
      "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=3000",
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=3000",
      "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=3000"
    ],
    description: "Dunas de areia branca intercaladas com lagoas de água doce formam um cenário surreal e único no mundo.",
    rating: 4.9,
    bestTime: "Jun - Set",
    highlights: ["Dunas", "Lagoas", "Paisagem única", "Areia branca"]
  },
  {
    id: 3,
    name: "Serra da Canastra - MG",
    country: "Brasil",
    images: [
      "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=4368",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=4000",
      "https://images.unsplash.com/photo-1565788999165-bfded35b5de3?q=80&w=3000",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=3000",
      "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?q=80&w=3000",
      "https://images.unsplash.com/photo-1547036967-23d11aacaee0?q=80&w=3000"
    ],
    description: "Berço do Rio São Francisco, oferece cachoeiras espetaculares, trilhas e a famosa Casca d'Anta.",
    rating: 4.7,
    bestTime: "Abr - Set",
    highlights: ["Cachoeiras", "Rio São Francisco", "Casca d'Anta", "Trilhas"]
  },
  {
    id: 4,
    name: "Jalapão - TO",
    country: "Brasil",
    images: [
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648",
      "https://images.unsplash.com/photo-1469041797191-50ace28483c3?q=80&w=4752",
      "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?q=80&w=3000",
      "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=3000",
      "https://images.unsplash.com/photo-1566378489288-1b331e6c2d15?q=80&w=3000",
      "https://images.unsplash.com/photo-1502791451862-7bd8c1df43a7?q=80&w=3000"
    ],
    description: "Cerrado preservado com dunas douradas, fervedouros naturais e cachoeiras em meio ao sertão.",
    rating: 4.6,
    bestTime: "Mai - Set",
    highlights: ["Dunas douradas", "Fervedouros", "Cerrado", "Cachoeiras"]
  }
];

const Brasil = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      {/* Header */}
      <header className="bg-green-600 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6" />
              <span className="hidden md:block">Voltar</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              🇧🇷 DESTINOS BRASIL
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-green-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Explore as Maravilhas do Nosso Brasil
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Do sertão às montanhas, das chapadas aos litorais. Descubra destinos únicos 
            que conectam você com a essência mais pura da natureza brasileira.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {brasilDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Pronto para a Aventura?</h3>
          <p className="text-lg mb-6">
            Cada destino é uma nova história. Qual será a sua próxima?
          </p>
          <Link 
            to="/playlist" 
            className="inline-flex items-center gap-2 bg-yellow-500 text-green-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
          >
            <Camera className="w-5 h-5" />
            Trilha Sonora para sua Jornada
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-green-200">
            ©2025 Peregrinos.Inc | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Brasil;
