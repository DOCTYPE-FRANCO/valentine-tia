import React, { useEffect, useState } from 'react';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
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

    return () => {
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <>
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

      <style jsx>{`
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

        .animate-float-up {
          animation: float-up 8s ease-in infinite;
        }
      `}</style>
    </>
  );
}
