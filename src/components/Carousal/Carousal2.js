import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousal2.css";

const Carousal2 = () => {
  return (
    <div className="carousal-container">
      <Carousel
        interval={3000}
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
      >
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/4/3/3648caef-8de2-46ec-a437-8fbf72e6574c1680507456408-Sale-ends-tomorrow--1-.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2023/2/14/7cec9b95-a683-473c-aca8-cc510821b1cd1676394720493-Desktop-Banner.gif" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/84b6a214-9eb3-49eb-9f9d-72cec56ec5d71659019908592-Indian-Wear_DK--1-.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/6107d28b-2bcb-44e6-9743-655b54550b8f1659020199598-Workwear_Desk--1-.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg" alt="carousal images"/>
        </div>
        <div className="carousal-images">
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" alt="carousal images"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal2;
