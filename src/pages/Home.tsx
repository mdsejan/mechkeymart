import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Service from "../components/Service";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MechKeyMart</title>
      </Helmet>
      <Hero />
      <Service />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
