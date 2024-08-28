import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Service from "../components/Service";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonial from "../components/Testimonial";
import TopFeaturedBrands from "../components/TopFeaturedBrands";
import { useEffect } from "react";
import CallToAction from "../components/CallToAction";
import WhyChooseMech from "../components/WhyChooseMech";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Helmet>
        <title>MechKeyMart</title>
      </Helmet>
      <Hero />
      <Service />
      <FeaturedProducts />
      <TopFeaturedBrands />
      <CallToAction />
      <WhyChooseMech />
      <Testimonial />
    </div>
  );
};

export default Home;
