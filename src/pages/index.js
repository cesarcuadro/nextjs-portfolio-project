import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import project from "public/project.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-8/9 bg-highlight m-10 flex flex-col justify-between rounded-xl border-2 border-purple-700 p-20 shadow-xl">
        <div>
          <h1 className="text-4xl">Welcome to Cesar's Portfolio</h1>
          <p className="pt-10">
            Experienced full stack web developer with strong problem-solving and
            communication skills, skilled in troubleshooting from previous role
            as a ground radio maintainer in the Marine Corps Reserves.
          </p>
        </div>

        <div className="w-500 relative m-10 flex flex-col rounded-lg border-2 border-purple-700 pb-3 font-serif shadow-xl">
          <Link
            href="https://github.com/cesarcuadro/Apartment-App"
            className="text-center"
          >
            My Favorite Projects:
            <Image src={project} alt="preview of project" />
          </Link>
        </div>
      </main>
    </>
  );
}
