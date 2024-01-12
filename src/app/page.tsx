import projects from "@/data/projects";
import Image from "next/image";
import Projects from "./components/Projects";
import NavBar from "./components/NavBar";

export default async function Home() {
  return (
    <main className="flex flex-col">
      <div className="text-center w-screen h-screen bg-gradient-to-tr from-white to-blue-300 ">
        <NavBar />
        <section className="h-2/3 flex flex-col justify-center items-center">
          <Image
            src="/myPic.jpg"
            alt="Gaurav Sobti pic"
            width="200"
            height="200"
            className="rounded-full shadow-xl object-cover mb-4 shadow-yellow-50"
          />
          <h2 className="text-3xl leading-10 lg:text-5xl lg:leading-[4rem]">
            Hi, I am Gaurav Sobti. <br /> I am a software developer
          </h2>
        </section>
      </div>
      <section className="lg:container mx-auto bg-white p-8">
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        {<Projects projects={projects} />}
      </section>
    </main>
  );
}
