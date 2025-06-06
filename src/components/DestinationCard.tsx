
import { useState } from "react";
import { MapPin, Star, Calendar, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Destination {
  id: number;
  name: string;
  country: string;
  description: string;
  images: string[];
  rating: number;
  bestTime: string;
  highlights: string[];
}

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isMobile = useIsMobile();

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === destination.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? destination.images.length - 1 : prev - 1
    );
  };

  const openKiwi = () => {
    window.open(`https://kiwi.com/search/results/${destination.name}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-102">
      {/* Image Carousel */}
      <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden group">
        <img
          src={destination.images[currentImageIndex]}
          alt={`${destination.name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Image Navigation */}
        {destination.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 sm:p-2 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            
            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
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
          </>
        )}

        {/* Country/Location overlay */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium">
          <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
          {destination.country}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-1">{destination.name}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold text-gray-700">{destination.rating}</span>
              </div>
              <span className="text-gray-400">•</span>
              <div className="flex items-center gap-1 text-gray-600">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{destination.bestTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
          {destination.description}
        </p>

        {/* Highlights */}
        <div className="mb-4 sm:mb-6">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Destaques:</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {destination.highlights.map((highlight, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={openKiwi}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-2.5 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg group flex items-center justify-center gap-2"
        >
          <span className="text-sm sm:text-base">Explorar Destino</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;
