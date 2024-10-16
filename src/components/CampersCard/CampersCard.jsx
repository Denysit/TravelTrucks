import css from "./CampersCard.module.css";
import { selectFilters } from "../../redux/selectors";
import { useSelector } from "react-redux";
import sprite from "../../assets/icons/sprite.svg";

export default function CampersCard({ camper }) {
  const characteristics = useSelector(selectFilters);

  return (
    <div className={css.container_campers_card}>
      <div className={css.image_container}>
        <img src={camper.gallery[0].original} alt="Camper" />
      </div>
      <svg width={20} height={20} fill="red" stroke="red">
        <use href={`${sprite}#${"favorite_icons"}`} />
      </svg>
      <div className={css.description_container}>
        <h2>{camper.name}</h2>
        <h2>€{camper.price}.00</h2>
        <p>
          {camper.rating} ({camper.reviews.length} reviews)
        </p>
        <p>{camper.location}</p>
        <p>{camper.description}</p>
        <div className={css.properties}>
          <p>
            {camper.transmission.charAt(0).toUpperCase() +
              camper.transmission.slice(1)}
          </p>
          <p>
            {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
          </p>
          {camper.AC === characteristics.AC && <p>AC</p>}
          {camper.bathroom === characteristics.bathroom && <p>Bathroom</p>}
          {camper.kitchen === characteristics.kitchen && <p>Kitchen</p>}
          {camper.TV === characteristics.TV && <p>TV</p>}
          {camper.radio === characteristics.radio && <p>Radio</p>}
          {camper.refrigerator === characteristics.refrigerator && (
            <p>Refrigerator</p>
          )}
          {camper.microwave === characteristics.microwave && <p>Microwave</p>}
          {camper.gas === characteristics.gas && <p>Gas</p>}
          {camper.water === characteristics.water && <p>Water</p>}
        </div>
        <button>Show More</button>
      </div>
    </div>
  );
}
