import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MechKeyMart</title>
      </Helmet>
      <Hero />
    </div>
  );
};

export default Home;
