import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Heading from "../components/Heading";
import { IoIosJournal, FaLink } from "../components/Icons";

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
              title
              published_at(fromNow: true)
              positive_reactions_count
              description
              tags
              url
              social_image
            }
          }
        }
      }
    }
  `);

  return (
    <section id="blog">
      <Heading icon={IoIosJournal} title="Blog" />

      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {data.allDevArticles.edges.map(({ node }, index) => (
          <div
            key={node.id}
            className="wow fadeIn"
            style={{
              animationDelay: `${index * 200 + 200}ms`,
            }}
          >
            <a
              href={node.article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-48 relative flex-center cursor-pointer rounded-lg shadow-xl"
            >
              <FaLink className="absolute" color="#FFF" size="5rem" />
              <img
                className="absolute w-full h-48 object-cover rounded-lg hover:opacity-50 duration-200"
                src={node.article.social_image}
                alt={node.article.title}
              />
            </a>
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
    </section>
  );
};

export default Blog;
