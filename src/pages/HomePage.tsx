import React from 'react';
import { motion } from 'framer-motion';
import { WeatherCard, WeatherType } from '@/components/WeatherCard';
const weatherData: { type: WeatherType; city: string; temperature: number; condition: string }[] = [
  { type: 'sunny', city: 'Cupertino', temperature: 28, condition: 'Clear Skies' },
  { type: 'windy', city: 'San Francisco', temperature: 16, condition: 'Windy & Foggy' },
  { type: 'rain', city: 'Tokyo', temperature: 22, condition: 'Heavy Rain' },
  { type: 'snow', city: 'Hokkaido', temperature: -5, condition: 'Snowstorm' },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};
export function HomePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_100%)]"></div>
      <main className="w-full max-w-7xl mx-auto flex-1 flex flex-col items-center justify-center">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Atmosphere
          </h1>
          <p className="mt-3 text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto">
            An iOS 18 inspired weather experience.
          </p>
        </div>
        <motion.div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {weatherData.map((data) => (
            <motion.div key={data.city} variants={itemVariants}>
              <WeatherCard {...data} />
            </motion.div>
          ))}
        </motion.div>
      </main>
      <footer className="w-full text-center py-8 text-neutral-500 text-sm">
        <p>Built with ❤️ at Cloudflare</p>
      </footer>
    </div>
  );
}