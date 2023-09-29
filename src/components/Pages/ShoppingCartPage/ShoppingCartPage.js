import "./ShoppingCartPage.css";
import NavBar from "../../NavBar/NavBar";
import { useContext, useState } from "react";
import MyContext from "../../../context/MyContext";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../../assets/images/Myntra_Logo_nobg.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShoppingCartPage = () => {
  const myContextData = useContext(MyContext);

  let dummyData = [
    {
      id: "M1",
      category: "Mens",
      brand: "HRX Hrithik Roshan",
      title: "Men Rapid Dry Running Joggers",
      discounted_price: 600,
      strike_price: 1500,
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
      quantity: 1,
      selected_size: "S",
    },
    {
      id: "M2",
      category: "Mens",
      brand: "Roadster",
      title: "Printed Casual Shirt",
      discounted_price: 500,
      strike_price: 1000,
      discount: "(60% OFF)",
      images: [
        "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_1.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.2,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.4,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.6,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
        "https://assets.myntassets.com/f_webp,dpr_2.8,q_60,w_210,c_limit,fl_progressive/assets/images/1364628/2016/8/31/11472636737718-Roadster-Men-Blue-Regular-Fit-Printed-Casual-Shirt-6121472636737160-1.jpg",
      ],
      size: ["S", "M", "L", "XL", "XXL", "3XL", "XXXL"],
      rating: 4.1,
      rating_count: 25.9,
      quantity: 2,
      selected_size: "M",
    },
  ];
  const [cartData, setCartData] = useState(myContextData.cartState);
  console.log(cartData);
  // data initialisation - end

  // the billing section - start
  function calculateSum(array, property) {
    const total = array.reduce((accumulator, object) => {
      return accumulator + object[property] * object.quantity;
    }, 0);
    return total;
  }

  let convenienceFee = 0;
  let totalAmount = calculateSum(cartData, "discounted_price");
  let totalMRP = calculateSum(cartData, "strike_price") + convenienceFee;
  let discountonMrp = totalMRP - totalAmount;
  // the billing section - end

  // events - start
  //  updating quantity

  const handleIncrement = (id) => {
    const newCartData = cartData.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartData(newCartData);
  };

  const handleDecrement = (id) => {
    const newCartData = cartData.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          return { ...item, quantity: item.quantity };
        }

        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartData(newCartData);
  };

  // deleting
  const handleDelete = (id) => {
    const newCartData = cartData.filter((item) => item.id !== id);
    setCartData(newCartData);
  };
  // events - end

//place order handler
const { isLoggedin, updateLoginStatus } = useContext(MyContext);
// console.log(isLoggedin);
const navigate = useNavigate();
const placeOrderHandler = () => {

  if(isLoggedin) {
    // alert("Congratulations! Your order has been placed.");
    toast.success('Congratulations! Your order has been placed.', {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  }
  else {
    toast.warn('Please login to place an order. Redirecting to login page...', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(()=>{
        navigate("/login");
      },2000);
  }
  // alert("Please login to place an order");
}

  return (
    <div id="ShoppingCartPage">
      <NavBar />
      <div id="ShoppingCartPage-nav">
        <div className="ShoppingCartPage-logoHolder">
          <Link to={"/"}>
            <img className="ShoppingCartPage-logo" src={logo} alt="myntra logo" />
          </Link>
        </div>
        <div id="ShoppingCartPage-navMid">
          <span>
            <span className="ShoppingCartPage-navHighlight">BAG</span>{" "}
            ---------- ADDRESS ---------- PAYMENT
          </span>
        </div>
        <div id="ShoppingCartPage-navEnd">
          <div className="ShoppingCartPage-secureContainer">
            <img src="https://constant.myntassets.com/checkout/assets/img/sprite-secure.png" />
            <div>100% SECURE</div>
          </div>
        </div>
      </div>

      {/* body content */}
      <div className="ShoppingCartPage-container">
        <div className="ShoppingCartPage-main">
          <div className="ShoppingCartPage-itemListSection">
            <table>
              <thead>
              <tr>
                <th>Image</th>
                <th colSpan={1}>Description</th>
                <th>Size</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
              </thead>
              <tbody>
              {
              cartData.map((item) => (
                <tr key={item.id}>
                  <td colSpan={1}>
                    <img
                      className="ShoppingCartPage-tableImg"
                      src={item.images[0]}
                      alt="cart image"
                    />
                  </td>
                  <td colSpan={1} className="ShoppingCartPage-tableDesc">
                    <h3>{item.title}</h3>
                    <h4>{item.brand}</h4>
                  </td>
                  <td colSpan={1}>
                    <div className="ShoppingCartPage-addBox">
                      {item.selected_size}
                    </div>
                  </td>
                  <td>
                    <div>
                      <span
                        className="ShoppingCartPage-addBox2"
                        onClick={() => handleDecrement(item.id)}
                      >
                        -
                      </span>
                      <span className="ShoppingCartPage-addBox">
                        {item.quantity}
                      </span>
                      <span
                        className="ShoppingCartPage-addBox2"
                        onClick={() => handleIncrement(item.id)}
                      >
                        +
                      </span>
                    </div>
                  </td>
                  <td className="ShoppingCartPage-listPrice">
                    ₹ {item.discounted_price * item.quantity}
                  </td>
                  <td>
                    <div
                      className="ShoppingCartPage-addBoxDelete"
                      onClick={() => handleDelete(item.id)}
                    >
                      X
                    </div>
                  </td>
                </tr>
              ))
              }
              </tbody>
            </table>
          </div>
          <div className="ShoppingCartPage-PriceSection">
            <div className="ShoppingCartPage-priceBaseContainer">
              <h2 className="ShoppingCartPage-priceheading">
                PRICE DETAILS
                <span> ({cartData.length} Items)</span>
              </h2>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Total MRP</h3>
                <h3>₹ {totalMRP}</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Discount on MRP</h3>
                <h3>- ₹ {discountonMrp}</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail">
                <h3>Convenience Fee</h3>
                <h3>FREE</h3>
              </div>
              <div className="ShoppingCartPage-priceDetail ShoppingCartPage-totalAmount">
                <h3>Total Amount</h3>
                <h3>₹ {totalAmount}</h3>
              </div>
              <button className="ShoppingCartPage-buyButton" onClick={placeOrderHandler}>
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ShoppingCartPage;
