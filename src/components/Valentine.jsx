import React, { useEffect, useState } from 'react';

export default function Valentine() {
  const [revealed, setRevealed] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (!revealed) return;

    // Create initial burst of hearts
    const initialHearts = Array.from({ length: 15 }, (_, i) => ({
      id: `initial-${i}`,
      left: Math.random() * 100,
      delay: i * 0.1,
      duration: Math.random() * 4 + 6,
      size: Math.random() * 20 + 15,
      color: ['text-rose-400', 'text-rose-600', 'text-pink-300', 'text-amber-400'][
        Math.floor(Math.random() * 4)
      ],
    }));
    setHearts(initialHearts);

    // Continuously add hearts
    const heartInterval = setInterval(() => {
      const newHeart = {
        id: `heart-${Date.now()}-${Math.random()}`,
        left: Math.random() * 100,
        delay: 0,
        duration: Math.random() * 4 + 6,
        size: Math.random() * 20 + 15,
        color: ['text-rose-400', 'text-rose-600', 'text-pink-300', 'text-amber-400'][
          Math.floor(Math.random() * 4)
        ],
      };
      
      setHearts(prev => [...prev, newHeart]);
      
      // Remove heart after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(h => h.id !== newHeart.id));
      }, 8000);
    }, 300);

    // Add sparkles
    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        id: `sparkle-${Date.now()}-${Math.random()}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random(),
      };
      
      setSparkles(prev => [...prev, newSparkle]);
      
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 2000);
    }, 500);

    return () => {
      clearInterval(heartInterval);
      clearInterval(sparkleInterval);
    };
  }, [revealed]);

  if (!revealed) {
    return (
      <div className="z-50 min-h-screen overflow-x-hidden fixed bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 flex items-center justify-center p-8">
        <div className="text-center animate-fade-in">
          
          <button
            onClick={() => setRevealed(true)}
            className="group relative px-12 py-5 text-xl md:text-2xl font-semibold text-white bg-gradient-to-r from-rose-600 to-rose-500 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">It's Valentines :)</span>
            <div className="fixed bg-gradient-to-r from-rose-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@300;400&display=swap');

          .font-display {
            font-family: 'Playfair Display', serif;
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          @keyframes pulse-heart {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.15);
            }
          }

          .animate-fade-in {
            animation: fade-in 1.5s ease-out forwards;
          }

          .animate-pulse-heart {
            animation: pulse-heart 1.5s ease-in-out infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-x-hidden relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100">
      {/* Floating hearts background */}
      <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className={`absolute ${heart.color} opacity-0 animate-float-up`}
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Decorative corner rose */}
      <div className="absolute top-8 right-8 text-5xl md:text-6xl animate-spin-slow drop-shadow-lg">
        🌹
      </div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center p-8">
        <div className="relative bg-white/70 backdrop-blur-2xl rounded-[30px] px-8 md:px-20 py-16 shadow-[0_20px_60px_rgba(201,24,74,0.15)] border-2 border-white/50 max-w-4xl text-center animate-fade-in">
          {/* Pulsing heart decoration */}
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-6xl md:text-7xl animate-pulse-heart drop-shadow-lg">
            💗
          </div>

          {/* Main heading */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-4 bg-gradient-to-r from-rose-700 via-rose-500 to-amber-500 bg-clip-text text-transparent animate-shimmer bg-[length:200%_200%] leading-tight">
            I LOVE OLUCHI
          </h1>

          {/* Subtitle */}
          <div className="text-xl md:text-2xl text-rose-700 font-light tracking-[0.2em] uppercase mt-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            Happy Valentine's Day
          </div>

          {/* Valentine's message */}
          <div className="mt-10 p-8 bg-gradient-to-br from-rose-500/10 to-amber-500/10 rounded-3xl border border-rose-500/20 opacity-0 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p className="text-xl md:text-2xl text-rose-700 leading-relaxed italic mb-2">
              You make every day feel like Valentine's Day
            </p>
            <p className="text-xl md:text-2xl text-rose-700 leading-relaxed italic mb-2">
              My heart beats only for you
            </p>
            <p className="text-xl md:text-2xl text-rose-700 leading-relaxed italic">
              Forever and always ♥
            </p>
          </div>

          {/* Date */}
          <div className="mt-8 text-lg text-rose-700 tracking-[0.15em] font-light opacity-0 animate-slide-up" style={{ animationDelay: '1.5s' }}>
            FEBRUARY 14, 2026
          </div>

          {/* Rose decorations */}
          <div className="absolute bottom-5 left-5 text-4xl md:text-5xl opacity-80 animate-gentle-sway">
            🌹
          </div>
          <div className="absolute bottom-5 right-5 text-4xl md:text-5xl opacity-80 animate-gentle-sway-delayed">
            🌹
          </div>

          {/* Sparkles */}
          {sparkles.map(sparkle => (
            <div
              key={sparkle.id}
              className="absolute w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_10px_#d4af37] animate-sparkle"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@300;400&display=swap');

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes pulse-heart {
          0%, 100% {
            transform: translateX(-50%) scale(1);
          }
          50% {
            transform: translateX(-50%) scale(1.15);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gentle-sway {
          0%, 100% {
            transform: rotate(-5deg);
          }
          50% {
            transform: rotate(5deg);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float-up {
          animation: float-up 8s ease-in infinite;
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }

        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-gentle-sway {
          animation: gentle-sway 4s ease-in-out infinite;
        }

        .animate-gentle-sway-delayed {
          animation: gentle-sway 4s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
