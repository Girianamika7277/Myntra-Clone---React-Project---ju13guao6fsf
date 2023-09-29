import "./ProductCatalogPage.css";
import NavBar from "../../NavBar/NavBar";
import { Link, useParams } from "react-router-dom";
import Card from "../../Card/Card";
import { useEffect, useState } from "react";

const ProductCatalogPage = () => {
  let inputDataMen = require("../../../assets/inputData/mens_data.json");
  let inputDataWomen = require("../../../assets/inputData/womens_data.json");
  let inputDataChildren = require("../../../assets/inputData/children_data.json");
  let combinedData = [...inputDataMen, ...inputDataWomen, ...inputDataChildren];

  let noInputData = [
    {
      id: "noData",
      category: "Data Unavailable",
      brand: "Data Unavailable",
      title: "Try a different filter",
      discounted_price: "0000",
      strike_price: "0000",
      discount: "(0000)",
      images: [
        "https://www.shutterstock.com/image-vector/no-data-vector-outline-icon-260nw-2082716953.jpg",
      ],
      size: ["S", "M", "L", "XL", "XXL"],
      rating: 0.0,
      rating_count: 0.0,
    },
  ];

  let [defaultData, setDefaultData] = useState(combinedData);
  let [inputData, setInputData] = useState(combinedData);

  const params = useParams();

  useEffect(() => {
    switch (params.category) {
      case "men": {
        setDefaultData(inputDataMen);
        setInputData(inputDataMen);
        break;
      }
      case "women": {
        setDefaultData(inputDataWomen);
        setInputData(inputDataWomen);
        break;
      }
      case "kids": {
        setDefaultData(inputDataChildren);
        setInputData(inputDataChildren);
        break;
      }
      default: {
        setDefaultData(combinedData);
        setInputData(combinedData);
      }
    }
  }, [params]);

  // Sorting - start
  const [sortLabel, setSortLabel] = useState("Recommended");
  const sortHandler = (selection) => {
    switch (selection) {
      case "recommended": {
        setInputData(defaultData);
        setSortLabel("Recommended");
        break;
      }
      case "discount": {
        const sortByDiscount = inputData.sort((a, b) => {
          return (
            parseInt(b.discount.replace(/\D/g, "")) -
            parseInt(a.discount.replace(/\D/g, ""))
          );
        });
        setInputData(sortByDiscount);
        // // console.log(selection);
        setSortLabel("Better Discount");
        break;
      }
      case "high_to_low": {
        const sortByPrice = inputData.sort(
          (a, b) => b.discounted_price - a.discounted_price
        );
        setInputData(sortByPrice);
        // // console.log(selection);
        setSortLabel("Price High to Low");
        break;
      }
      case "low_to_high": {
        const sortByPrice = inputData.sort(
          (a, b) => a.discounted_price - b.discounted_price
        );
        setInputData(sortByPrice);
        // // console.log(selection);
        setSortLabel("Price Low to High");
        break;
      }
      case "rating": {
        const sortByRating = inputData.sort((a, b) => b.rating - a.rating);
        setInputData(sortByRating);
        setSortLabel("Customer Rating");
        break;
      }
      default: {
        setInputData(defaultData);
        setSortLabel("Recommended");
      }
    }
  };
  // Sorting - end

  // Filtering
  // showing in filters
  // function to remove duplicates
  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }

  // getting the brands name
  const brandFilter = defaultData.map((obj) => obj.brand);
  const uniqueBrandFilter = removeDuplicates(brandFilter);

  // Filter by Brands
  let selectedBrand = "All";
  let brandData = defaultData;
  // const [brandData,setBrandData] = useState([]);

  const filterByBrand = (event) => {
    const { value, checked } = event.target;
    // // console.log(value);

    if (value === "all") {
      setInputData(defaultData);
      brandData = defaultData;
    } else {
      // // console.log(defaultData);
      brandData = defaultData.filter((item) => item.brand === value);
      // // console.log(brandData);
      if (brandData.length === 0 || brandData === undefined) {
        setInputData(noInputData);
        // // console.log('no data');
      } else {
        setInputData(brandData);
      }
    }
  };

  // Filter by Price
  const filterByPrice = (min, max) => {
    setInputData(brandData);
    const filterByPriceArray = brandData.filter((item) => {
      return item.discounted_price >= min && item.discounted_price <= max;
    });
    // // console.log(filterByPriceArray);
    setInputData(filterByPriceArray);
    if (filterByPriceArray.length === 0 || filterByPriceArray === []) {
      setInputData(noInputData);
    } else setInputData(filterByPriceArray);
  };

  // Filter by Discount
  const filterByDiscount = (min) => {
    setInputData(brandData);
    const filterByDiscountArray = brandData.filter((item) => {
      return parseInt(item.discount.replace(/\D/g, "")) >= min;
    });

    // console.log(filterByDiscountArray);
    setInputData(filterByDiscountArray);
    if (filterByDiscountArray.length === 0 || filterByDiscountArray === []) {
      setInputData(noInputData);
    } else setInputData(filterByDiscountArray);
  };

  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }

  const [filterIsVisible, setFilterIsVisible] = useState(true);
  function filterShowHideHandler() {
    setFilterIsVisible(!filterIsVisible);
  }

  return (
    inputData && (
      <>
        <ScrollToTopOnMount />
        <NavBar />
        <div id="catalog-container">
          {/* breadcrumb */}
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link>Catalog</Link>
              </li>
              <li
                className="breadcrumb-item active breadcrumb-text"
                aria-current="page"
              >
                {params.category}
              </li>
            </ol>
          </nav>

          <div id="catalog-SortSection">
            {/* Filter */}
            <div id="filterName" onClick={filterShowHideHandler}>
              FILTERS
            </div>

            {/* sort dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by : <span id="btn-selectedOption">{sortLabel}</span>
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => sortHandler("recommended")}
                  >
                    Recommended
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => sortHandler("discount")}
                  >
                    Better Discount
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => sortHandler("high_to_low")}
                  >
                    Price: High to Low
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => sortHandler("low_to_high")}
                  >
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => sortHandler("rating")}
                  >
                    Customer Rating
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="catalog-filterAndCards">
            {filterIsVisible && (
              <div id="catalog-filterSection">
                <div className="catalog-categoryBox">
                  <h4 className="catalog-filterTitle">BRAND</h4>
                  <div className="catalog-filterItems">
                    <ul className="catalog-list-group">
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          value={"all"}
                          onChange={filterByBrand}
                          name="brandSelection"
                        />
                        All
                      </li>
                      {uniqueBrandFilter.sort().map((item, index) => (
                        <li key={index} className="catalog-list-group-item">
                          <input
                            className="catalog-form-check-input"
                            name="brandSelection"
                            type="radio"
                            value={item}
                            onChange={filterByBrand}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="catalog-categoryBox">
                  <h4 className="catalog-filterTitle">PRICE</h4>
                  <div className="catalog-filterItems">
                    <ul className="catalog-list-group">
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(0, 100000);
                          }}
                        />
                        Show All
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(0, 499);
                          }}
                        />
                        Less than Rs.500
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(500, 999);
                          }}
                        />
                        Rs.500 to Rs.999
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(1000, 1999);
                          }}
                        />
                        Rs.1000 to Rs.1999
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(2000, 2500);
                          }}
                        />
                        Rs.2000 to Rs.2500
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="price_selection"
                          onClick={() => {
                            filterByPrice(2500, 50000);
                          }}
                        />
                        More than Rs.2500
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="catalog-categoryBox">
                  <h4 className="catalog-filterTitle">DISCOUNT RANGE</h4>
                  <div className="catalog-filterItems">
                    <ul className="catalog-list-group">
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="discount_selection"
                          onClick={() => {
                            filterByDiscount(0);
                          }}
                        />
                        Show All
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="discount_selection"
                          onClick={() => {
                            filterByDiscount(40);
                          }}
                        />
                        40% and above
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="discount_selection"
                          onClick={() => {
                            filterByDiscount(50);
                          }}
                        />
                        50% and above
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="discount_selection"
                          onClick={() => {
                            filterByDiscount(60);
                          }}
                        />
                        60% and above
                      </li>
                      <li className="catalog-list-group-item">
                        <input
                          className="catalog-form-check-input"
                          type="radio"
                          name="discount_selection"
                          onClick={() => {
                            filterByDiscount(70);
                          }}
                        />
                        70% and above
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            <div id="catalog-cardSection">
              {inputData.map((e, index) => (
                <Card key={index} data={e} />
              ))}
              ;
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default ProductCatalogPage;
