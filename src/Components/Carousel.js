import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

export default function Carousel() {
  return (
    <div
      style={{
        width: "100vw",  // Full viewport width
        height: "100vh", // Full viewport height
        overflow: "hidden", // Hide overflow to prevent scrollbars
        position: "relative" // Ensure correct positioning of inner elements
      }}
    >
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ height: "100%",objectFit:"contain !important" }} // Full height for the carousel
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div
            className="carousel-caption"
            style={{
              zIndex: "10",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
              padding: "20px",
              borderRadius: "8px", // Rounded corners for the caption box
              bottom: "20px", // Positioned towards the bottom
              left: "50%", // Center horizontally
              transform: "translateX(-50%)", // Center horizontally
              width: "90%", // Full width with some padding
              
            }}
          >
            <form className="form-inline" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ marginRight: "10px", color: "#000", backgroundColor: "#fff" }} // Better contrast
              />
              <button
                className="btn btn-outline-light my-2 my-sm-0"
                type="submit"
                style={{
                  borderColor: "#fff",
                  color: "#fff",
                  backgroundColor: "transparent", // Transparent background
                  borderRadius: "5px", // Rounded corners
                  padding: "10px 20px" // Adjust padding for better appearance
                }}
              >
                Search
              </button>
            </form>
          </div>

          <div className="carousel-item active">
            <img
              src="/food1.jpg"
              className="d-block w-100"
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "cover" ,// Cover the entire area
                filter: "brightness(50%)", objectFit: "cover"
              }}
              alt="Vegetable Stir-Fry"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/food2.jpg"
              className="d-block w-100"
              style={{
                width: "100%",
                height: "100%",
                // objectFit: "cover" // Cover the entire area
                filter: "brightness(50%)",  objectFit: "cover"
              }}
              alt="Nachos"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/food3.jpg"
              className="d-block w-100"
              style={{
                width: "100%",
                height: "100%",
                filter: "brightness(50%)",  objectFit: "cover"
                // objectFit: "cover" // Cover the entire area
              }}
              alt="Roast Chicken"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

