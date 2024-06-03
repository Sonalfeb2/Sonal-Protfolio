
import styles from "../styles/Home.module.css";
import { Button } from "react-bootstrap";
const MainSection = () => {
  const icons = [
    {
      link: "https://github.com/Sonalfeb2?tab=repositories",
      style: "fa fa-brands fa-github"
    },
    {
      link: "https://www.linkedin.com/in/sonalagrawal02/",
      style: "fa fa-brands fa-linkedin"
    },
    {
      link: "https://www.facebook.com/sonal.agrawal.12139862/",
      style: "fa fa-brands fa-facebook"
    },
    {
      link: "https://www.instagram.com/sonal_feb2/",
      style: "fa fa-brands fa-instagram"
    }
  ];
  return (
    <main className={`${styles.main}  bgstyle text-light py-5`}>
      <h1 className="display-1">Sonal Agrawal</h1>

      <marquee loop="" className={styles.description}>
        <p className="lead typist">
          Passionate about changing the world with technology
        </p>
      </marquee>
      <div className={styles.contactIcons}>
        {icons.map((contact, index) =>
          <a key={index} className="link-light" href={contact.link}>
            <i className={contact.style} />
          </a>
        )}
      </div>
      <Button variant="outline-light" href="#aboutme"size="lg">More About Me</Button>
    </main>
  );
};
export default MainSection;
