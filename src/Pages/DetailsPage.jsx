import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { FakeDataContext } from '../Provider/FakeDataProvider';
import { FaBuildingColumns, FaLocationDot, FaSackDollar } from 'react-icons/fa6';

import { MdSell } from 'react-icons/md';
import { FaCheckCircle } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import { MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import "leaflet/dist/leaflet.css"

const DetailsPage = () => {
    const {id} = useParams();
    const {cardData} = useContext(FakeDataContext);
    
    const isExist = cardData.find(data => data?.id === id);

  
    const position = [ isExist?.location?.lat,  isExist?.location?.lng]
  return (
        
    
      <section className="max-w-[1440px] mx-auto w-11/12 lg:w-10/12 my-20 ">
         <Helmet>
        <title>DwellDex - Details - {id}</title>
        </Helmet>
        <div className=" mx-auto space-y-6 sm:space-y-12">
          <div
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
              <p className='flex gap-2 items-center'><FaLocationDot /> {isExist?.location?.name}</p>
              <div className='flex items-center text-xs md:text-base gap-2'>
              <FaCheckCircle />
              {
                isExist?.facilities?.map((facility , index) => <p key={index}>#{facility}</p>)
              }
              </div>
              
            </div>
          </div>
        </div>
        <div className='mt-20'>
        <div>
      <MapContainer className="h-[400px] rounded-lg" center={position} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      ,
    </div>
        </div>
      </section>
    
  );
};

export default DetailsPage;
