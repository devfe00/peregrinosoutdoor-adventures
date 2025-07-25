import { Link, useNavigate } from "react-router-dom";
import { MapPin, Music, Plane } from "lucide-react";
import { useState, useEffect } from "react";

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  //detecta mobile ou desktop?!
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const handleContactClick = () => {
    console.log('Navegando para contato...');
    navigate('/contato');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/*video*/}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        >
          {/*vídeo mobile*/}
          {isMobile && (
            <source src="/assets/mountain-climbing.mp4" type="video/mp4" />
          )}
          
          {/* vídeo  desktop*/}
          {!isMobile && (
            <source src="/assets/mountain-climbing-desktop.mp4" type="video/mp4" />
          )}
          
          {/*fallback */}
          <div 
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3648&h=5472')"
            }}
          />
        </video>
        
        {/*melhor legibilidade */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* contato/futuro */}
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

      {/*principal */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4 sm:px-6">
 <div className="mb-6 sm:mb-8 text-center mt-16 sm:mt-0">
<h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-wider mb-3 sm:mb-4 text-white drop-shadow-2xl relative">
<span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-600 bg-clip-text text-transparent blur-sm animate-[shake_0.5s_ease-in-out_infinite_alternate]">
 PEREGRINOS
</span>
<span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent font-bold tracking-wider">
 PEREGRINOS
</span>
</h1>
      <div className="w-24 sm:w-32 h-1 bg-orange-500 mx-auto mb-3 sm:mb-4"></div>
      <p className="text-lg sm:text-xl md:text-2xl font-light tracking-wide">
      <span className="bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent font-bold tracking-widest drop-shadow-lg hover:scale-105 transition-all duration-300 relative">
        <span className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 bg-clip-text text-transparent blur-sm animate-[shake_0.5s_ease-in-out_infinite_alternate]">
          ADVENTURES
        </span>
        ADVENTURES
      </span> </p> </div>
        {}
        <div className="max-w-3xl text-center mb-8 sm:mb-12 px-2">
<h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-green-100 to-blue-100 bg-clip-text text-transparent">
 Conecte-se com a Essência da Aventura
</h2>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6">
      <strong>Adventures</strong> é um movimento. Somos para quem vive o agora, explora o mundo sem limites e encara tudo como o falcão Peregrino, cada desafio e cada destino com coragem e autenticidade.
      </p>
      <p className="text-sm sm:text-base md:text-lg">
      Descubra destinos únicos, encontre sua trilha sonora perfeita para cada jornada. E se junte ao Clube dos Exploradores
      </p>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-4xl mb-16 sm:mb-20">
          <Link 
            to="/brasil"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <MapPin className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-green-400 group-hover:text-green-300 transition-colors group-hover:animate-bounce" />
           <h3 className="text-lg sm:text-xl font-semibold mb-2 text-green-400">Destinos Brasil</h3>
            <p className="text-xs sm:text-sm">Trilhas, cachoeiras e lugares off-road pelo Brasil</p>
          </Link>

          <Link 
            to="/internacional"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            <Plane className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-blue-400 group-hover:text-blue-300 transition-colors group-hover:animate-pulse" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-400">Internacional</h3>
            <p className="text-xs sm:text-sm">Roteiros pelo mundo com espírito Peregrinos</p>
          </Link>

          <Link 
            to="/playlist"
            className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1"
          >
            <Music className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-purple-400 group-hover:text-purple-300 transition-colors group-hover:animate-spin" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-purple-400">Playlist</h3>
            <p className="text-xs sm:text-sm">Sons que embalam cada aventura</p>
          </Link>
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 z-10 bg-black/30 backdrop-blur-sm text-center py-3 sm:py-4">
        <p className="text-white/90 text-xs sm:text-sm px-4">
          ©2025 Peregrinos.Inc | Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;