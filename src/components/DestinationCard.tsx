
import { MapPin, Calendar, TrendingUp } from "lucide-react";

interface Destination {
  id: number;
  name: string;
  image: string;
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

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
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
          <div className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full">
            <Calendar className="w-4 h-4" />
            <span>{destination.bestTime}</span>
          </div>
          <div className={`flex items-center gap-1 text-sm px-3 py-1 rounded-full ${getDifficultyColor(destination.difficulty)}`}>
            <TrendingUp className="w-4 h-4" />
            <span>{destination.difficulty}</span>
          </div>
        </div>

        {/* Tip */}
        <div className={`${colors.bg} ${colors.border} border rounded-lg p-4 mb-4`}>
          <div className="flex items-start gap-2">
            <MapPin className={`w-5 h-5 ${colors.accent} flex-shrink-0 mt-0.5`} />
            <div>
              <h4 className={`font-semibold ${colors.accent} mb-1`}>Dica Peregrino:</h4>
              <p className="text-sm text-gray-700">{destination.tip}</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button className={`w-full ${colors.button} text-white py-3 rounded-lg font-semibold transition-colors duration-200`}>
          Explorar Destino
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
