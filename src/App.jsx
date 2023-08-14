import styles from "./App.module.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import gmail from "./assets/gmail.svg";
import insta from "./assets/insta.svg";
import github from "./assets/github.svg";
import linkedin from "./assets/linkedin.svg";
import NusMap from "./NusMap";
import { useLayoutEffect } from "react";
import { createMainTl, createAboutTl, createProjectsTl, createContactTl } from "./animations";


gsap.registerPlugin(ScrollTrigger)

export default function App() {

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      createMainTl();
      createAboutTl();
      createProjectsTl();
      createContactTl();

    });

    return () => ctx.revert(); 
  }, [])

  return (
    <>
      <div className={styles.main}>
        <div className={styles.inner1}>
          <div className={styles.heading}>
            <h1>Hi there!</h1>
          </div>
          <Player
            autoplay
            loop
            src="./plant.json"
            className={styles.player}
          ></Player>
          <div className={styles.subtext}>
            <p style={{ fontSize: "32px" }}>
              I'm <span className="accent">Michael</span>.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.intro}>
          <h1>I study Computer Science at the <span style={{color: "#003891"}}>National University of Singapore.</span></h1>
        </div>
        <div className={styles.nusMap}>
          <NusMap />
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.projectDesc}>
          <h1>
            <span>Here's a project that I'm working on: </span>
            <span className="accent">Manex</span>
          </h1>
          <div className={styles.manexIcon}>
            <a href="https://apps.apple.com/us/app/clash-of-clans/id529479190" target="_blank" id="manex_icon">
              <img src="./manex_icon.png" alt="" height="48px"/>
            </a>
            <a href="https://apps.apple.com/us/app/clash-of-clans/id529479190" target="_blank" id="appstore_icon">
              <img src="./app_store.png" alt="" height="48px"/>
            </a>
          </div>
        </div>
        <div className={styles.projectImg}>
          <img src="./phone-left.png" alt="" id="iphone_left"/>
          <img src="./phone-right.png" alt="" id="iphone_right"/>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.ctcHeader}>
          <h1>Get in touch !</h1>
        </div>
        <div className={styles.socials}>
          <ul>
            <li>
              <a href="mailto:yql.michael@gmail.com" target="_blank">
                <img src={gmail} alt="" style={{width: "48px"}}/>
                <span>yql.michael@gmail.com</span>
              </a>
            </li>  
            <li>
              <a href="https://github.com/michaelyql" target="_blank">
                <span className={styles.before}>github.com/michaelyql</span>
                <img src={github} alt="" style={{width: "48px"}}/>
                <span className={styles.after}>github.com/michaelyql</span>
              </a>
            </li> 
          </ul>
          <ul>
            <li>
              <a href="https://instagram.com/yql02/" target="_blank">
                <img src={insta} alt="" style={{width: "48px"}}/>
                <span>instagram.com/yql02/</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/michael-yang-68b670204/" target="_blank">
                <span className={styles.before}>linkedin.com/in/michael-yang-68b670204/</span>
                <img src={linkedin} alt="" style={{width: "48px"}}/>
                <span className={styles.after}>linkedin.com/in/michael-yang-68b670204/</span>
              </a>
            </li>
          </ul>
        </div>
        <footer className={styles.footer}>
          <p>
            Designed in 
            <span style={{color: "#ff6459"}}> Figma</span>. 
            Icons from <span style={{color: "#8a8aff"}}>Icons8</span>. 
            Animations done with <span style={{color: "#2ec92c"}}>GSAP</span>.
          </p>
        </footer>
      </div>
    </>
  );
}
