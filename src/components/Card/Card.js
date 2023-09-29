import "./Card.css";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = (props) => {
  let productDetails = {
    id: "M1",
    category: "Mens",
    brand: "HRX Hrithik Roshan",
    title: "Men Rapid Dry Running Joggers",
    discounted_price: 664,
    strike_price: 1899,
    discount: "(65% OFF)",
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/7610386/2022/4/19/c6fe5c9f-9a2b-46c9-90cc-6479f7d8ea581650366004453HRXbyHrithikRoshanMenBlackSolidRapidDryRunningJoggers2.jpg",
    ],
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 3.7,
    rating_count: 13.8,
  };

  productDetails = (props.data === undefined) ? productDetails : props.data;

  return (
    <li className="product-base">
      <div className="product-ratingsContainer">
        <span>{productDetails.rating} ⭐</span>
        <div className="product-ratingsCount">
          <div className="product-separator"> </div>|{" "}
          {productDetails.rating_count}k
        </div>
      </div>
      <div className="card-wishlistIcon">
        <AiOutlineHeart />
      </div>
      <Link
        to={`/product/${productDetails.id}`}
        // data-refreshpage="true"
        // target="_blank"
        // href="/product"
        className="card-link"
      >
        <div className="product-imageSliderContainer">
          <div className="product-sliderContainer">
            <div className="card-imgContainer">
              <div>
                <img
                  draggable="false"
                  src={productDetails.images[0]}
                  className="img-responsive"
                  alt="product"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="product-productMetaInfo">
          <h3 className="product-brand">{productDetails.brand}</h3>
          <h4 className="product-product">{productDetails.title}</h4>
          <div className="product-price">
            <span>
              <span className="product-discountedPrice">
                Rs. {productDetails.discounted_price}
              </span>
              <span className="product-strike">
                Rs. {productDetails.strike_price}
              </span>
            </span>
            <span className="product-discountPercentage">
              {productDetails.discount}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Card;
