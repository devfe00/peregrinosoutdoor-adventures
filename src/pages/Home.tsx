
import { Link } from "react-router-dom";
import { MapPin, Music, Plane, Compass } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [showFalcons, setShowFalcons] = useState(false);

  const handleIconClick = () => {
    setShowFalcons(true);
    setTimeout(() => setShowFalcons(false), 3000); // Remove falcons after 3 seconds
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/mountain-climbing.mp4" type="video/mp4" />
        </video>
        {/* Fallback image that works for both mobile and desktop */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&h=5472')"
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Flying Falcons Animation - Only show when triggered */}
      {showFalcons && (
        <div className="absolute inset-0 z-5 pointer-events-none">
          <div className="falcon-animation falcon-1">🦅</div>
          <div className="falcon-animation falcon-2">🦅</div>
          <div className="falcon-animation falcon-3">🦅</div>
          <div className="falcon-animation falcon-4">🦅</div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6">
        {/* Logo */}
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider mb-3 sm:mb-4 text-white drop-shadow-2xl">
            PEREGRINOS
          </h1>
          <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto mb-3 sm:mb-4"></div>
          <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">
            EXPERIENCE
          </p>
        </div>

        {/* Manifesto */}
        <div className="max-w-3xl text-center mb-8 sm:mb-12 px-2">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 text-orange-100">
            Conecte-se com a Essência da Aventura
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-200 mb-4 sm:mb-6">
            Somos mais que uma marca. Somos um movimento de pessoas que escolhem viver intensamente, 
            explorando cada trilha, cada destino, cada momento com autenticidade e coragem.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-300">
            Descubra destinos únicos, conecte-se com a natureza e encontre sua trilha sonora perfeita para cada jornada.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mb-16 sm:mb-20">
          <Link 
            to="/brasil"
            onClick={handleIconClick}
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-green-400 group-hover:text-green-300 transition-colors group-hover:animate-bounce" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Destinos Brasil</h3>
            <p className="text-xs sm:text-sm text-gray-300">Trilhas, cachoeiras e lugares off-road pelo Brasil</p>
          </Link>

          <Link 
            to="/internacional"
            onClick={handleIconClick}
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Plane className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-blue-400 group-hover:text-blue-300 transition-colors group-hover:animate-pulse" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Internacional</h3>
            <p className="text-xs sm:text-sm text-gray-300">Roteiros pelo mundo com espírito Peregrinos</p>
          </Link>

          <Link 
            to="/playlist"
            onClick={handleIconClick}
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1"
          >
            <Music className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-purple-400 group-hover:text-purple-300 transition-colors group-hover:animate-spin" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Playlist</h3>
            <p className="text-xs sm:text-sm text-gray-300">Sons que embalam cada aventura</p>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Compass className="w-6 h-6 sm:w-8 sm:h-8 text-white/70" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm text-center py-3 sm:py-4">
        <p className="text-white/90 text-xs sm:text-sm px-4">
          ©2025 Peregrinos.Inc | Todos os direitos reservados.
        </p>
      </footer>

      <style>{`
        .falcon-animation {
          position: absolute;
          font-size: 1.5rem;
          opacity: 0.8;
        }

        .falcon-1 {
          animation: flyAcross1 3s linear;
        }

        .falcon-2 {
          animation: flyAcross2 3s linear 0.5s;
        }

        .falcon-3 {
          animation: flyAcross3 3s linear 1s;
        }

        .falcon-4 {
          animation: flyAcross4 3s linear 1.5s;
        }

        @media (min-width: 640px) {
          .falcon-animation {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
