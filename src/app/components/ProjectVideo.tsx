import React from 'react';

type Props = {
  src: string;
};

function ProjectVideo({ src }: Props) {
  return (
    <div className="relative aspect-video">
      <video
        autoPlay
        // controls
        loop
        muted
        playsInline
      >
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}

export default ProjectVideo;
