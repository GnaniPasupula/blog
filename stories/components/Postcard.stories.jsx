import React from "react";
import PostCard from "../../components/Postcard";
import Image from "next/image";
import Link from "next/link";

export default {
  title: "Components/PostCard",
  component: PostCard,
};

const Template = (args) => {
  return (
    <div className="post-card">
      <Link href={`post/chainsaw-man`}>
        <div className="details">
          <div className="info">
            <h2>{args.Title}</h2>
            <p>{args.Description}</p>
            <p className="date"> {args.Time}</p>
          </div>
          <div className="thumbnail">
            <Image
              src="/images/thumbnail.jpg"
              width="200px"
              height="200px"
              alt=""
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export const postcard = Template.bind({});

postcard.args = {
  Title: "ADmyBRAND",
  Summary: "ADmyBRAND is world's largest end to end marketing platform.",
  Description:
    "ADmyBRAND is the tech-age solution for omnichannel advertising. It is analytics-driven ad-exchange for advertisement on outdoor media, influencer, mobile, radio, TV and newspaper. We are innovative programmatic advertising and big data analytics solution which would disrupt the traditional media advertisement placement industry.",
  Time: "10 hours ago",
};
