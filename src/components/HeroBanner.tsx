import { useState, useEffect } from 'react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroBanner = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 3}s`,
    color: ['#FFC0CB', '#FFD700', '#FF69B4', '#FF0000'][Math.floor(Math.random() * 4)],
  }));

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 192, 203, 0.3), rgba(255, 215, 0, 0.2)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className="absolute w-3 h-3 animate-confetti"
              style={{
                left: piece.left,
                backgroundColor: piece.color,
                animationDelay: piece.delay,
                borderRadius: Math.random() > 0.5 ? '50%' : '0',
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-poppins text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 text-gradient-hero leading-tight">
            Happy Birthday
          </h1>
          <h2 className="font-poppins text-2xl sm:text-4xl lg:text-6xl font-semibold mb-6 text-gradient-love">
            Chotiii Devii 🎉❤️
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 mx-auto max-w-md animate-bounce-gentle">
            The most special day for the most special sister! ✨
          </p>
        </div>

        {/* Floating Balloons */}
        <div className="absolute -top-20 left-1/4 animate-float">
          <div className="text-6xl">🎈</div>
        </div>
        <div className="absolute -top-16 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-6xl">🎈</div>
        </div>
        <div className="absolute -top-24 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-6xl">🎂</div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;