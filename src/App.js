import React, { useState } from "react";
import "./App.css";
import AppRouter from "./AppRouter";
import MyContext from "./context/MyContext";
import ApiContextProvider from "./context/ApiContextProvider";


const App = () => {
  const [cartState, setCartState] = useState([
    // {
    //   id: "M1",
    //   category: "Mens",
    //   brand: "HRX Hrithik Roshan",
    //   title: "Men Rapid Dry Running Joggers",
    //   discounted_price: 600,
    //   strike_price: 1500,
    //   discount: "(65% OFF)",
    //   images: [
    //     "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    //   ],
    //   size: ["XS", "S", "M", "L", "XL", "XXL"],
    //   rating: 3.7,
    //   rating_count: 13.8,
    //   quantity: 1,
    //   selected_size: "XS",
    // },
    // {
    //   id: "M2",
    //   category: "Mens",
    //   brand: "Roadster",
    //   title: "Printed Casual Shirt",
    //   discounted_price: 500,
    //   strike_price: 1000,
    //   discount: "(60% OFF)",
    //   images: [
    //     "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //     "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
    //   ],
    //   size: ["S", "M", "L", "XL", "XXL", "3XL", "XXXL"],
    //   rating: 4.1,
    //   rating_count: 25.9,
    //   quantity: 1,
    //   selected_size: "S",
    // },
  ]);

  const addToCart = (product) => {
    setCartState([...cartState, product]);
  };

  const [isLoggedin, setIsloggedin] = useState(false);

  const updateLoginStatus = (status) => {
    setIsloggedin(status);
  };

  return (
    <ApiContextProvider>
      <MyContext.Provider value={{ cartState, addToCart, isLoggedin, updateLoginStatus }}>
        <AppRouter />
      </MyContext.Provider>
    </ApiContextProvider>
  );
};

export default App;