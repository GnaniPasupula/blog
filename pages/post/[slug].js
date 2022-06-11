import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Post = ({ post }) => {
  const router = useRouter();
  console.log("Post ", post);
  const [slug, setslug] = useState("");

  React.useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
      setslug(router.query);
    }
  }, [router.isReady, router.query]);

  const { title, summary, content, thumbnail } = post.fields;

  return (
    <div className="blog-content">
      <button className="back-btn" onClick={() => router.back()}>
        Back
      </button>
      <article>
        {thumbnail ? (
          <Image
            src={"https:" + thumbnail.fields.file.url}
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            alt={thumbnail.fields.description}
          />
        ) : null}
        <header>
          <h1>{title}</h1>
          <p>{summary}</p>
        </header>
        <section className="article">
          {documentToReactComponents(content)}
        </section>
      </article>
    </div>
  );
};

export default Post;

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});

export async function getStaticPaths() {
  const entries = await client.getEntries({ content_type: "blog" });
  const paths = entries.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  console.log("Paths ", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const entries = await client.getEntries({
    content_type: "blog",
    "fields.slug": params.slug,
  });
  return {
    props: {
      post: entries.items[0],
    },
  };
}
