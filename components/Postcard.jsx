import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

function Postcard({ post }) {
  const { title, slug, summary, thumbnail } = post.fields;
  // console.log(post);
  return (
    <div className="post-card">
      <Link href={`post/${slug}`}>
        <div className="details">
          <div className="info">
            <h2>{title}</h2>
            <p>{summary}</p>
            <p className="date"> {moment(post.sys.createdAt).fromNow()}</p>
          </div>
          <div className="thumbnail">
            {thumbnail ? (
              <Image
                src={"https:" + thumbnail.fields.file.url}
                layout="responsive"
                objectFit="contain"
                width="100%"
                height="100%"
                alt=""
              />
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Postcard;
