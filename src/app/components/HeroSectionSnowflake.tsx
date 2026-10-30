'use client';
import Snowflakes from 'magic-snowflakes';
import React, { useEffect, useRef } from 'react';

function HeroSectionSnowflake() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const snowflakes = new Snowflakes({
      container,
      autoResize: false,
    });
    snowflakes.start();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          snowflakes.start();
        } else {
          snowflakes.stop();
        }
      },
      { threshold: 0 },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      snowflakes.destroy();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="snowflakes-container"
      className="w-[80%] md:w-[90%] h-[90vh] md:h-full mx-0 pointer-events-none absolute top-0 left-4 md:left-12 "
    >
      {' '}
    </div>
  );
}

export default HeroSectionSnowflake;
