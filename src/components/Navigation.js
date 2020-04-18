import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import React from "react";
import { scroller, animateScroll as scroll } from "react-scroll";
import sections from "../data/sections";
import { FaInfoCircle, MdMenu } from "./Icons";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fixed(width: 32, height: 32) {
            ...GatsbyImageSharpFixed_withWebp_noBase64
          }
        }
      }
    }
  `);

  const scrollToTop = () =>
    scroll.scrollToTop({
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const scrollTo = id =>
    scroller.scrollTo(id, {
      delay: 50,
      duration: 600,
      smooth: "easeInOutCubic",
    });

  const SectionLink = x => (
    <div
      key={x.id}
      data-tip={x.title}
      data-place="right"
      onClick={() => scrollTo(x.id)}
    >
      {x.icon()}
    </div>
  );

  return (
    <div className={`${styles.container} animated fadeInLeft`}>
      <div
        className="cursor-pointer"
        onClick={scrollToTop}
        data-tip="Go to Top"
        data-place="right"
      >
        <GatsbyImage {...data.icon.childImageSharp} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className={styles.menu}>
          <MdMenu />
        </div>
        <div className={styles.sectionLinks}>{sections.map(SectionLink)}</div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <FaInfoCircle />
      </div>
    </div>
  );
};

export default Navigation;
