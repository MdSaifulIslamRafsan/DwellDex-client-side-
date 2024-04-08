import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-4 border-t-2 border-gray-700 divide-y  ">
      <div className="max-w-[1440px] w-10/12 mx-auto">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="lg:w-1/3"
          >
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex justify-center space-x-3 lg:justify-start"
            >
              <span className="self-center text-2xl font-semibold ">
                DwellDex
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="space-y-3"
            >
              <h3 className="tracking-wide uppercase  font-bold">service</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Home Buying Assistance
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Property Management
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Rental Services
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Investment Properties
                  </a>
                </li>
              </ul>
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              className="space-y-3"
            >
              <h3 className="tracking-wide uppercase font-bold">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in"
              className="space-y-3 "
            >
              <h1 className="uppercase font-bold ">Social media</h1>
              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <FaFacebook className="text-2xl"></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Twitter"
                  className="flex items-center p-1"
                >
                  <FaGithub className="text-2xl"></FaGithub>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <FaInstagram className="text-2xl"></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center ">
          © 1968 DwellDex. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
