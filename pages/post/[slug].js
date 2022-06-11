import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const Post = () => {
  const router = useRouter();

  const [slug, setslug] = useState("");

  React.useEffect(() => {
    if (router.isReady) {
      // Code using query
      console.log(router.query);
      setslug(router.query);
    }
  }, [router.isReady, router.query]);
  return (
    <div>
      <h2>Post id:{slug.slug}</h2>
    </div>
  );
};

export default Post;
