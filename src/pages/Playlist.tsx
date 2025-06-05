
import { Link } from "react-router-dom";
import { ArrowLeft, Music, Play, Volume2 } from "lucide-react";
import PlaylistCard from "../components/PlaylistCard";

const playlists = [
  {
    id: 1,
    mood: "Chill",
    description: "Para momentos de contemplação na natureza",
    color: "from-green-400 to-blue-500",
    songs: [
      {
        title: "Aquarela",
        artist: "Toquinho",
        youtubeId: "LnhGnO42Yxw",
        duration: "3:54"
      },
      {
        title: "Encontros e Despedidas",
        artist: "Milton Nascimento",
        youtubeId: "Q3bqnMBX4lk",
        duration: "4:12"
      },
      {
        title: "Waves",
        artist: "Dean Lewis",
        youtubeId: "dKlgCk3IGBg",
        duration: "3:20"
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
        title: "Tocando em Frente",
        artist: "Almir Sater",
        youtubeId: "U9GGNNyXoSE",
        duration: "4:38"
      },
      {
        title: "Born to Be Wild",
        artist: "Steppenwolf",
        youtubeId: "rMbATaj7Il8",
        duration: "3:30"
      },
      {
        title: "Viajante",
        artist: "Hermeto Pascoal",
        youtubeId: "JnEaF7X8oXY",
        duration: "5:22"
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
        title: "Saudade dos Aviões da Panair",
        artist: "Milton Nascimento",
        youtubeId: "OKdlm3kxHpQ",
        duration: "4:45"
      },
      {
        title: "Three Little Birds",
        artist: "Bob Marley",
        youtubeId: "HNBCVM4KbUM",
        duration: "3:05"
      },
      {
        title: "Pai Francisco",
        artist: "Fagner",
        youtubeId: "wKgZ_gPe1w0",
        duration: "4:18"
      }
    ]
  }
];

const Playlist = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-purple-600 text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <ArrowLeft className="w-6 h-6" />
              <span className="hidden md:block">Voltar</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              🎵 PLAYLIST PEREGRINOS
            </h1>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-purple-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">
            A Trilha Sonora da Sua Jornada
          </h2>
          <p className="text-lg text-purple-700 max-w-3xl mx-auto">
            Cada aventura merece sua própria soundtrack. Aqui você encontra as músicas 
            perfeitas para cada momento da sua viagem.
          </p>
        </div>
      </section>

      {/* Playlists */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Sua Música, Sua Aventura</h3>
          <p className="text-lg mb-6">
            Deixe que cada acorde embale sua jornada e torne cada momento inesquecível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/brasil" 
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-400 transition-colors"
            >
              <Volume2 className="w-5 h-5" />
              Destinos Brasil
            </Link>
            <Link 
              to="/internacional" 
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors"
            >
              <Play className="w-5 h-5" />
              Roteiros Internacionais
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-purple-200">
            ©2025 Peregrinos.Inc | Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Playlist;
