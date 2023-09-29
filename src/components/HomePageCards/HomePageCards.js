import "./HomePageCards.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";


const HomePageCards = () => {
  // let inputData = require("../../assets/inputData/home_page_data.json");
  // let inputData = null;
  
  // const [inputData, setInputData] = useState({
  //   HomePageOmgDeals: [
  //       {
  //       id: "1",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/6a845d9e-6155-4fc7-b670-9059773981931673520272538-image_jpeg_1470430614--1-.jpg",
  //     },
  //     {
  //       id: "2",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/12/73be32ba-7db4-46a8-8cbd-ee11c356de701673520291749-image_jpeg_360595955.jpg",
  //     },
  //   ],
  //   HomePageGrandBrands: [
  //     {
  //       id: "H1",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/c729d245-ddfd-4a87-8f78-e301a4f55a481672925100870-Louis_Philippe_1.jpg",
  //     },
  //     {
  //       id: "H2",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/5/61659bc8-ba41-4613-90ab-d565caef8a841672925101203-U.S._Polo_Assn..jpg",
  //     },
  //   ],
  //   HomePageBrandsToBag: [
  //     {
  //       id: "H1",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/509ea804-3830-48cb-8906-e20d52e5cafb1672983242648-Kurtas.jpg",
  //     },
  //     {
  //       id: "H2",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_108,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/cfc68fe6-ef6f-4140-b2ea-15e742613aa61672983242628-Kurta-Sets.jpg",
  //     },
  //   ],
  //   HomePageBudgetToBuys: [
  //     {
  //       id: "H1",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/4bb149a9-8496-4e5c-b91a-20545debd71a1672990786584-T-Shirts.jpg",
  //     },
  //     {
  //       id: "H2",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/6/76fb0dc3-3006-4f1c-821b-843f147520e11672990786524-Shirts.jpg",
  //     },
  //   ],
  //   HomePageShopByCategory: [
  //     {
  //       id: "H1",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/e988c7f2-ba2c-4689-9b16-4562fb2334b81673167109254-HP_Shop-By-Category_02.jpg",
  //     },
  //     {
  //       id: "H2",
  //       image:
  //         "https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2023/1/8/1a02b270-6967-4d29-9f45-15f72aebc66e1673167109264-HP_Shop-By-Category_03.jpg",
  //     },
  //   ],
  // });
  const [inputData, setInputData] = useState(null);

  useEffect (() => {
    const callApi = async () => {
      const data2 = await fetch ("https://classic-world.onrender.com/HomePageData");
      const data3 = await data2.json();
      // console.log(data3);
      setInputData(data3);
    }
    callApi();
  },[]);


  return !inputData? (<Loader/>) : (
    <div>
      <h3 className="homePageCard-heading">Omg Deals</h3>
      <div className="HomePageCard-imgContainer">
        {inputData.HomePageOmgDeals.map((e, index) => (
          <Link to={"/Catalog/men"}>
          <img key={index} src={e.image} />
          </Link>
        ))}
      </div>
      <h3 className="homePageCard-heading">Grand Brands</h3>
      <div className="HomePageCard-imgContainer">
        {inputData.HomePageGrandBrands.map((e, index) => (
          <Link to={"/Catalog/men"}>
          <img key={index} src={e.image} />
          </Link>
        ))}
      </div>
      <h3 className="homePageCard-heading">Brands to Bag</h3>
      <div className="HomePageCard-imgContainer">
        {inputData.HomePageBrandsToBag.map((e, index) => (
          <Link to={"/Catalog/women"}>
          <img key={index} src={e.image} />
          </Link>
        ))}
      </div>
      <h3 className="homePageCard-heading">Budget to Buys</h3>
      <div className="HomePageCard-imgContainer">
        {inputData.HomePageBudgetToBuys.map((e, index) => (
          <Link to={"/Catalog/men"}>
          <img key={index} src={e.image} />
          </Link>
        ))}
      </div>
      <h3 className="homePageCard-heading">Shop By Category</h3>
      <div className="HomePageCard-imgContainer">
        {inputData.HomePageShopByCategory.map((e, index) => (
          <Link to={"/Catalog/women"}>
          <img key={index} src={e.image} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePageCards;
