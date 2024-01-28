import React from "react";
import Image from "next/image";

const OLAF_TEXTS = [
  `Hi, I am olaf. \n I am just here to cheer things up.`,
  `I like it snowy`,
];
export default function FloatingOlaf() {
  const randomOlafText =
    OLAF_TEXTS[Math.floor(Math.random() * OLAF_TEXTS.length)];
  return (
    <div className="group fixed right-4 bottom-4 flex flex-col items-end">
      <div className="cloud invisible group-hover:visible">
        <span className="text-xs text-center">{randomOlafText}</span>
      </div>
      <div className="relative h-24 w-24">
        <Image
          src="/olaf.png"
          fill
          alt="Floating olaf from disney frozen"
          className="object-contain olaf"
        />
      </div>
    </div>
  );
}
