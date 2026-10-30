import projects from '@/data/projects';
import Image from 'next/image';
import Projects from './components/Projects';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import FloatingOlaf from './components/FloatingOlaf';
import HeroSectionSnowflake from './components/HeroSectionSnowflake';
import myPic from './myPic.jpg';
import { BASE_URL } from '@/lib/constants';

export default async function Home() {
  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Gaurav Sobti',
    url: BASE_URL,
    image: `${BASE_URL}/myPic.jpg`,
    jobTitle: 'Senior Fullstack Engineer',
    description:
      "Senior fullstack engineer, 8+ years in, from a YC startup's first 100k users to design systems 100+ engineers rely on.",
    sameAs: [],
  };

  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <div className="h-screen w-full bg-gradient-to-tr from-white to-blue-300 text-center ">
        <NavBar />
        <section
          id="heroSection"
          className="flex h-2/3 flex-col items-center justify-center "
        >
          <Image
            priority
            src={myPic}
            alt="Gaurav Sobti pic"
            className="mb-4 h-[auto] w-[40%] rounded-full object-contain shadow-xl shadow-yellow-50 hover:scale-105 md:w-[25%] lg:w-[20%] xl:w-[15%] 2xl:w-[10%]"
            placeholder="blur"
          />
          <h1 className="text-xl leading-10 lg:text-5xl lg:leading-[4rem] xl:text-3xl">
            Hi, I&apos;m Gaurav Sobti. I build products that scale,
            <br /> from a YC startup&apos;s first 100k users to design
            systems 100+ engineers rely on.
          </h1>
          <p className="mt-3 max-w-xl px-4 text-sm text-slate-600 lg:text-base">
            Senior fullstack engineer, 8+ years in. Also a certified yoga
            instructor, because balance shouldn&apos;t only apply to load
            balancers.
          </p>
        </section>
        <HeroSectionSnowflake />
      </div>
      <section className="bg-slate-50 p-4 sm:p-8">
        <div className="mx-auto lg:container">
          <Experience />
          <Projects projects={projects} />
        </div>
      </section>
      <FloatingOlaf />
    </main>
  );
}
