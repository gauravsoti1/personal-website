import React from "react";
import Image from "next/image";

export default function FloatingOlaf() {
  return (
    <div className="group fixed right-4 bottom-4 flex flex-col items-end">
      <div className="cloud invisible group-hover:visible">
        <span className="text-xs text-center">
          Hi, I am olaf. <br /> I am just here to cheer things up.
        </span>
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
