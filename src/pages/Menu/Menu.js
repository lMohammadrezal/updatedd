import React, { useState, useEffect, useContext } from "react";
import menuImage1 from "../../assets/img/menu-1.jpg";
import menuImage2 from "../../assets/img/menu-2.jpg";
import menuImage3 from "../../assets/img/menu-3.jpg";
import menuImage4 from "../../assets/img/menu-4.jpg";
import menuImage5 from "../../assets/img/menu-5.jpg";
import menuImage6 from "../../assets/img/menu-6.jpg";
import menuImage7 from "../../assets/img/menu-7.jpg";
import menuImage8 from "../../assets/img/menu-8.jpg";
import MenuItem from "./MenuItem";
import Swal from "sweetalert2"; // Import SweetAlert
import LanguageContext from "../../Context/LanguageContext";

const Menu = () => {
  const { language, translations } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("breakfast");
  const [searchQuery, setSearchQuery] = useState("");
  const [menuItems, setMenuItems] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const generatePrice = (index) => `$${Math.floor(Math.random() * 40) + 10}.99`;

  const getMenuItems = () => {
    return {
      breakfast: [
        { name: translations[language].food_no_1, img: menuImage1 },
        { name: translations[language].food_no_2, img: menuImage2 },
        { name: translations[language].food_no_3, img: menuImage3 },
        { name: translations[language].food_no_4, img: menuImage4 },
        { name: translations[language].food_no_5, img: menuImage5 },
        { name: translations[language].food_no_6, img: menuImage6 },
        { name: translations[language].food_no_7, img: menuImage7 },
        { name: translations[language].food_no_8, img: menuImage8 },
      ],
      lunch: [
        { name: translations[language].food_no_9, img: menuImage1 },
        { name: translations[language].food_no_10, img: menuImage2 },
        { name: translations[language].food_no_11, img: menuImage3 },
        { name: translations[language].food_no_12, img: menuImage4 },
        { name: translations[language].food_no_13, img: menuImage5 },
        { name: translations[language].food_no_14, img: menuImage6 },
        { name: translations[language].food_no_15, img: menuImage7 },
        { name: translations[language].food_no_16, img: menuImage8 },
      ],
      dinner: [
        { name: translations[language].food_no_17, img: menuImage1 },
        { name: translations[language].food_no_18, img: menuImage2 },
        { name: translations[language].food_no_19, img: menuImage3 },
        { name: translations[language].food_no_20, img: menuImage4 },
        { name: translations[language].food_no_21, img: menuImage5 },
        { name: translations[language].food_no_22, img: menuImage6 },
        { name: translations[language].food_no_23, img: menuImage7 },
        { name: translations[language].food_no_24, img: menuImage8 },
      ],
    };
  };

  useEffect(() => {
    const setPrices = (items) =>
      items.map((item, index) => ({ ...item, price: generatePrice(index) }));
    const updatedItems = getMenuItems();
    setMenuItems({
      breakfast: setPrices(updatedItems.breakfast),
      lunch: setPrices(updatedItems.lunch),
      dinner: setPrices(updatedItems.dinner),
    });
  }, [language]); // Re-run when language changes

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const getItems = () => {
    const filteredItems = menuItems[activeTab].filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    return filteredItems;
  };

  const handleTabClick = (tab) => setActiveTab(tab);

  const handleRating = async (itemName, rating) => {
    const ratingData = {
      itemName: itemName,
      rating: rating,
    };

    console.log("Rating Data:", ratingData);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ratingData),
        }
      );

      console.log("HTTP Status:", response.status);

      if (response.ok) {
        Swal.fire({
          title: translations[language].your_rating_has_been_submitted,
          text:
            language === "en"
              ? `Thank you for rating "${itemName}". You gave it ${rating} stars. Your feedback helps us improve our menu!`
              : ` از اینکه "${itemName}" را ارزیابی کردید، سپاسگزاریم. شما به آن ${rating} ستاره دادید. بازخورد شما به ما کمک می‌کند تا منوی خود را بهبود دهیم`,
          icon: "success",
          confirmButtonText: translations[language].got_it,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "There was an error submitting your rating.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center">
            <h5 className={`section-title ff-secondary text-center text-primary fw-normal ${language==="fa"?"farsi_font":""}`}>
              {translations[language].food_menu}
            </h5>
            <h1 className={`mb-5 ${language==="fa"?"farsi_font":""}`}>
              {translations[language].most_popular_items}
            </h1>
          </div>

          {/* Search Bar */}
          <div className="row mb-4">
            <div className="col-12 d-flex justify-content-center">
              <div
                className="search-bar-container w-100"
                style={{ maxWidth: "500px", position: "relative" }}
              >
                <input
                  type="text"
                  className={`form-control search-bar-input ${language==="fa"?"farsi_font":""}`}
                  placeholder={translations[language].search_for_menu_items}
                  value={searchQuery}
                  onChange={handleSearch}
                  style={{ paddingRight: "40px" }}
                />
                <i
                  className="fa fa-search search-bar-icon"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "#aaa",
                  }}
                ></i>
              </div>
            </div>
          </div>

          <div className="tab-class text-center">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              {["breakfast", "lunch", "dinner"].map((tab) => (
                <li className="nav-item" key={tab}>
                  <a
                    className={`d-flex align-items-center text-start mx-3 pb-3 ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    <i
                      className={`fa ${
                        tab === "breakfast"
                          ? "fa-coffee"
                          : tab === "lunch"
                          ? "fa-hamburger"
                          : "fa-utensils"
                      } fa-2x text-primary`}
                    ></i>
                    <div className="ps-3">
                      {/* ............................................. */}
                      {language==="fa"
                      ?(
                      <>
                        <h6 className={`mt-n1 mb-0 ${language==="fa"?"farsi_font":""}`}>
                        {tab === "breakfast"
                          ? "صبحانه"
                          : tab === "lunch"
                          ? "ناهار"
                          : "شام"}
                      </h6>
                      <small className="text-body">
                        {tab === "breakfast"
                          ? "پر طرفدار"
                          : tab === "lunch"
                          ? "خوش مزه"
                          : "شام دلپذیر"}
                      </small>
                      </>)
                      :(
                      <>
                        <small className="text-body">
                        {tab === "breakfast"
                          ? "Popular"
                          : tab === "lunch"
                          ? "Delicious"
                          : "Lovely"}
                      </small>
                      <h6 className="mt-n1 mb-0">
                        {tab === "breakfast"
                          ? "Breakfast"
                          : tab === "lunch"
                          ? "Lunch"
                          : "Dinner"}
                      </h6>
                      </>)
                      }
                      {/* ............................................. */}
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              <div className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  {getItems().map((item, index) => (
                    <MenuItem
                      key={index}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      onRate={handleRating}
                    />
                  ))}
                  {getItems().length === 0 && (
                    <div className="col-12 text-center">
                      <p className="text-muted">
                        {language === "en"
                          ? `No items found for "${searchQuery}"`
                          : `هیچ موردی برای "${searchQuery}" پیدا نشد`}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
