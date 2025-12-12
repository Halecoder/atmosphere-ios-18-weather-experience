import React from 'react';
import { Sun, Wind, CloudRain, CloudSnow, Zap } from 'lucide-react';
const createParticles = (count: number, className: string, animationName: string) => {
  return Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      className={className}
      style={{
        left: `${Math.random() * 100}%`,
        animation: `${animationName} ${Math.random() * 2 + 1}s linear ${Math.random() * 2}s infinite`,
      }}
    />
  ));
};
export const SunIcon = () => (
  <div className="relative w-48 h-48">
    <Sun className="w-full h-full text-yellow-300/80 animate-sun-spin" style={{ filter: 'drop-shadow(0 0 20px rgba(253, 224, 71, 0.7))' }} />
  </div>
);
export const WindIcon = () => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <Wind className="w-2/3 h-2/3 text-white/70 animate-cloud-drift" />
    <div className="absolute top-1/4 left-0 w-full h-1/2 overflow-hidden">
      <div 
        className="absolute w-24 h-px bg-white/50 rounded-full"
        style={{ animation: 'cloud-drift 4s ease-in-out 0.5s infinite alternate' }}
      />
    </div>
    <div className="absolute top-1/2 left-0 w-full h-1/2 overflow-hidden">
       <div 
        className="absolute right-0 w-32 h-px bg-white/50 rounded-full"
        style={{ animation: 'cloud-drift 5s ease-in-out infinite alternate' }}
      />
    </div>
  </div>
);
export const RainIcon = () => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <div className="absolute inset-0 animate-lightning-flash bg-blue-300/50 rounded-full blur-3xl" />
    <CloudRain className="w-2/3 h-2/3 text-white/80" />
    <Zap className="absolute w-1/3 h-1/3 text-yellow-300/80 opacity-0 animate-lightning-flash" style={{ animationDelay: '0.1s' }}/>
    <div className="absolute inset-0 overflow-hidden">
      {createParticles(30, 'absolute w-0.5 h-4 bg-gradient-to-b from-transparent to-blue-300 rounded-full', 'rain-fall')}
    </div>
  </div>
);
export const SnowIcon = () => (
  <div className="relative w-48 h-48 flex items-center justify-center">
    <CloudSnow className="w-2/3 h-2/3 text-white/80" />
    <div className="absolute inset-0 overflow-hidden">
      {createParticles(50, 'absolute w-1 h-1 bg-white/80 rounded-full', 'snow-fall')}
    </div>
  </div>
);