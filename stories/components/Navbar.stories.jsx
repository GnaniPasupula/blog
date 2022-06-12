import React from "react";
import NavBar from "../../components/NavBar/NavBar";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const navBar = Template.bind({});

navBar.args = {
  TopbarTitle: "Blog",
};
