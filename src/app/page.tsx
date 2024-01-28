import projects from "@/data/projects";
import Image from "next/image";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import FloatingOlaf from "./components/FloatingOlaf";
import HeroSectionSnowflake from "./components/HeroSectionSnowflake";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <div className="text-center w-full h-screen bg-gradient-to-tr from-white to-blue-300">
        <NavBar />
        <section
          id="heroSection"
          className="h-2/3 flex flex-col justify-center items-center "
        >
          <div>
            <Image
              width={175}
              height={175}
              src="/myPic.jpg"
              alt="Gaurav Sobti pic"
              className="rounded-full shadow-xl mb-4 shadow-yellow-50 object-contain hover:scale-105"
            />
          </div>
          <h2 className="text-xl xl:text-3xl leading-10 lg:text-5xl lg:leading-[4rem]">
            Hi, I am Gaurav Sobti. <br /> I am a full-stack developer
          </h2>
        </section>
        <HeroSectionSnowflake />
      </div>
      <section className="bg-white p-8">
        <div className="lg:container mx-auto">
          <h2 className="text-xl font-bold mb-4">Projects</h2>
          {<Projects projects={projects} />}
        </div>
      </section>
      <FloatingOlaf />
    </main>
  );
}
