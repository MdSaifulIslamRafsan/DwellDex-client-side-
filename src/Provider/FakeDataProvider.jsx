import { createContext, useEffect, useState } from "react";

export const FakeDataContext = createContext(null);
const FakeDataProvider = ({children}) => {

    const [sliderData , setSliderData] = useState([]);

    useEffect(()=>{
        const loadFakeData = async () => {
            const res = await fetch('/FakeSliderData.json');
            const data = await res.json();
            setSliderData(data);
        };
        loadFakeData();
    },[])




    return (
        <div>
            <FakeDataContext.Provider value={{sliderData}}>
                {children}
            </FakeDataContext.Provider>
        </div>
    );
};

export default FakeDataProvider;