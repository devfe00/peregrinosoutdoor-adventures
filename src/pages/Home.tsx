
import { Link } from "react-router-dom";
import { MapPin, Music, Plane, Compass } from "lucide-react";

const Home = () => {
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
        {/* Fallback image for mobile */}
        <div 
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&h=5472')"
          }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Flying Falcons Animation */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="falcon-animation falcon-1">🦅</div>
        <div className="falcon-animation falcon-2">🦅</div>
        <div className="falcon-animation falcon-3">🦅</div>
        <div className="falcon-animation falcon-4">🦅</div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-6">
        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold tracking-wider mb-4 text-white drop-shadow-2xl">
            PEREGRINOS
          </h1>
          <div className="w-32 h-1 bg-orange-500 mx-auto mb-4"></div>
          <p className="text-xl md:text-2xl font-light tracking-wide">
            EXPERIENCE
          </p>
        </div>

        {/* Manifesto */}
        <div className="max-w-3xl text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-orange-100">
            Conecte-se com a Essência da Aventura
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            Somos mais que uma marca. Somos um movimento de pessoas que escolhem viver intensamente, 
            explorando cada trilha, cada destino, cada momento com autenticidade e coragem.
          </p>
          <p className="text-base md:text-lg text-gray-300">
            Descubra destinos únicos, conecte-se com a natureza e encontre sua trilha sonora perfeita para cada jornada.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <Link 
            to="/brasil"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:text-green-300 transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Destinos Brasil</h3>
            <p className="text-sm text-gray-300">Trilhas, cachoeiras e lugares off-road pelo Brasil</p>
          </Link>

          <Link 
            to="/internacional"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Plane className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Internacional</h3>
            <p className="text-sm text-gray-300">Roteiros pelo mundo com espírito Peregrinos</p>
          </Link>

          <Link 
            to="/playlist"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Music className="w-12 h-12 mx-auto mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
            <h3 className="text-xl font-semibold mb-2">Playlist</h3>
            <p className="text-sm text-gray-300">Sons que embalam cada aventura</p>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Compass className="w-8 h-8 text-white/70" />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/20 backdrop-blur-sm text-center py-4">
        <p className="text-white/80 text-sm">
          ©2025 Peregrinos.Inc | Todos os direitos reservados.
        </p>
      </footer>

      <style>{`
        .falcon-animation {
          position: absolute;
          font-size: 2rem;
          opacity: 0.8;
        }

        .falcon-1 {
          animation: flyAcross1 18s linear infinite;
        }

        .falcon-2 {
          animation: flyAcross2 22s linear infinite 5s;
        }

        .falcon-3 {
          animation: flyAcross3 20s linear infinite 10s;
        }

        .falcon-4 {
          animation: flyAcross4 16s linear infinite 3s;
        }

        @keyframes flyAcross1 {
          0% {
            transform: translate(-100px, 20vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          25% {
            transform: translate(30vw, 40vh) rotate(-15deg);
          }
          50% {
            transform: translate(70vw, 25vh) rotate(10deg);
          }
          75% {
            transform: translate(90vw, 60vh) rotate(-5deg);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate(calc(100vw + 100px), 80vh) rotate(5deg);
            opacity: 0;
          }
        }

        @keyframes flyAcross2 {
          0% {
            transform: translate(calc(100vw + 100px), 70vh) rotate(180deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          25% {
            transform: translate(80vw, 30vh) rotate(165deg);
          }
          50% {
            transform: translate(40vw, 50vh) rotate(190deg);
          }
          75% {
            transform: translate(20vw, 20vh) rotate(175deg);
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-100px, 40vh) rotate(180deg);
            opacity: 0;
          }
        }

        @keyframes flyAcross3 {
          0% {
            transform: translate(-100px, 60vh) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          30% {
            transform: translate(25vw, 30vh) rotate(30deg);
          }
          60% {
            transform: translate(60vw, 70vh) rotate(60deg);
          }
          80% {
            transform: translate(85vw, 40vh) rotate(45deg);
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translate(calc(100vw + 100px), 15vh) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes flyAcross4 {
          0% {
            transform: translate(calc(100vw + 100px), 30vh) rotate(-135deg);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          35% {
            transform: translate(70vw, 60vh) rotate(-120deg);
          }
          65% {
            transform: translate(35vw, 25vh) rotate(-150deg);
          }
          85% {
            transform: translate(10vw, 75vh) rotate(-135deg);
          }
          95% {
            opacity: 0.9;
          }
          100% {
            transform: translate(-100px, 50vh) rotate(-135deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
