import Head from "next/head";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Sonal-Protfolio</title>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main className={styles.main}>
        <h2 className="display-5 text-center">Sonal Agrawal</h2>

        <marquee loop="" className={styles.description}>
          Passionate about changing the world with technology
        </marquee>
        <div className={styles.contactIcons}>
        <a className="link-dark" href="https://github.com/Sonalfeb2?tab=repositories" ><i className="fa fa-brands fa-github" /></a>
        <a className="link-dark" href="https://www.linkedin.com/in/sonalagrawal02/"><i className="fa fa-brands fa-linkedin" /></a>
        <a className="link-dark" href="https://www.facebook.com/sonal.agrawal.12139862/"><i className="fa fa-brands fa-facebook" /></a>
        <a className="link-dark" href="https://www.instagram.com/sonal_feb2/"><i className="fa fa-brands fa-instagram" /></a>
        </div>
      </main>
      {/* Added All the Component of the navbar below */}
      <AboutMe />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
