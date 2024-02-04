import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
};
function ProjectImage({ src }: Props) {
  return (
    <div className="relative aspect-video bg-black hover:scale-150">
      <Image fill className="object-contain" src={src} alt="project image" />;
    </div>
  );
}

export default ProjectImage;
