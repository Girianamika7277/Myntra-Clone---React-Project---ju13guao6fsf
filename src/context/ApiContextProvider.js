import React, { useState, useEffect, createContext } from "react";

export const ApiContext = createContext();

const ApiContextProvider = ({ children }) => {
  // API source:  https://classic-world.onrender.com/
  const HOMEPAGE_API_URL = "https://classic-world.onrender.com/HomePageData";
  const MENS_API_URL = "https://classic-world.onrender.com/MensData";
  const WOMENS_API_URL = "https://classic-world.onrender.com/WomensData";
  const CHILDRENS_API_URL = "https://classic-world.onrender.com/ChildrensData";

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [api1, api2, api3, api4] = await Promise.all([
          fetch(HOMEPAGE_API_URL),
          fetch(MENS_API_URL),
          fetch(WOMENS_API_URL),
          fetch(CHILDRENS_API_URL),
        ]);
        const [data1, data2, data3, data4] = await Promise.all([
          api1.json(),
          api2.json(),
          api3.json(),
          api4.json(),
        ]);
        setApiData([data1, data2, data3, data4]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ApiContext.Provider value={{ apiData }}>{children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
