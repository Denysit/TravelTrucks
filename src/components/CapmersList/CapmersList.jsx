import css from "./CapmersList.module.css";
import { selectAllCampers } from "../../redux/selectors";
import { useSelector } from "react-redux";
import CampersCard from "../CampersCard/CampersCard";

export default function CapmersList() {
  const campers = useSelector(selectAllCampers);

  console.log(campers);

  if (!campers || campers.length === 0) {
    return <p>No campers available</p>;
  }

  return (
    <ul>
      {campers.map((camper, index) => (
        <li key={index}>
          <CampersCard camper={camper} />
        </li>
      ))}
    </ul>
  );
}
