import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection('portfolio');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="hero-gradient"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      <div className="relative z-10 text-center px-6 hero-content">
        <div className="overflow-hidden mb-4">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter slide-up">
            RICK
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter slide-up delay-1">
            SILVA
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <div className="flex items-center justify-center space-x-4 text-gray-400 uppercase tracking-[0.3em] text-sm md:text-base slide-up delay-2">
            <span>Videomaker</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Fotógrafo</span>
            <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
            <span>Editor</span>
          </div>
        </div>

        <div className="overflow-hidden">
          <button
            onClick={scrollToPortfolio}
            className="slide-up delay-3 group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-500 hover:bg-gray-200"
          >
            <span className="relative z-10">Ver Trabalho</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent transform skew-x-12 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-white/5 to-transparent transform -skew-x-12 -translate-x-1/2"></div>
    </section>
  );
}
