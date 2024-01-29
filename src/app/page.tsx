import projects from "@/data/projects";
import Image from "next/image";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";
import FloatingOlaf from "./components/FloatingOlaf";
import HeroSectionSnowflake from "./components/HeroSectionSnowflake";
import myPic from "./myPic.jpg";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <div className="text-center w-full h-screen bg-gradient-to-tr from-white to-blue-300">
        <NavBar />
        <section
          id="heroSection"
          className="h-2/3 flex flex-col justify-center items-center "
        >
          <Image
            width={384}
            height={512}
            priority
            // sizes="(max-width: 768px) 40%, 10%"
            src={myPic}
            objectFit="contain"
            alt="Gaurav Sobti pic"
            className="rounded-full shadow-xl mb-4 shadow-yellow-50  hover:scale-105 w-[40%] md:w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%] h-[auto]"
            placeholder="blur"
          />
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
