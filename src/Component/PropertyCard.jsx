import { FaBuilding, FaLocationArrow } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const PropertyCard = ({ data }) => {
 
  const {id, status, img, description, estate_title, location , area } = data;

  return (
    <div className="p-4 shadow-2xl border rounded-xl">
      
      <div className="flex  justify-between pb-4 border-bottom">
        <div className="flex w-full justify-between">
          <a rel="noopener noreferrer" href="#" className="mb-0 capitalize ">
            {status}
          </a>
          <p className="flex text-xs lg:text-base gap-2 items-center"><FaBuilding ></FaBuilding> {area}</p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={img}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
        </div>
        <div className="space-y-3">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold">{estate_title}</h3>
          </a>
          <p className="leading-snug text-gray-500">
            {description.length > 100 ? (
              <span>
                {description.slice(0, 100)}{" "}
                <Link to={`/details/${id}`} className="btn-link text-sm">
                  Read More
                </Link>
              </span>
            ) : (
              { description }
            )}
          </p>
          <p className="flex items-center gap-2">
            <FaLocationArrow></FaLocationArrow> {location?.name}
          </p>
          <Link to={`/details/${id}`}
            className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-[#0095ff] w-full rounded-2xl shadow-md group"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#0095ff] group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            View Property
            </span>
            <span className="relative invisible">View Property</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
PropertyCard.propTypes = {
  data: PropTypes.object,
}
export default PropertyCard;
