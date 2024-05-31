import Head from "next/head";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Projects from "../components/projects";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sonal-Protfolio</title>
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Sonal Agrawal</h1>

        <marquee loop="" className={styles.description}>
          Passionate about changing the world with technology
        </marquee>
        <div className={styles.contactIcons}>
          <i className="fa fa-brands fa-github fa-2xl" />
          <i className="fa fa-brands fa-linkedin" />
          <i className="fa fa-brands fa-facebook" />
          <i className="fa fa-brands fa-instagram" />
        </div>
      </main>
      <AboutMe />
      <Projects />
      <hr />
    </div>
  );
}
