import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import Lottie from "react-lottie";
import * as Welcome_animation from "../animations/67485-welcome-plants.json";
import "../pages/style.css";
import Jave_ex from "../docs/java_code.md";

function HomepageHeader() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Welcome_animation.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero", styles.heroBanner)}>
      <div className="container_home">
        <div className="left_side">
          <h1 className="hero__title">Маргааш гадаа бороотой байна</h1>
          {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
          <div className={styles.buttons} id="ehleh_button">
            <Link
              className="button button--primary button--lg"
              to="/docs/intro"
            >
              Эхлэх
            </Link>
          </div>
        </div>
        <div className="right_side">
          <Lottie
            options={defaultOptions}
            height={"95%"}
            width={"95%"}
          ></Lottie>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div id="main" className="container_home">
          <div className="left_main">
            <div className="text_container">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              auctor tellus ut nibh pharetra, eget pretium libero tristique.
              Suspendisse vitae luctus quam, vel blandit quam. Sed efficitur
              arcu a urna varius, vitae tincidunt sem facilisis. Cras volutpat
              diam sed sollicitudin euismod. Nam interdum euismod est eu
              scelerisque. Nunc quis finibus nisi. Etiam egestas, ipsum quis
              scelerisque aliquam, massa erat egestas odio, ac placerat velit
              massa sit amet odio. Maecenas venenatis arcu nisl, et consequat
              diam sagittis et. Ut eget nunc mattis, ultricies dui ullamcorper,
              efficitur nibh. Cras vel vehicula odio. Ut ut laoreet diam, in
              tempor nibh. Nam eleifend facilisis ligula. Praesent vitae odio eu
            </div>
          </div>
          <div className="right_main">
            <Jave_ex></Jave_ex>
          </div>
        </div>
        <div id="main" className="container_home"></div>
      </main>
    </Layout>
  );
}
