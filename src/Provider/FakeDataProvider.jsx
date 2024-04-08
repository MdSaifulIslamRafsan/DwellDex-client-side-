import { createContext, useEffect, useState } from "react";

export const FakeDataContext = createContext(null);
const FakeDataProvider = ({children}) => {

    const [sliderData , setSliderData] = useState([]);
    const [cardData , setCardData] = useState([]);
    useEffect(()=>{
        const loadSliderData = async () => {
            const res = await fetch('/FakeSliderData.json');
            const data = await res.json();
            setSliderData(data);
        };
        loadSliderData();
    },[])
    

    useEffect(()=>{
        const loadCardData = async () => {
            const res = await fetch('/FakeData.json');
            const data = await res.json();
            setCardData(data);
        };
        loadCardData();
    },[])




    return (
        <div>
            <FakeDataContext.Provider value={{sliderData , cardData}}>
                {children}
            </FakeDataContext.Provider>
        </div>
    );
};

export default FakeDataProvider;