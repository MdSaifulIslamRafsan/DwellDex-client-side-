import { createContext, useEffect, useState } from "react";

export const FakeDataContext = createContext(null);
const FakeDataProvider = ({children}) => {

    const [data , setData] = useState([]);

    useEffect(()=>{
        const loadFakeData = async () => {
            const res = await fetch('/FakeData.json');
            const data = await res.json();
            setData(data);
        };
        loadFakeData();
    },[])




    return (
        <div>
            <FakeDataContext.Provider value={{data}}>
                {children}
            </FakeDataContext.Provider>
        </div>
    );
};

export default FakeDataProvider;