
import { useState } from "react";
import { Play, Pause, Music, Clock } from "lucide-react";

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
    if (currentSong?.youtubeId === song.youtubeId && isPlaying) {
      setIsPlaying(false);
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${playlist.color} p-6 text-white`}>
        <div className="flex items-center gap-3 mb-2">
          <Music className="w-8 h-8" />
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
              className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer
                ${currentSong?.youtubeId === song.youtubeId && isPlaying ? 'bg-purple-50 border border-purple-200' : 'border border-transparent'}`}
              onClick={() => handlePlaySong(song)}
            >
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors">
                  {currentSong?.youtubeId === song.youtubeId && isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 ml-0.5" />
                  )}
                </button>
                <div>
                  <h4 className="font-semibold text-gray-800">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube Player */}
        {currentSong && isPlaying && (
          <div className="mt-6 border-t pt-4">
            <div className="bg-gray-100 rounded-lg p-4">
              <h4 className="font-semibold mb-2">Tocando Agora:</h4>
              <p className="text-sm text-gray-600 mb-3">
                {currentSong.title} - {currentSong.artist}
              </p>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentSong.youtubeId}?autoplay=1`}
                  title={`${currentSong.title} - ${currentSong.artist}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistCard;
