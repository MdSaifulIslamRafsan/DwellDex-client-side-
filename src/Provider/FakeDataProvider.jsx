import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
export const FakeDataContext = createContext(null);
const FakeDataProvider = ({children}) => {

    const [sliderData , setSliderData] = useState([]);
    const [cardData , setCardData] = useState([]);
    const [reviewData , setReviewData] = useState([]);
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
    useEffect(()=>{
        const loadReviewData = async () => {
            const res = await fetch('/FakeReviewData.json');
            const data = await res.json();
            setReviewData(data);
        };
        loadReviewData();
    },[])
    



    return (
        <div>
            <FakeDataContext.Provider value={{sliderData , cardData , reviewData}}>
                {children}
            </FakeDataContext.Provider>
        </div>
    );
};
FakeDataProvider.propTypes = {
    children: PropTypes.object,
  }
export default FakeDataProvider;