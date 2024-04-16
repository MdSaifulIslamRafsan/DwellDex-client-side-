import { Helmet } from "react-helmet-async";
import PropertiesCard from "../Component/PropertiesCard";
import Slider from "../Component/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DwellDex - Home</title>
      </Helmet>
      <Slider></Slider>
      
      <PropertiesCard></PropertiesCard>
    </div>
  );
};

export default Home;
