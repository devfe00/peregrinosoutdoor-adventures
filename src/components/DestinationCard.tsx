
import { useState } from "react";
import { MapPin, Calendar, TrendingUp, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  images: string[];
  description: string;
  tip: string;
  bestTime: string;
  difficulty: string;
}

interface DestinationCardProps {
  destination: Destination;
  theme: 'brasil' | 'internacional';
}

const DestinationCard = ({ destination, theme }: DestinationCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const themeColors = {
    brasil: {
      accent: 'text-green-600',
      bg: 'bg-green-50',
      border: 'border-green-200',
      button: 'bg-green-600 hover:bg-green-700'
    },
    internacional: {
      accent: 'text-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      button: 'bg-blue-600 hover:bg-blue-700'
    }
  };

  const colors = themeColors[theme];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Fácil':
        return 'text-green-600 bg-green-100';
      case 'Intermediário':
        return 'text-yellow-600 bg-yellow-100';
      case 'Avançado':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleExploreClick = () => {
    window.open('https://kiwi.com/', '_blank');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % destination.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + destination.images.length) % destination.images.length);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
      {/* Image Carousel */}
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={destination.images[currentImageIndex]} 
          alt={`${destination.name} - ${currentImageIndex + 1}`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />
        
        {/* Navigation Arrows */}
        {destination.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Image Indicators */}
        {destination.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {destination.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-2">{destination.name}</h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-gray-700 mb-4 leading-relaxed">
          {destination.description}
        </p>

        {/* Info Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors group">
            <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            <span>{destination.bestTime}</span>
          </div>
          <div className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full ${getDifficultyColor(destination.difficulty)} hover:scale-105 transition-transform group`}>
            <TrendingUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform duration-300" />
            <span>{destination.difficulty}</span>
          </div>
        </div>

        {/* Tip */}
        <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow group`}>
          <div className="flex items-start gap-2">
            <MapPin className={`w-5 h-5 ${colors.accent} flex-shrink-0 mt-0.5 group-hover:bounce animate-pulse`} />
            <div>
              <h4 className={`font-semibold ${colors.accent} mb-1`}>Dica Peregrino:</h4>
              <p className="text-sm text-gray-700">{destination.tip}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          onClick={handleExploreClick}
          className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 group`}
        >
          <span>Explorar Destino</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:translate-y-[-1px] transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
