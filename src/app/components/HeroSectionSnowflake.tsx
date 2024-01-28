"use client";
import Snowflakes from "magic-snowflakes";
import React, { useEffect } from "react";

function HeroSectionSnowflake() {
  useEffect(() => {
    console.log("Inside useEffect to create snowflakes");
    const snowflakes = new Snowflakes({
      container:
        document.querySelector<HTMLElement>("#snowflakes-container") ||
        undefined,
      autoResize: false,
    });
    snowflakes.start();
    return () => snowflakes.destroy();
  }, []);
  return (
    <div
      id="snowflakes-container"
      className="w-[90%] h-full mx-0 pointer-events-none absolute top-0 left-12 right-12"
    >
      {" "}
    </div>
  );
}

export default HeroSectionSnowflake;
