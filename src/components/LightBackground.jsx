import { useEffect, useState } from "react";

export const LightStarBackground = () => {
  const [geometricStars, setGeometricStars] = useState([]);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Check if dark theme is active
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark') || 
                    document.body.classList.contains('dark') ||
                    window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkTheme(isDark);
    };

    checkTheme();
    generateGeometricStars();

    const handleResize = () => {
      generateGeometricStars();
    };

    const handleThemeChange = () => {
      checkTheme();
    };

    // Listen for theme changes
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    
    window.addEventListener("resize", handleResize);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleThemeChange);
      observer.disconnect();
    };
  }, []);

  const generateGeometricStars = () => {
    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 12000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 12 + 6,
        x: Math.random() * 100,
        y: Math.random() * 100,
        rotation: Math.random() * 360,
        animationDuration: Math.random() * 8 + 4,
        opacity: Math.random() * 0.4 + 0.2,
      });
    }

    setGeometricStars(newStars);
  };

  const getStarPath = (size) => {
    const outerRadius = size / 2;
    const innerRadius = outerRadius * 0.4;
    let path = "";
    
    for (let i = 0; i < 5; i++) {
      const outerAngle = (i * 72 - 90) * Math.PI / 180;
      const innerAngle = ((i + 0.5) * 72 - 90) * Math.PI / 180;
      
      const outerX = outerRadius + outerRadius * Math.cos(outerAngle);
      const outerY = outerRadius + outerRadius * Math.sin(outerAngle);
      
      const innerX = outerRadius + innerRadius * Math.cos(innerAngle);
      const innerY = outerRadius + innerRadius * Math.sin(innerAngle);
      
      if (i === 0) {
        path += `M ${outerX} ${outerY}`;
      } else {
        path += ` L ${outerX} ${outerY}`;
      }
      path += ` L ${innerX} ${innerY}`;
    }
    path += " Z";
    return path;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Star Particles Only - Only render in light theme */}
      {!isDarkTheme && geometricStars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute animate-float"
          style={{
            left: star.x + "%",
            top: star.y + "%",
            width: star.size + "px",
            height: star.size + "px",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
            animationDelay: (star.id * 0.1) + "s",
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          <svg
            width={star.size}
            height={star.size}
            viewBox={`0 0 ${star.size} ${star.size}`}
            style={{
              animation: `spin ${star.animationDuration * 2}s linear infinite`,
            }}
          >
            <path
              d={getStarPath(star.size)}
              fill="#6366f1"
              stroke="#8b5cf6"
              strokeWidth="1"
              style={{
                filter: `drop-shadow(0 0 ${star.size / 2}px rgba(99, 102, 241, 0.4))`,
              }}
            />
          </svg>
        </div>
      ))}

      {/* CSS for spin animation */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};