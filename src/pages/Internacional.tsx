import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plane, Globe, Mountain, MapPin, Calendar, Star, ChevronLeft, ChevronRight } from "lucide-react";

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

const InternationalParticles = () => {
  const particles = [
    { icon: "❄️", delay: "0s", duration: "15s", left: "10%", size: "2rem" },
    { icon: "⛄", delay: "2s", duration: "12s", left: "85%", size: "1.8rem" },
    { icon: "🏔️", delay: "4s", duration: "18s", left: "70%", size: "1.6rem" },
    { icon: "🌨️", delay: "1s", duration: "14s", left: "25%", size: "1.4rem" },
    { icon: "❄️", delay: "3s", duration: "16s", left: "60%", size: "1.2rem" },
    { icon: "🧊", delay: "5s", duration: "20s", left: "40%", size: "1.5rem" },
    { icon: "⭐", delay: "6s", duration: "13s", left: "90%", size: "1.3rem" },
    { icon: "🌟", delay: "7s", duration: "17s", left: "15%", size: "1.1rem" },
    { icon: "❄️", delay: "8s", duration: "19s", left: "50%", size: "1.7rem" },
    { icon: "🌍", delay: "9s", duration: "15s", left: "30%", size: "1.9rem" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, index) => (
        <div
          key={index}
          className="absolute animate-float-vertical opacity-20"
          style={{
            left: particle.left,
            fontSize: particle.size,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        >
          {particle.icon}
        </div>
      ))}
    </div>
  );
};

//card destino 
const DestinationCard = ({ destination, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-200/50 ${
        index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*container imagem */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.images[currentImageIndex]}
          alt={destination.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        
        {/*overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/*setas */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group/arrow"
        >
          <ChevronLeft className="w-4 h-4 group-hover/arrow:-translate-x-0.5 transition-transform" />
        </button>
        
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 group/arrow"
        >
          <ChevronRight className="w-4 h-4 group-hover/arrow:translate-x-0.5 transition-transform" />
        </button>
        
        {/*badge do país */}
        <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-bounce-gentle">
          <Globe className="w-3 h-3" />
          {destination.country}
        </div>
        
        {/*avaliacão */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 hover:bg-white transition-colors">
          <Star className="w-4 h-4 text-yellow-500 fill-current animate-pulse" />
          <span className="text-sm font-semibold">{destination.rating}</span>
        </div>
        
        {/*navegação */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {destination.images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImageIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-150 ${
                i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/*card */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-all duration-500 group-hover:scale-105 transform">
          {destination.name}
        </h3>
        
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{destination.bestTime}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {destination.description}
        </p>
        
        {/*destaqu*/}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">Destaques:</p>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium transform hover:scale-105 transition-transform cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        {/*botao*/}
        <a 
          href="https://kiwi.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-indigo-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          Explorar Destino
          <Plane className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const Internacional = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contato');
  };

  return (
    <>
      <style>{`
        @keyframes float-vertical {
          0%, 100% { transform: translateY(100vh) rotate(0deg); }
          50% { transform: translateY(-10vh) rotate(180deg); }
        }
        
        @keyframes slide-in-left {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-right {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float-vertical {
          animation: float-vertical linear infinite;
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 relative">
        {/* Botão de contato fixo */}
        <button
          onClick={handleContactClick}
          className="fixed top-4 right-4 sm:top-6 sm:right-6 z-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-3 sm:p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg cursor-pointer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=r2dV09Ry7U3p&format=png&color=FFFFFF"
            alt="Contato"
            className="w-5 h-5 sm:w-6 sm:h-6 pointer-events-none"
          />
        </button>

        {/*partículas internacionais */}
        <InternationalParticles />
        
        {/*header */}
        <header className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-800/20"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 group"
              >
                <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                <span className="hidden md:block">Voltar</span>
              </button>
              <h1 className="text-3xl md:text-4xl font-bold text-center animate-pulse">
                🌍 DESTINOS INTERNACIONAIS
              </h1>
              <div className="w-20"></div>
            </div>
          </div>
        </header>

        {/*seção*/}
        <section className="py-12 bg-gradient-to-r from-indigo-100 to-blue-100 relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4 animate-slide-in-left">
              O Mundo Te Espera
            </h2>
            <p className="text-lg text-indigo-700 max-w-3xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              Leve o espírito Peregrinos para além das fronteiras. Descubra destinos 
              que desafiam seus limites e expandem sua perspektiva de mundo.
            </p>
          </div>
        </section>

        {/*destinos*/}
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalDestinations.map((destination, index) => (
                <DestinationCard 
                  key={destination.id} 
                  destination={destination} 
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/*ação*/}
        <section className="py-12 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4 animate-bounce-gentle">Sua Próxima Grande Aventura</h3>
            <p className="text-lg mb-6">
              O mundo é vasto e cheio de possibilidades. Onde sua jornada te levará?
            </p>
            <Link 
              to="/playlist" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-xl font-semibold hover:from-orange-400 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <Mountain className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Sons para sua Aventura Global
            </Link>
          </div>
        </section>

        {/*footer */}
        <footer className="bg-indigo-800 text-white py-2 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-indigo-200 text-sm">
              ©2025 Peregrinos.Inc | Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Internacional;