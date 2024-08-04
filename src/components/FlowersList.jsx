import { useState, useEffect } from "react";
import FlowerItem from "./FlowerItem.jsx";
import Button from "./UI/Button.jsx";
import Modal from "./UI/Modal.jsx";
import data from "../../data/flowers.json";
import "../index.css";

const seasonOrder = {
  "סתיו": 1,
  "חורף": 2,
  "אביב": 3,
  "קיץ": 4
};

export default function FlowersList() {
  const [selectedFlower, setSelectedFlower] = useState(null);
  const [visibleCount, setVisibleCount] = useState(9);
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  const [filterOption, setFilterOption] = useState("all");

  const handleShowMore = () => {
    setVisibleCount(prevCount => prevCount + 9);
  };

  const handleScroll = () => {
    setIsBackToTopVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFilterAndSortChange = (event) => {
    setFilterOption(event.target.value);
  };

  const sortedAndFilteredFlowers = () => {
    let filteredFlowers = data;

    if (filterOption === "protected") {
      filteredFlowers = filteredFlowers.filter(flower => flower.protected === "yes");
    } else if (filterOption === "notProtected") {
      filteredFlowers = filteredFlowers.filter(flower => flower.protected === "no");
    }

    if (filterOption === "sortTime") {
      filteredFlowers = filteredFlowers.sort((a, b) => seasonOrder[a.time] - seasonOrder[b.time]);
    } else if (filterOption === "sortName") {
      filteredFlowers = filteredFlowers.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filteredFlowers.slice(0, visibleCount);
  };

  return (
    <>
      <div className="filter-sort">
        <select onChange={handleFilterAndSortChange} value={filterOption}>
          <option value="all">כל הפרחים</option>
          <option value="protected">פרחים מוגנים</option>
          <option value="notProtected">פרחים לא מוגנים</option>
          <option value="sortTime">עונות פריחה</option>
          <option value="sortName">שמות הפרחים</option>
        </select>
      </div>

      <ul id="flowers">
        {sortedAndFilteredFlowers().map((flower) => (
          <Button key={flower.id} onClick={() => setSelectedFlower(flower)} >
            <FlowerItem flower={flower} />
          </Button>
        ))}
      </ul>

      {visibleCount < data.length && (
        <div className="show-more-container">
          <button className="show-more-button" onClick={handleShowMore}>
            הצג עוד
          </button>
        </div>
      )}

      {selectedFlower && (
        <Modal 
          onClose={() => setSelectedFlower(null)} 
          name={selectedFlower.name} 
          description={selectedFlower.description} 
          time={selectedFlower.time}
        />
      )}

      {isBackToTopVisible && (
        <button className="back-to-top-button" onClick={scrollToTop}>^</button>
      )}
    </>
  );
}