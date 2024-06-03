import Head from "next/head";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import MainSection from "@/components/MainSection";
import LeaderShip from "../components/Leadership";
export default function Home() {
  
  return (
    <div id="home">
      <Head>
        <title>Sonal Agrawal</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <MainSection/>
      <AboutMe />
      <Experience />
      <Projects />
      <LeaderShip />
      <Skills />
    </div>
  );
}
