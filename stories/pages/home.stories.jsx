import Home from "../../pages/index";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/NavBar/NavBar";

export default {
  title: "Pages/Home",
  component: Home,
};

const Template = (args) => {
  return (
    <div>
      <NavBar {...args} />
      <div className="content">{}</div>
      <Footer {...args} />
    </div>
  );
};

export const home = Template.bind({});

home.args = {
  TopbarTitle: "Blog",
  FooterDescription: "Made by Gnani",
};
