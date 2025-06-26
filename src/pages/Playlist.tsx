import { Link } from "react-router-dom";
import { ArrowLeft, Music, Play, Volume2, Disc3, Radio, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import PlaylistCard from "../components/PlaylistCard";

const playlists = [
  {
    id: 1,
    mood: "Chill",
    description: "Para momentos de contemplação na natureza",
    color: "from-green-400 to-blue-500",
    songs: [
      {
        title: "Céu Azul",
        artist: "Charlie Brown Jr",
        youtubeId: "8Pilhg_dIQs",
        duration: "3:19"
      },
      {
        title: "Pupila",
        artist: "Ana Vitória, Vitor Kley",
        youtubeId: "9Sk7RQtSl5g",
        duration: "4:13"
      },
      {
        title: "Chill Vibes",
        artist: "Lo-Fi Homer",
        youtubeId: "TbAjL4qgzC0",
        duration: "1:07:53"
      }
    ]
  },
  {
    id: 2,
    mood: "Pra Estrada",
    description: "Energia para grandes jornadas",
    color: "from-orange-400 to-red-500",
    songs: [
      {
        title: "Menina Solta",
        artist: "GIULIA BE",
        youtubeId: "CGbzvayv5HA",
        duration: "4:38"
      },
      {
        title: "Saudades do Tempo",
        artist: "Maneva",
        youtubeId: "hpOWZVu7sKY",
        duration: "3:58"
      },
      {
        title: "Dias De Luta e Glória",
        artist: "Charlie Brown Jr",
        youtubeId: "6eEOegzrwJg",
        duration: "2:25"
      }
    ]
  },
  {
    id: 3,
    mood: "Vibes Roots",
    description: "Conecte-se com suas raízes",
    color: "from-yellow-400 to-green-600",
    songs: [
      {
        title: "Is This Love",
        artist: "Bob Marley",
        youtubeId: "69RdQFDuYPI",
        duration: "3:53"
      },
      {
        title: "Three Little Birds",
        artist: "Bob Marley",
        youtubeId: "HNBCVM4KbUM",
        duration: "3:12"
      },
      {
        title: "Beautiful",
        artist: "Snoop Dogg e Pharrell",
        youtubeId: "nI6jSRgvfjI",
        duration: "5:21"
      }
    ]
  }
];

const Playlist = () => {
  const scrollLeft = () => {
    const container = document.getElementById('playlist-carousel');
    container?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.getElementById('playlist-carousel');
    container?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <>
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
<div className="min-h-screen h-full bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/*elementos*/}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border-2 border-purple-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 border-3 border-indigo-400 rounded-full animate-spin"></div>
        <Music className="absolute top-1/3 left-1/4 w-12 h-12 text-purple-300 animate-pulse" />
        <Disc3 className="absolute top-2/3 right-1/3 w-16 h-16 text-indigo-300 animate-spin" />
        <Radio className="absolute bottom-1/4 left-1/3 w-10 h-10 text-pink-300 animate-bounce" />
        <Headphones className="absolute top-1/2 right-1/4 w-14 h-14 text-purple-300 animate-pulse" />
      </div>

      {/*flutuante*/}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 text-6xl text-purple-300/20 animate-bounce">♪</div>
        <div className="absolute top-1/2 right-16 text-4xl text-indigo-300/20 animate-pulse">♫</div>
        <div className="absolute bottom-1/3 left-1/4 text-5xl text-pink-300/20 animate-bounce">♩</div>
        <div className="absolute top-3/4 right-1/3 text-3xl text-purple-300/20 animate-pulse">♬</div>
      </div>

      {/*header*/}
      <header className="bg-gradient-to-r from-purple-600/80 to-indigo-600/80 backdrop-blur-md text-white py-6 relative z-10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 hover:bg-white/10 px-3 py-2 rounded-lg transition-all duration-300 group"
            >
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              <span className="hidden md:block">Voltar</span>
            </button>
            <h1 className="text-3xl md:text-4xl font-bold text-center flex items-center gap-3">
              <Music className="w-8 h-8 animate-pulse" />
              PLAYLIST PEREGRINOS
              <Disc3 className="w-8 h-8 animate-spin" />
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/*secao*/}
      <section className="py-16 bg-gradient-to-r from-purple-600/20 to-indigo-600/20 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Headphones className="w-20 h-20 text-purple-300 animate-pulse" />
              <div className="absolute -inset-4 border-2 border-purple-400/50 rounded-full animate-ping"></div>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in">
            A Trilha Sonora da Sua Jornada
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Cada aventura merece sua própria soundtrack. Mergulhe nas vibrações que 
            transformam momentos em memórias inesquecíveis.
          </p>
          <div className="flex justify-center mt-8 gap-4">
            <div className="flex items-center gap-2 text-purple-200">
              <Radio className="w-5 h-5 animate-pulse" />
              <span>Ao Vivo</span>
            </div>
            <div className="flex items-center gap-2 text-purple-200">
              <Volume2 className="w-5 h-5 animate-bounce" />
              <span>Alta Qualidade</span>
            </div>
          </div>
        </div>
      </section>

      {/*playlists*/}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Play className="w-6 h-6 animate-pulse" />
              Suas Playlists de Viagem
              <Music className="w-6 h-6 animate-bounce" />
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/*setas*/}
          <div className="lg:hidden relative">
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-purple-500/80 transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-600/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-purple-500/80 transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div id="playlist-carousel" className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 px-12 pb-4" style={{ width: 'max-content' }}>
                {playlists.map((playlist, index) => (
                  <div 
                    key={playlist.id} 
                    className="flex-shrink-0 w-80 transition-all duration-500"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <PlaylistCard playlist={playlist} />
                  </div>
                ))}
              </div>
            </div>
            {/*scroll indicator*/}
            <div className="flex justify-center mt-4 gap-2">
              {playlists.map((_, index) => (
                <div key={index} className="w-2 h-2 bg-purple-400/50 rounded-full"></div>
              ))}
            </div>
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {playlists.map((playlist, index) => (
              <div 
                key={playlist.id} 
                className="transform hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <PlaylistCard playlist={playlist} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*acao*/}
      <section className="py-16 bg-gradient-to-r from-purple-600/30 to-indigo-600/30 backdrop-blur-md text-white relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center animate-pulse">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -inset-2 border-2 border-purple-400/50 rounded-full animate-ping"></div>
            </div>
          </div>
          <h3 className="text-3xl font-bold mb-6">Sua Música, Sua Aventura.</h3>
          <p className="text-xl mb-8 text-purple-200 max-w-2xl mx-auto">
            Deixe que cada acorde embale sua jornada e transforme cada quilômetro 
            em uma experiência sonora única.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/brasil" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-400 hover:to-emerald-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Volume2 className="w-6 h-6 group-hover:animate-bounce" />
              Destinos Brasil
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </Link>
            <Link 
              to="/internacional" 
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-400 hover:to-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Play className="w-6 h-6 group-hover:animate-pulse" />
              Roteiros Internacionais
              <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
            </Link>
          </div>
        </div>
      </section>
<footer className="bg-gradient-to-r from-slate-900/80 to-purple-900/80 backdrop-blur-md text-white py-2 relative z-10">
  <div className="container mx-auto px-4 text-center">
    <div className="flex items-center justify-center gap-2 mb-2">
      <Music className="w-4 h-4 text-purple-400 animate-pulse" />
      <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
      <Disc3 className="w-4 h-4 text-indigo-400 animate-spin" />
    </div>
    <p className="text-purple-200 text-xs sm:text-sm">
      ©2025 Peregrinos.Inc | Todos os direitos reservados
    </p>
  </div>
</footer>
    </div>
    </>
  );
};

export default Playlist;