import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cards from "../Components/Cards";
import Carousel from "../Components/Carousel";

export default function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  // Function to load data from API
  const loadData = async () => {
    try {
      // Fetch data from API
      let response = await fetch("http://localhost:8000/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();

      // Check if the response format is valid
      if (Array.isArray(response[0]) && Array.isArray(response[1])) {
        setFoodItem(response[0]); // Set food items
        setFoodCat(response[1]); // Set food categories
      } else {
        console.error("Invalid data format received");
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Fetch data when component mounts
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div>
        <Carousel />
      </div>

      <div className="container">
        {foodCat.length > 0 ? (  // Check for array length instead of reference comparison
          foodCat.map((data) => {
            return (
              <div key={data._id} className="fs-3 m-3 ">
                {data.categoryName}
                <hr />
                {foodItem.length > 0 ? (  // Check array length for food items
                  foodItem
                    .filter((item) => item.categoryName === data.categoryName)
                    .map((filterItems) => {
                      return (
                        <div key={filterItems._id}>
                          <Cards ></Cards>
                        </div>
                      );
                    })
                ) : (
                  <div>No such Data Found</div>
                )}
              </div>
            );
          })
        ) : (
          <div>No categories found</div>
        )}
        <Cards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
