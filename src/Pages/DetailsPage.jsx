import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { FakeDataContext } from '../Provider/FakeDataProvider';
import { FaBuildingColumns, FaLocationDot, FaSackDollar } from 'react-icons/fa6';
import { MdSell } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';

const DetailsPage = () => {
    const {id} = useParams();
    const {cardData} = useContext(FakeDataContext);
    
    const isExist = cardData.find(data => data?.id === id);
    


  return (
        
    
      <section className="max-w-[1440px] mx-auto w-11/12 lg:w-10/12 mb-20 mt-32">
        <div className=" mx-auto space-y-6 sm:space-y-12">
          <a href='#'
            className="block  gap-3 mx-auto sm:max-w-full group  lg:grid lg:grid-cols-12"
          >
            <img
              src={isExist?.img}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-[600px] lg:col-span-7 dark:bg-gray-500"
            />
            <div className=" pl-3 space-y-4 lg:col-span-5">
              <h3 className="text-2xl text-white mb-4 font-semibold sm:text-4xl">
               {isExist?.estate_title}
              </h3>
              <span className="text-md  text-gray-400">
               {isExist?.segment_name}
              </span>
              <p className='text-gray-300'>
               {isExist?.description}
              </p>
              <p className='flex gap-2 items-center '> <FaSackDollar />{isExist?.price}</p>
              <p className='flex gap-2 items-center'><FaBuildingColumns /> {isExist?.area}</p>
              <p className='flex gap-2 items-center'><MdSell /> {isExist?.status}</p>
              <p className='flex gap-2 items-center'><FaLocationDot /> {isExist?.location}</p>
              <div className='flex items-center text-xs md:text-base gap-2'>
              <FaCheckCircle />
              {
                isExist?.facilities?.map((facility , index) => <p key={index}>#{facility}</p>)
              }
              </div>
              
            </div>
          </a>
        </div>
      </section>
    
  );
};

export default DetailsPage;
