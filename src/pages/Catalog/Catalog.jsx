import css from "./Catalog.module.css";
import { fetchCampers } from "../../redux/operation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCampersStatus, selectCampersError } from "../../redux/selectors";
import CapmersList from "../../components/CapmersList/CapmersList";

export default function Catalog() {
  const dispatch = useDispatch();
  const status = useSelector(selectCampersStatus);
  const error = useSelector(selectCampersError);

  console.log("Status from store:", status); // Лог для перевірки статусу
  console.log("Error from store:", error); // Лог для перевірки помилок

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>this is catalog</h1>
      <CapmersList />
      {status && <p>Loading...</p>}
      {error && <p>Error message: {error}</p>}
    </div>
  );
}
