import Marquee from "react-fast-marquee";

const CompanyLogo = () => {
  return (
    <div className="max-w-[1440px] w-10/12 lg:w-11/12  mx-auto bg-blue-100 mt-20">
      <Marquee pauseOnHover="true" speed="50">
        <img className="mr-10 py-4" src="https://i.ibb.co/Dr3hbc1/brand-5-145x35.png" alt="" />
        <img className="mr-10 py-4" src="https://i.ibb.co/3TjsPkV/brand-4-133x77.png" alt="" />
        <img className="mr-10 py-4" src="https://i.ibb.co/KVrpfWZ/brand-2-118x82.png" alt="" />
        <img className="mr-10 py-4" src="https://i.ibb.co/Bny9MQH/brand-1-183x44.png" alt="" />
        <img className="mr-10 py-4" src="https://i.ibb.co/4Ycht9q/brand-3-137x39.png" alt="" />
        <img className="mr-6 py-4" src="https://i.ibb.co/9N76MDv/3-arzeo-logo-2-black.png" alt="" />
        <img className="mr-6 py-4" src="https://i.ibb.co/cy4vMD4/5-the-quebec-logo-2-W6-MS4-M.png" alt="" />
        <img className="mr-6 py-4" src="https://i.ibb.co/0cr0S7J/2-nikicivi-1-logo.png" alt="" />
      </Marquee>
    </div>
  );
};

export default CompanyLogo;
