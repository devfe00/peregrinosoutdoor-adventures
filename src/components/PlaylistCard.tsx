
import { useState } from "react";
import { Play, Pause, Music, Clock, ExternalLink } from "lucide-react";

interface Song {
  title: string;
  artist: string;
  youtubeId: string;
  duration: string;
}

interface Playlist {
  id: number;
  mood: string;
  description: string;
  color: string;
  songs: Song[];
}

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard = ({ playlist }: PlaylistCardProps) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlaySong = (song: Song) => {
    const youtubeUrl = `https://www.youtube.com/watch?v=${song.youtubeId}`;
    window.open(youtubeUrl, '_blank');
    setCurrentSong(song);
    setIsPlaying(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Header */}
      <div className={`bg-gradient-to-r ${playlist.color} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-2 group">
          <Music className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
          <h3 className="text-2xl font-bold">{playlist.mood}</h3>
        </div>
        <p className="text-white/90">{playlist.description}</p>
      </div>

      {/* Songs List */}
      <div className="p-4">
        <div className="space-y-3">
          {playlist.songs.map((song, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-all cursor-pointer group hover:scale-102
                ${currentSong?.youtubeId === song.youtubeId && isPlaying ? 'bg-purple-50 border border-purple-200' : 'border border-transparent hover:border-purple-100'}`}
              onClick={() => handlePlaySong(song)}
            >
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110 group-hover:shadow-lg">
                  <Play className="w-4 h-4 ml-0.5 group-hover:scale-110 transition-transform duration-300" />
                </button>
                <div>
                  <h4 className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm">{song.duration}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Info sobre reprodução */}
        <div className="mt-6 border-t pt-4">
          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center gap-2 mb-2">
              <Music className="w-5 h-5 text-purple-600 animate-pulse" />
              <h4 className="font-semibold text-purple-800">Como ouvir:</h4>
            </div>
            <p className="text-sm text-purple-700">
              Clique em qualquer música para abrir no YouTube e curtir sua trilha sonora perfeita! 🎵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
