import { graphql, useStaticQuery } from "gatsby";
import GatsbyImage from "gatsby-image";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import React from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { FaDev, FaLink, IoIosJournal } from "../components/Icons";

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allDevArticles(
        sort: { fields: [article___published_at], order: DESC }
        limit: 6
      ) {
        edges {
          node {
            id
            article {
              url
              tags
              title
              description
              published_at(fromNow: true)
              positive_reactions_count
            }
            featuredImg {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <section id="blog">
      <Heading icon={IoIosJournal} title="Blog" />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-10">
        {data.allDevArticles.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="wow fadeIn"
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
          >
            <OutboundLink
              href={node.article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 bg-black relative flex-center cursor-pointer rounded-lg shadow-lg"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <GatsbyImage
                className="absolute w-full h-full object-cover rounded-lg hover:opacity-50 duration-200"
                {...node.featuredImg.childImageSharp}
              />
              <span className="sr-only">{node.article.title}</span>
            </OutboundLink>
            <h5 className="mt-4 w-5/6 truncate font-semibold">
              {node.article.title}
            </h5>
            <h6 className="text-xs">
              {node.article.published_at} /{" "}
              {node.article.positive_reactions_count} reactions
            </h6>
            <p className="mt-4 text-sm">{node.article.description}</p>

            <p className="pb-0 flex text-xs font-semibold">
              {node.article.tags.map(x => (
                <span key={x} className="mr-2">
                  #{x}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>

      <Button
        className="mt-12"
        icon={FaDev}
        title="Articles on DEV.to"
        onClick={() => window.open("https://pillai.xyz/dev", "_blank")}
      />
    </section>
  );
};

export default Blog;
