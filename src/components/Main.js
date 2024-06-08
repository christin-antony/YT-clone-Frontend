import React, { useRef, useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";



const Main = ({ isToggled }) => {
  const filterOptions = [
    "All",
    "Trending",
    "Shopping",
    "Music",
    "Movies",
    "Gaming",
    "News",
    "Sports",
    "Live",
    "Comedy",
    "Watched",
    "Recent",
    "Kids",
    "Malayalam"
  ];

  const scrollContainer = useRef(null);
  const [activeButton, setActiveButton] = useState(filterOptions[0]); // Initialize with the first option

  const handleButtonClick = (option) => {
    console.log(option);
    setActiveButton(option);
  };

  // const scrollLeft = () => {
  //   if (scrollContainer.current) {
  //     scrollContainer.current.scrollLeft -= 100; // Adjust scroll speed as needed
  //   }
  // };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft += 100; 
    }
  };

  return (
    <div className={isToggled ? "bar" : "Lbar"}>
      {/* <button className="arrow" onClick={scrollLeft}>
        <i className="fa-solid fa-chevron-left"></i>
      </button> */}

      <div className="bar-opts" ref={scrollContainer}>
        <div className="bar-options-container">
          {filterOptions.map((option, index) => (
            <button
            key={index}
            className={`baroptions ${activeButton === option ? 'active' : ''}`}
            onClick={() => handleButtonClick(option)}
            style={{
              backgroundColor: activeButton === option ? "black" : "#f0f0f0",
              color: activeButton === option ? "#f0f0f0" : "#3d3d3d" 
            }}
          >
            {option}
          </button>
          ))}
        </div>
      </div>

      <button className="arrow" onClick={scrollRight}>
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default Main;
