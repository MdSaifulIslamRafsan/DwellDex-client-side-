import { useContext, useState } from "react";
// import { FakeDataContext } from "../Provider/FakeDataProvider";

const Slider = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  // const {data} = useContext(FakeDataContext);
  // console.log(data);

  const data = [
    {
      "img": "https://i.ibb.co/SNnKRGK/istockphoto-178559422-170667a.webp",
      "estate_title": "Cozy Cottage Retreat",
      "description": "Charming single-family home located in a quiet suburban neighborhood. Spacious living areas and a private backyard make it perfect for relaxation. Ideal for families seeking tranquility and comfort."
    },
    {
      "img": "https://i.ibb.co/Qng1nVt/photo-1619542402915-dcaf30e4e2a1.jpg",
      "estate_title": "Urban Townhouse Haven",
      "description": "Modern townhouse offering urban sophistication and convenience. Features sleek design elements and multiple levels, including a rooftop terrace. Ideal for those seeking a contemporary lifestyle in the heart of the city."
    },
    {
      "img": "https://i.ibb.co/G9hVkRy/istockphoto-1367813999-170667a.webp",
      "estate_title": "Cityscape Apartment Living",
      "description": "Luxurious apartment with panoramic city views and resort-style amenities. Spacious living areas with floor-to-ceiling windows provide plenty of natural light. Conveniently located in the bustling metropolitan area."
    },
    {
      "img": "https://i.ibb.co/S0pcCMH/photo-1624343385944-b99336163b50.jpg",
      "estate_title": "Campus Comfort Quarters",
      "description": "Student-friendly housing community offering comfort and convenience. Cozy and affordable accommodations near universities. Furnished rooms with shared kitchen, study lounge, and laundry facilities."
    },
    {
      "img": "https://i.ibb.co/Btzhrz9/istockphoto-1448774140-170667a.webp",
      "estate_title": "Serene Retirement Retreat",
      "description": "Tranquil senior living community offering comfort and companionship. Nestled in a serene natural setting with community center and walking trails. Provides a peaceful retreat for retirees seeking an active lifestyle."
    },
    {
      "img": "https://i.ibb.co/GdZbMkJ/istockphoto-861963462-170667a.webp",
      "estate_title": "Modern Multi-family Complex",
      "description": "Contemporary apartment building featuring modern design and upscale amenities. Offers spacious units with open-concept layouts and high-end finishes. Includes fitness center, parking garage, and community garden."
    }
  ];
  
  

  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? data.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === data.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      className="w-full h-72  sm:h-96 md:h-[540px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-50 overflow-hidden"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? data[data.length - 1].img
            : data[currentSlider - 1].img
        })`,
      }}
    >
      {/* arrow */}
      <div className="absolute bottom-[10%] right-1/3 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg">
        <h1 className="lg:text-4xl text-md font-bold md:text-2xl mb-3">{data[currentSlider].estate_title}</h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-sm">
          {data[currentSlider].description}
        </p>
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
            }px)`,
          }}
        >
          {/* data */}
          {data.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={slide.estate_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
