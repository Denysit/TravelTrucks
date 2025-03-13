import css from "./CamperDetails.module.css";
import { fetchOneCamper } from "../../redux/operation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/selectors";
import sprite from "../../assets/icons/sprite.svg";

export default function DetailInfoCampers() {
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [dispatch, id]);

  console.log(camper);

  return (
    <div>
      <div className={css.main_info}>
        <h2>{camper.name}</h2>
        <div className={css.rating}>
          <svg width={16} height={16}>
            <use href={`${sprite}#${"Rating"}`} />
          </svg>
          <p>
            {camper.rating} ({camper.reviews?.length} reviews)
          </p>
          <svg width={16} height={16}>
            <use href={`${sprite}#${"Map"}`} />
          </svg>
          <p>{camper.location}</p>
        </div>
        <h2 className={css.price}>€{camper.price}.00</h2>
      </div>
      <div className={css.container_photo_info}>
        <div className={css.container_photo}>
          {camper.gallery?.map((photo, index) => (
            <div key={index} className={css.image_wrapper}>
              <img className={css.image} src={photo.thumb} alt="Photo" />
            </div>
          ))}
        </div>

        <p className={css.description}>{camper.description}</p>
      </div>
    </div>
  );
}
