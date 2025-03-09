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

  return (
    <>
      {status && <p>Loading...</p>}
      {error ? (
        <p className={css.error_message}>{error}</p>
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
