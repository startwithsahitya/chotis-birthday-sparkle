import { useEffect, useState } from 'react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: string }>>([]);

  useEffect(() => {
    const heartArray = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
    }));
    setHearts(heartArray);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: heart.left,
            animationDelay: heart.delay,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;