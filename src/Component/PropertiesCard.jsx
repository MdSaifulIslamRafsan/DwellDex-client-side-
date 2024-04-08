import { useContext } from "react";
import { FakeDataContext } from "../Provider/FakeDataProvider";
import PropertyCard from "./PropertyCard";


const PropertiesCard = () => {
        const {cardData} = useContext(FakeDataContext);
     


    return (
       <section className="max-w-[1440px] lg:w-11/12 w-10/12 mx-auto">
         <div className="py-20 space-y-4">
            <h2 className="text-3xl text-center font-bold">Featured Properties</h2>
            <p className="lg:w-2/3 text-center mx-auto">Discover our curated selection of featured properties, showcasing the finest homes and apartments available. Find your perfect living space among our handpicked collection.</p>
        </div>
        <section className="grid mb-20 lg:grid-cols-3 gap-5">
            {
                cardData?.map(data => <PropertyCard data={data} key={data?.id}></PropertyCard>)
            }
        </section>

       </section>
    );
};

export default PropertiesCard;