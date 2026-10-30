'use client';

import React, { useEffect, useRef } from 'react';

type Props = {
  src: string;
};

function ProjectVideo({ src }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React's `muted` JSX attribute doesn't always sync to the DOM property
    // in time for autoplay's mute check, so set it explicitly here.
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative aspect-video overflow-hidden bg-slate-100">
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        preload="metadata"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}

export default ProjectVideo;
