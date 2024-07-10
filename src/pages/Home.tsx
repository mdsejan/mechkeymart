import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Service from "../components/Service";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MechKeyMart</title>
      </Helmet>
      <Hero />
      <Service />
    </div>
  );
};

export default Home;
