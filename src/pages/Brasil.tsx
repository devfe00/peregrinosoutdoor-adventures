import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Camera, Star, ChevronLeft, ChevronRight, Plane } from "lucide-react";

const brasilDestinations = [
  {
    id: 1,
    name: "Chapada Diamantina - BA",
    country: "Brasil",
    images: [
      "/images-brasil/photo-1.jpg",
    "/images-brasil/photo-2.jpg",
    "/images-brasil/photo-3.jpg",
    "/images-brasil/photo-4.jpg",
    "/images-brasil/photo-5.jpg",
    "/images-brasil/photo-6.jpg"
    ],
    description: "Trilhas incríveis entre cânions, cachoeiras cristalinas e formações rochosas únicas. Um dos tesouros mais preservados do Brasil.",
    rating: 4.8,
    bestTime: "Mai - Set",
    highlights: ["Trilhas", "Cachoeiras", "Cânions", "Formações rochosas"]
  },
  {
    id: 2,
    name: "Serrinha do Alambari - RJ",
    country: "Brasil",
    images: [
      "/images-brasil/rj6.jpg",
    "/images-brasil/rj2.jpg",
    "/images-brasil/rj3.jpg",
    "/images-brasil/rj4.jpg",
    "/images-brasil/rj5.jpg",
    "/images-brasil/rj1.jpg"
    ],
    description: "Destino perfeito pra quem curte trekking e camping no meio da natureza. A região tem trilhas leves, rios de água gelada e poços cristalinos, tudo cercado pela vibe da Mata Atlântica.",
    rating: 4.6,
    bestTime: "Jun - Set",
    highlights: ["Rochas", "Trilhas", "Poços naturais", "Cachoeiras"]
  },
  {
    id: 3,
    name: "Serra do Cipó – MG",
    country: "Brasil",
    images: [
      "/images-brasil/mg6.jpg",
    "/images-brasil/mg2.jpg",
    "/images-brasil/mg3.jpg",
    "/images-brasil/mg4.jpg",
    "/images-brasil/mg5.jpg",
    "/images-brasil/mg1.jpg"
    ],
    description: "Paraíso dos aventureiros, a Serra do Cipó mistura trilhas intensas, cachoeiras cristalinas e paredões perfeitos para escalada. Um dos destinos mais versáteis para trekking e natureza selvagem em Minas Gerais.",
    rating: 4.8,
    bestTime: "Abr - Set",
    highlights: ["Escalada", "Trekking", "Cachoeiras", "Cânions", "Parque Nacional"]
  },
  {
    id: 4,
    name: "Serra do Rio do Rastro - SC",
    country: "Brasil",
    images: [
      "/images-brasil/rs6.jpg",
    "/images-brasil/rs2.jpg",
    "/images-brasil/rs3.jpg",
    "/images-brasil/rs4.jpg",
    "/images-brasil/rs5.jpg",
    "/images-brasil/rs1.jpg"
    ],
    description: "Montanhas impressionantes, estradas sinuosas e mirantes de tirar o fôlego no coração de Santa Catarina.",
    rating: 4.6,
    bestTime: "Mai - Set",
    highlights: ["Vista panorâmica da serra", "Trilhas", "Escalada", "Mirantes"]
  }
];

//partículas brasileira
const BrazilianParticles = () => {
  const particles = [
{ icon: "🌴", delay: "0s", duration: "15s", left: "10%", size: "2rem" },
 { icon: "🦅", delay: "2s", duration: "12s", left: "85%", size: "1.5rem" },
 { icon: "🌻", delay: "4s", duration: "18s", left: "70%", size: "1.8rem" },
 { icon: "🐊", delay: "1s", duration: "14s", left: "25%", size: "1.6rem" },
 { icon: "🍃", delay: "3s", duration: "16s", left: "60%", size: "1.4rem" },
 { icon: "☀️", delay: "5s", duration: "20s", left: "40%", size: "2.2rem" },
 { icon: "🍀", delay: "6s", duration: "13s", left: "90%", size: "1.7rem" },
 { icon: "🦎", delay: "7s", duration: "17s", left: "15%", size: "1.3rem" },
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
      
      {/* waves/ondas */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-30 z-10">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
    </div>
  );
};const DestinationCard = ({ destination, index }) => {
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

  // Funções para swipe
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

  const handleExploreDestination = () => {
    window.open('https://kiwi.com', '_blank');
  };

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-200/50 ${
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
        
        {/*setas -apenas desktop */}
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
        
        {/*badge do país*/}
        <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1 animate-bounce-gentle">
          <MapPin className="w-3 h-3" />
          Brasil
        </div>
        
        {/*avaliacao */}
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

        {/*passar imagem*/}
        {isMobile && (
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 text-xs animate-pulse">
          </div>
        )}
      </div>
      
      {/*card */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-green-600 transition-all duration-500 group-hover:scale-105 transform">
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
        
        {/*destaque */}
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-800 mb-2">Destaques:</p>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium transform hover:scale-105 transition-transform cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>
        
        {/*botao */}
        <button 
          onClick={handleExploreDestination}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
        >
          Explorar Destino
          <Plane className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </button>
      </div>
    </div>
  );
};

//carrossel
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
    // desktop: grid normal
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  return (
    <div className="relative">
      {/*cntainer */}
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

const Brasil = () => {
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
        
        @keyframes wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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
        
        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent); 
          animation: wave 6s linear infinite;
          border-radius: 50% 50% 0 0;
        }

        .wave1 { 
          animation-delay: 0s;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent); 
        }
        .wave2 { 
          animation-delay: 2s;
          background: linear-gradient(90deg, transparent, rgba(37, 99, 235, 0.8), transparent); 
        }
        .wave3 { 
          animation-delay: 4s;
          background: linear-gradient(90deg, transparent, rgba(29, 78, 216, 0.8), transparent); 
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <div className="min-h-screen h-full bg-gradient-to-b from-blue-50 to-indigo-50 relative">
        {/*botão contato fixo */}
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

        {/*partículas brasileiras*/}
        <BrazilianParticles />
                <header className="bg-gradient-to-r from-green-600 to-green-700 text-white py-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-green-800/20"></div>
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
                🇧🇷 DESTINOS BRASIL
              </h1>
              <div className="w-20"></div>
            </div>
          </div>
        </header>

        {/*seção*/}
        <section className="py-12 bg-gradient-to-r from-green-100 to-emerald-100 relative">
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 animate-slide-in-left">
              Explore as Maravilhas do Nosso Brasil
            </h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              Do sertão às montanhas, das chapadas aos litorais. Descubra destinos únicos 
              que conectam você com a essência mais pura da natureza brasileira.
            </p>
          </div>
        </section>
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-6">
            <MobileCarousel destinations={brasilDestinations} />
          </div>
        </section>
{/* em breve */}
<div className="mt-16 mb-12 px-4 text-center">
  <div className="group">
    <a 
      href="https://peregrinosout.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 via-yellow-50 to-blue-50 hover:from-green-100 hover:via-yellow-100 hover:to-blue-100 px-6 py-4 sm:px-8 sm:py-5 rounded-2xl border border-green-100 hover:border-green-200 transform hover:scale-105 hover:-translate-y-1 transition-all duration-500 hover:shadow-xl hover:shadow-green-100/50 cursor-pointer"
    >
<div className="flex gap-1.5">
  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-bounce"></div>
  <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
  <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.6s' }}></div>
</div>
      <span className="text-green-800 font-semibold text-sm sm:text-base group-hover:text-green-900 transition-colors duration-300">
        Calma que tem mais vindo aí!<br />Enquanto isso, equipe seu rolê com nossos produtos.
      </span>
      
      <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
    </a>
  </div>
</div>        {/*acao */}
        <section className="py-12 bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h3 className="text-2xl font-bold mb-4 animate-bounce-gentle">Pronto para a Aventura?</h3>
            <p className="text-lg mb-6">
              Cada destino é uma nova história. Qual será a sua próxima?
            </p>
            <Link 
              to="/playlist"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-green-800 px-8 py-4 rounded-xl font-semibold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
            >
              <Camera className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Trilha Sonora para sua Jornada
            </Link>
          </div>
        </section>
        <footer className="bg-green-800 text-white py-2 relative z-10">
          <div className="container mx-auto px-4 text-center">
            <p className="text-green-200 text-sm">
              ©2025 Peregrinos.Inc | Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Brasil;