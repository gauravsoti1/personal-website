import Image from 'next/image';
import React from 'react';

type Props = {
  src: string;
  alt?: string;
};
function ProjectImage({ src, alt = "Project screenshot" }: Props) {
  return (
    <div className="relative aspect-video overflow-hidden bg-slate-100">
      <Image
        fill
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        src={src}
        alt={alt}
      />
    </div>
  );
}

export default ProjectImage;
