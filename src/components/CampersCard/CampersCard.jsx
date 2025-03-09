import css from "./CampersCard.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function CampersCard({ camper }) {
  const [isFavoriteTrue, setIsFavoriteTrue] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("Favorite_List")) || [];
    const isFavorite = favorites.some((item) => item.id === camper.id);
    setIsFavoriteTrue(isFavorite);
  }, [camper.id]);

  const navigate = useNavigate();

  const handleGetCamper = () => {
    navigate(`/catalog/${camper.id}`);
  };

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("Favorite_List")) || [];

    const isFavorite = favorites.some((item) => item.id === camper.id);

    if (isFavorite) {
      setIsFavoriteTrue(false);
      const updatedFavorite = favorites.filter((item) => item.id !== camper.id);
      localStorage.setItem("Favorite_List", JSON.stringify(updatedFavorite));
      console.log(`Кемпер ${camper.id} видалено з улюблених`);
    } else {
      setIsFavoriteTrue(true);
      favorites.push(camper);
      localStorage.setItem("Favorite_List", JSON.stringify(favorites));
      console.log(`Кемпер ${camper.id} додано до улюблених`);
    }
  };

  return (
    <div className={css.container_campers_card}>
      <div className={css.image_container}>
        <img
          src={camper.gallery[0].original}
          alt="Camper"
          className={css.image}
        />
      </div>
      <div className={css.description_container}>
        <div className={css.price_container}>
          <h2>{camper.name}</h2>
          <h2 className={css.price}>€{camper.price}.00</h2>
          <svg
            width={20}
            height={20}
            onClick={toggleFavorite}
            style={{
              cursor: "pointer",
              stroke: isFavoriteTrue ? "red" : "gray",
            }}
          >
            <use href={`${sprite}#${"favorite_icons"}`} />
          </svg>
        </div>
        <div className={css.rating_location}>
          <div className={css.rating}>
            <svg width={16} height={16}>
              <use href={`${sprite}#${"Rating"}`} />
            </svg>
            <p>
              {camper.rating} ({camper.reviews.length} reviews)
            </p>
          </div>
          <div className={css.location}>
            <svg width={16} height={16}>
              <use href={`${sprite}#${"Map"}`} />
            </svg>
            <p>{camper.location}</p>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <div className={css.container_properties}>
          {camper.engine && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"transmission"}`} />
              </svg>
              <p className={css.text_description}>
                {camper.transmission.charAt(0).toUpperCase() +
                  camper.transmission.slice(1)}
              </p>
            </div>
          )}
          {camper.engine && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"fuel-pump"}`} />
              </svg>
              <p className={css.text_description}>
                {camper.engine.charAt(0).toUpperCase() + camper.engine.slice(1)}
              </p>
            </div>
          )}
          {camper.AC && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"ac"}`} />
              </svg>
              <p className={css.text_description}>AC</p>
            </div>
          )}
          {camper.bathroom && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"bathroom"}`} />
              </svg>
              <p className={css.text_description}>Bathroom</p>
            </div>
          )}

          {camper.kitchen && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"kitchen"}`} />
              </svg>
              <p className={css.text_description}>Kitchen</p>
            </div>
          )}

          {camper.TV && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"tv"}`} />
              </svg>
              <p className={css.text_description}>TV</p>
            </div>
          )}

          {camper.radio && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"radio"}`} />
              </svg>
              <p className={css.text_description}>Radio</p>
            </div>
          )}

          {camper.refrigerator && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"refrigerator"}`} />
              </svg>
              <p className={css.text_description}>Refrigerator</p>
            </div>
          )}

          {camper.microwave && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"microwave"}`} />
              </svg>
              <p className={css.text_description}>Microwave</p>
            </div>
          )}

          {camper.gas && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"gas"}`} />
              </svg>
              <p className={css.text_description}>Gas</p>
            </div>
          )}

          {camper.water && (
            <div className={css.card_description}>
              <svg width={20} height={20}>
                <use href={`${sprite}#${"water"}`} />
              </svg>
              <p className={css.text_description}>Water</p>
            </div>
          )}
        </div>
        <button onClick={handleGetCamper} className={css.button_show_more}>
          Show More
        </button>
      </div>
    </div>
  );
}
