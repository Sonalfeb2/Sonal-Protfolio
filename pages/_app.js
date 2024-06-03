import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function MyApp({ Component, pageProps }) {
  
  const [stars, setStars] = useState([]);
  useEffect(() => {
    const numStars = 50;
    const newStars = [];

    for (let i = 0; i < numStars; i++) {
      const star = {
        id: i,
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 10 + 10}s`,
        animationDelay: `${Math.random() * 10}s`,
      };
      newStars.push(star);
    }

    setStars(newStars);
  }, []);

  return (
    <div>
     <div className="starsContainer">
        <div className="styles.stars">
          {stars.map((star) => (
            <div
              key={star.id}
              className="star"
              style={{
                left: star.left,
                animationDuration: star.animationDuration,
                animationDelay: star.animationDelay,
              }}
            ></div>
          ))}
        </div>
      </div>
      <Layout style={{height:"200vh" ,padding:'20px'}}>
        <Component {...pageProps} />
      </Layout>
    
    </div>
  );
}

export default MyApp;
