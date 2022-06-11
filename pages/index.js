import Head from "next/head";
import { createClient } from "contentful";
import Postcard from "../components/Postcard";

export default function Home(posts) {
  return (
    <div>
      {/* {console.log("All posts ", posts.posts)} */}
      <Head>
        <title>Blog App</title>
      </Head>
      <div>
        {posts.posts.map((post, index) => (
          <Postcard post={post} key={index}></Postcard>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.SPACE_ID,
    accessToken: process.env.ACCESS_TOKEN,
  });

  const entries = await client.getEntries({ content_type: "blog" });

  return {
    props: {
      posts: entries.items,
    },
  };
}
