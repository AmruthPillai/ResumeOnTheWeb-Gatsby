import React from "react";
import Heading from "../components/Heading";
import { MdMusicNote } from "../components/Icons";
import { graphql, useStaticQuery } from "gatsby";

const Music = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { id: { eq: "music" } }) {
        html
      }
    }
  `);

  return (
    <section id="music">
      <Heading icon={MdMusicNote} title="Music" />

      <div
        className="text-justify lg:col-span-4 wow fadeIn"
        dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
      />

      <iframe
        src="https://open.spotify.com/embed/playlist/58Kg5IirKtASXLYosizqnm"
        width="100%"
        height="500"
        frameBorder="0"
        className="mt-5"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </section>
  );
};

export default Music;
