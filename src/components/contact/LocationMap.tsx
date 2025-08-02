import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Copy, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/useAnalytics';
import { ANALYTICS_EVENTS } from '@/lib/analytics-events';
import { GlassCard } from '@/components/modern/GlassCard';
import { Button } from '@/components/ui/button';

interface LocationMapProps {
  address: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  businessName?: string;
  className?: string;
  showDirections?: boolean;
  showCopyAddress?: boolean;
}

const LocationMap: React.FC<LocationMapProps> = ({
  address,
  coordinates,
  businessName = "Digital Fusion",
  className = "",
  showDirections = true,
  showCopyAddress = true
}) => {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const [copied, setCopied] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Gerar URL do Google Maps
  const generateMapUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${coordinates.lat},${coordinates.lng}&zoom=15`;
    }
    return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}&zoom=15`;
  };

  // URL para abrir no Google Maps (app/web)
  const getDirectionsUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;
    }
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  };

  // URL para visualizar no Google Maps
  const getViewUrl = () => {
    if (coordinates) {
      return `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
    }
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  };

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      
      toast({
        title: 'Endereço copiado!',
        description: 'Endereço copiado para a área de transferência.',
        duration: 2000,
      });
      
      trackEvent({
        action: 'copy_address',
        category: 'Contact',
        label: 'Location Map',
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Não foi possível copiar o endereço.',
        variant: 'destructive',
      });
    }
  };

  const handleDirections = () => {
    window.open(getDirectionsUrl(), '_blank', 'noopener,noreferrer');
    
    trackEvent({
      action: ANALYTICS_EVENTS.NAVIGATION.EXTERNAL_LINK,
      category: 'Contact',
      label: 'Get Directions',
    });
  };

  const handleViewMap = () => {
    window.open(getViewUrl(), '_blank', 'noopener,noreferrer');
    
    trackEvent({
      action: ANALYTICS_EVENTS.NAVIGATION.EXTERNAL_LINK,
      category: 'Contact',
      label: 'View on Google Maps',
    });
  };

  return (
    <div className={`w-full ${className}`}>
      <GlassCard className="p-0 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-1">
                  {businessName}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {address}
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-2">
              {showCopyAddress && (
                <motion.button
                  onClick={handleCopyAddress}
                  className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title="Copiar endereço"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </motion.button>
              )}
              
              <motion.button
                onClick={handleViewMap}
                className="p-2 rounded-lg bg-black/20 text-gray-400 hover:text-white transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Ver no Google Maps"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="relative h-64 md:h-80 bg-gradient-to-br from-gray-900 to-black">
          {/* Placeholder/Loading State */}
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mx-auto mb-4" />
                <p className="text-gray-400">Carregando mapa...</p>
              </div>
            </div>
          )}
          
          {/* Mapa Estático (Fallback) */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="w-full h-full" style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px'
              }} />
            </div>
            
            {/* Center Marker */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                {/* Pulse Effect */}
                <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
                <div className="absolute inset-2 rounded-full bg-purple-500/20 animate-ping animation-delay-200" />
                
                {/* Marker */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            </div>
            
            {/* Location Info Overlay */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                <p className="text-white font-medium text-sm mb-1">{businessName}</p>
                <p className="text-gray-300 text-xs">{address}</p>
              </div>
            </div>
          </div>
          
          {/* Overlay para interação */}
          <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer" onClick={handleViewMap}>
            <div className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center">
              <ExternalLink className="w-8 h-8 text-white mx-auto mb-2" />
              <p className="text-white font-medium">Ver mapa interativo</p>
              <p className="text-gray-300 text-sm">Clique para abrir no Google Maps</p>
            </div>
          </div>
        </div>

        {/* Footer com ações */}
        {showDirections && (
          <div className="p-4 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleDirections}
                className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Navigation className="w-4 h-4 mr-2" />
                Como Chegar
              </Button>
              
              <Button
                onClick={handleViewMap}
                variant="outline"
                className="flex-1 border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver no Maps
              </Button>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default LocationMap;