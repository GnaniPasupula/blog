import React from "react";
import Footer from "../../components/Footer/Footer";

export default {
  title: "Components/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const footer = Template.bind({});

footer.args = {
  FooterDescription: "Made by Gnani",
};
