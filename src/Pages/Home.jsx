import { Helmet } from "react-helmet-async";
import PropertiesCard from "../Component/PropertiesCard";
import Slider from "../Component/Slider";
import CompanyLogo from "../Component/CompanyLogo";
import Review from "../Component/Review";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DwellDex - Home</title>
      </Helmet>
      <Slider></Slider>
      <PropertiesCard></PropertiesCard>
      <CompanyLogo></CompanyLogo>
      <Review></Review>
    </div>
  );
};

export default Home;
