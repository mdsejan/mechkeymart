import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Service from "../components/Service";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MechKeyMart</title>
      </Helmet>
      <Hero />
      <Service />
      <FeaturedProducts />
      <Testimonial />
    </div>
  );
};

export default Home;
