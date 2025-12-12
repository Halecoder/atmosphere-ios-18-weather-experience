import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { SunIcon, WindIcon, RainIcon, SnowIcon } from './WeatherIcons';
import { cn } from '@/lib/utils';
export type WeatherType = 'sunny' | 'windy' | 'rain' | 'snow';
interface WeatherCardProps {
  type: WeatherType;
  city: string;
  temperature: number;
  condition: string;
}
const weatherConfig = {
  sunny: {
    Icon: SunIcon,
    gradient: 'bg-sunny-gradient',
  },
  windy: {
    Icon: WindIcon,
    gradient: 'bg-windy-gradient',
  },
  rain: {
    Icon: RainIcon,
    gradient: 'bg-rainy-gradient',
  },
  snow: {
    Icon: SnowIcon,
    gradient: 'bg-snowy-gradient',
  },
};
export const WeatherCard: React.FC<WeatherCardProps> = ({ type, city, temperature, condition }) => {
  const { Icon, gradient } = weatherConfig[type];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  return (
    <motion.div
      className="w-full aspect-[3/4] rounded-6xl p-8 flex flex-col justify-between relative overflow-hidden text-white shadow-2xl"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        rotateX,
        rotateY,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <div className={cn('absolute inset-0 -z-20', gradient)} />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-xl -z-10" />
      <div className="absolute inset-0 border border-white/10 rounded-6xl -z-10" />
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold">{city}</h2>
          <p className="text-lg font-light opacity-80">{condition}</p>
        </div>
        <div className="text-6xl font-thin tracking-tighter">
          {temperature}°
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 -mt-8">
        <motion.div
          style={{
            transform: 'translateZ(50px)',
          }}
        >
          <Icon />
        </motion.div>
      </div>
      <div className="text-center text-sm font-light opacity-70">
        <p>Atmosphere Weather</p>
      </div>
    </motion.div>
  );
};