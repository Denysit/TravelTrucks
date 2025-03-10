import css from "./CapmersList.module.css";
import {
  selectAllCampers,
  selectCampersStatus,
  selectCampersError,
} from "../../redux/selectors";
import CampersCard from "../CampersCard/CampersCard";
import { fetchCampers } from "../../redux/operation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";

export default function CapmersList() {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useDispatch();
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);
  const campers = useSelector(selectAllCampers);

  useEffect(() => {
    dispatch(fetchCampers({ page: currentPage }));
  }, [dispatch, currentPage]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const camperSpring = useSpring({
    from: { x: -100, opacity: 1 }, // Start on the right, fully visible
    to: { x: 150, opacity: 0 }, // Move left, fade out
    config: { duration: 3000 }, // 2 seconds for smooth motion
    loop: true, // Infinite loop
    reset: true, // Reset to "from" when it reaches "to"
  });

  return (
    <>
      {status && <p>Loading...</p>}
      {error ? (
        <div
          className={css.container_error_message}
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          {/* Text */}
          <h3 style={{ color: "#333", marginBottom: "20px" }}>
            Ooopps, Campers Not Found
          </h3>

          {/* Animated SVG Camper */}
          <animated.svg
            width="150"
            height="100"
            viewBox="0 0 150 100"
            style={{
              display: "block",
              margin: "0 auto",
              transform: camperSpring.x.to((x) => `translateX(${x}px)`), // Move left
              opacity: camperSpring.opacity, // Fade out
            }}
          >
            {/* Camper Body */}
            <rect
              x="10"
              y="20"
              width="130"
              height="50"
              rx="10" // Rounded corners
              fill="#4682b4" // Steel blue
            />

            {/* Window */}
            <rect
              x="100"
              y="30"
              width="30"
              height="20"
              fill="#fff" // White window
            />

            {/* Left Wheel */}
            <circle
              cx="40"
              cy="80"
              r="15"
              fill="#333" // Dark gray
            />

            {/* Right Wheel */}
            <circle
              cx="110"
              cy="80"
              r="15"
              fill="#333" // Dark gray
            />
          </animated.svg>
        </div>
      ) : (
        <div className={css.container_campers_list}>
          <ul>
            {campers.map((camper, index) => (
              <li key={index}>
                <CampersCard camper={camper} />
              </li>
            ))}
          </ul>
          <button onClick={handleLoadMore} className={css.button_load_more}>
            Load More
          </button>
        </div>
      )}
    </>
  );
}
