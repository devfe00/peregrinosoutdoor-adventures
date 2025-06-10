import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Plane, Globe, Mountain, MapPin, Calendar, Star, ChevronLeft, ChevronRight } from "lucide-react";


const internationalDestinations = [
  {
    id: 1,
    name: "Ilhas Faroe",
    country: "Dinamarca",
    images: [
      "/images-internacional/din.jpg",
    "/images-internacional/din2.jpg",
    "/images-internacional/din3.jpg",
    "/images-internacional/din4.jpg",
    "/images-internacional/din5.jpg",
    "/images-internacional/din6.jpg"
    ],
    description: "Território remoto com penhascos verticais, vilarejos vikings e neblina que abraça as montanhas. Perfeito pra quem curte aventura com vibe misteriosa.",
    rating: 5.0,
    bestTime: "Mai - Set",
    highlights: ["Penhascos épicos", "Trilhas selvagens", "Vilas vikings", "Neblina mística"]
  },
  {
    id: 2,
    name: "Parque Nacional de Banff",
    country: "Canadá",
    images: [
      "/images-internacional/cad1.jpg",
    "/images-internacional/cad2.jpg",
    "/images-internacional/cad3.jpg",
    "/images-internacional/cad4.jpeg",
    "/images-internacional/cad5.jpeg",
    "/images-internacional/cad6.jpg"
    ],
    description: "Lagos glaciares, trilhas alpinas e vida selvagem em meio às Montanhas Rochosas. Cenário de sonho real.",
    rating: 5.0,
    bestTime: "Jun - Set",
    highlights: ["Lagos glaciares", "Montanhas rochosas", "Trilhas panorâmicas", "Vida selvagem", "Ciclismo"]
  },
  {
    id: 3,
    name: "Yosemite",
    country: "Califórnia, EUA",
    images: [
     "/images-internacional/eu1.jpg",
    "/images-internacional/eu2.jpg",
    "/images-internacional/eu3.jpg",
    "/images-internacional/eu4.jpg",
    "/images-internacional/eu5.jpg",
    "/images-internacional/eu6.jpg"
    ],
    description: "Granitos gigantes, trilhas lendárias e cachoeiras sazonais no coração da Califórnia. Natureza bruta e vibe épica.",
    rating: 4.9,
    bestTime: "Mai - Out",
    highlights: ["El Capitan", "Cachoeiras sazonais", "Escalada", "Trilhas épicas", "Sequoias gigantes"]
  },
{
  id: 4,
  name: "Landmannalaugar",
  country: "Islândia",
  images: [
    "/images-internacional/isl1.jpg",
    "/images-internacional/isl2.jpg",
    "/images-internacional/isl3.jpg",
    "/images-internacional/isl4.jpg",
    "/images-internacional/isl5.jpg",
    "/images-internacional/isl6.jpg"
  ],
  description: "Montanhas coloridas, campos de lava e fontes termais no meio do nada. Trekking aqui parece viagem pra outro planeta.",
  rating: 4.9,
  bestTime: "Jun - Set",
  highlights: ["Trilha Laugavegur", "Montanhas riolíticas", "Campos de lava", "Águas termais naturais"]
},
  {
    id: 5,
    name: "Zermatt & Matterhorn",
    country: "Suíça",
    images: [
    "/images-internacional/su2.jpg",
    "/images-internacional/su1.jpg",
    "/images-internacional/su3.jpg",
    "/images-internacional/su4.jpeg",
    "/images-internacional/su5.jpg",
    "/images-internacional/su6.jpg",
    "/images-internacional/su7.jpg"
    ],
description: "Vilarejo alpino aos pés do icônico Matterhorn, com trilhas, escaladas e rotas de bike de tirar o fôlego.",
  rating: 5.0,
  bestTime: "Jun - Set",
  highlights: ["Matterhorn", "Trilhas alpinas", "Escalada", "Ciclismo de montanha"]
},
  {
    id: 6,
    name: "Dolomitas",
    country: "Itália",
    images: [
    "/images-internacional/ita1.jpg",
    "/images-internacional/ita2.jpg",
    "/images-internacional/ita3.jpg",
    "/images-internacional/ita4.jpg",
    "/images-internacional/ita5.jpg",
    "/images-internacional/ita6.jpg"
    ],
    description: "Picos pontiagudos, trilhas alpinas e vilarejos charmosos. Montanha cinematográfica em cada curva.",
    rating: 4.9,
    bestTime: "Jun - Set",
    highlights: ["Tre Cime di Lavaredo", "Trilhas panorâmicas", "Alpes italianos", "Refúgios de montanha"]
  },
    {
    id: 7,
  name: "Parque Nacional de Aoraki/Mount Cook",
  country: "Nova Zelândia",
  images: [
    "/images-internacional/nz1.jpg",
    "/images-internacional/nz2.jpg",
    "/images-internacional/nz3.jpeg",
    "/images-internacional/nz4.jpg",
    "/images-internacional/nz5.jpg",
    "/images-internacional/nz6.jpeg"
  ],
  description: "Lar do pico mais alto da Nova Zelândia, com trilhas épicas, glaciares e céu estrelado de outro planeta.",
  rating: 4.8,
  bestTime: "Nov - Mar",
  highlights: ["Mount Cook", "Trilhas alpinas", "Glaciares", "Observação de estrelas"]
},
    {
    id: 8,
    name: "Ilhas Lofoten",
    country: "Noruega",
    images: [
    "/images-internacional/no1.jpg",
    "/images-internacional/no2.jpg",
    "/images-internacional/no3.jpeg",
    "/images-internacional/no4.jpeg",
    "/images-internacional/no5.jpg",
    "/images-internacional/no6.jpeg"
    ],
description: "Arquipélago selvagem com picos afiados, trilhas insanas e vilarejos de pescador entre fiordes. O cenário é de outro mundo — e ainda rola escalada nas pedras!",
  rating: 4.9,
  bestTime: "Mai - Set",
  highlights: ["Reinebringen", "Fiordes dramáticos", "Escalada em rocha", "Vilarejos vikings", "Sol da meia-noite"]
},
    {
    id: 9,
    name: "Parque Nacional Jotunheimen",
    country: "Noruega",
    images: [
    "/images-internacional/nor1.jpg",
    "/images-internacional/nor2.webp",
    "/images-internacional/nor3.jpg",
    "/images-internacional/nor4.webp",
    "/images-internacional/nor5.jpg",
    "/images-internacional/nor6.jpg"
    ],
    description: "Picos pontiagudos, trilhas alpinas e vilarejos charmosos. Montanha cinematográfica em cada curva.",
    rating: 5.0,
    bestTime: "Jun - Set",
    highlights: ["Tre Cime di Lavaredo", "Trilhas panorâmicas", "Alpes italianos", "Refúgios de montanha"]
  },
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
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  // swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextImage();
    }
    if (isRightSwipe) {
      prevImage();
    }
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
      <div 
        className="relative h-64 overflow-hidden"
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <img
          src={destination.images[currentImageIndex]}
          alt={destination.name}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isHovered ? 'scale-110 brightness-110' : 'scale-100'
          }`}
        />
        
        {/*overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        
        {/*setas- apenas no desktop */}
        {!isMobile && (
          <>
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
          </>
        )}
        
        {/*badge do país */}
        <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-bounce-gentle">
          <Globe className="w-3 h-3" />
          {destination.country}
        </div>
        
        {/*avaliação*/}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 hover:bg-white transition-colors">
          <Star className="w-4 h-4 text-yellow-500 fill-current animate-pulse" />
          <span className="text-sm font-semibold">{destination.rating}</span>
        </div>
        
        {/*navegação*/}
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

        {/*swipe pra arrastar pro lado*/}
        {isMobile && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-xs animate-pulse">
          </div>
        )}
      </div>
      
      {/*card content */}
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
        
        {/*destaques*/}
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

const MobileCarousel = ({ destinations }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (currentIndex < destinations.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  if (!isMobile) {
    //desktop:  grid normal
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
            index={index}
          />
        ))}
      </div>
    );
  }

  //mobile:carrossel
  return (
    <div className="relative">
      {/*carrossel*/}
      <div className="overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {destinations.map((destination, index) => (
            <div key={destination.id} className="w-full flex-shrink-0 px-4">
              <DestinationCard 
                destination={destination} 
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/*setas*/}
<button
  onClick={prevSlide}
  disabled={currentIndex === 0}
  className={`absolute left-1 top-1/2 transform -translate-y-1/2 bg-[rgb(67_56_202/0.4)] backdrop-blur-md rounded-full p-2 transition-all duration-300 ${
    currentIndex === 0 
      ? 'opacity-30 cursor-not-allowed' 
      : 'hover:bg-[rgb(67_56_202/0.6)] hover:scale-105 active:scale-95'
  }`}
>
  <ChevronLeft className="w-4 h-4 text-white" />
</button>

<button
  onClick={nextSlide}
  disabled={currentIndex === destinations.length - 1}
  className={`absolute right-1 top-1/2 transform -translate-y-1/2 bg-[rgb(67_56_202/0.4)] backdrop-blur-md rounded-full p-2 transition-all duration-300 ${
    currentIndex === destinations.length - 1 
      ? 'opacity-30 cursor-not-allowed' 
      : 'hover:bg-[rgb(67_56_202/0.6)] hover:scale-105 active:scale-95'
  }`}
>
  <ChevronRight className="w-4 h-4 text-white" />
</button>

      {/*indicadores de página */}
      <div className="flex justify-center mt-6 gap-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-indigo-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/*contador*/}
      <div className="text-center mt-4 text-sm text-gray-600">
        {currentIndex + 1} de {destinations.length}
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
      
<div className="min-h-screen h-full bg-gradient-to-b from-blue-50 to-indigo-50 relative">
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
    <MobileCarousel destinations={internationalDestinations} />
  </div>
</section>
      {/*em breve*/}
<div className="mt-16 mb-12 px-4 text-center">
  <div className="group">
    <a 
      href="https://peregrinosout.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl border border-indigo-100 hover:border-indigo-200 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-100/50 cursor-pointer"
    >
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
        <div className="w-2.5 h-2.5 bg-indigo-600 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      <span className="text-indigo-700 font-semibold text-sm sm:text-base group-hover:text-indigo-800 transition-colors duration-300">
        Calma que tem mais vindo aí!<br></br> Enquanto isso, equipe seu rolê com nossos produtos.
      </span>
      
      <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </a>
  </div>
</div>
      
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