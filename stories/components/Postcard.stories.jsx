import React from "react";
import PostCard from "../../components/Postcard";

export default {
  title: "Components/PostCard",
  component: PostCard,
};

const Template = (args) => <PostCard />;

export const postcard = Template.bind({});

postcard.args = {
  label: "Blog",
};
