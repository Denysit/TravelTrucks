import css from "./CampersCard.module.css";

export default function CampersCard({ camper }) {
  return (
    <div className={css.container_campers_card}>
      <div className={css.image_container}>
        <img src={camper.gallery[0].original} alt="Camper" />
      </div>
      <div className={css.description_container}>
        <h2>{camper.name}</h2>
        <h2>€{camper.price}</h2>
        <p>
          {camper.rating} ({camper.reviews.length} reviews)
        </p>
        <p>{camper.location}</p>
        <p>{camper.description}</p>
        <button>Show More</button>
      </div>
    </div>
  );
}
