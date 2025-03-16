import css from "./CamperDetails.module.css";
import { fetchOneCamper } from "../../redux/operation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/selectors";
import sprite from "../../assets/icons/sprite.svg";

export default function DetailInfoCampers() {
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

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
          <p className={css.ratingText}>
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
            <div
              key={index}
              className={css.image_wrapper}
              onClick={() => setSelectedImage(photo.original)}
            >
              <img className={css.image} src={photo.thumb} alt="Photo" />
            </div>
          ))}
        </div>
        <p className={css.description}>{camper.description}</p>
      </div>
      {/* Modal */}
      {selectedImage && (
        <div className={css.modal} onClick={() => setSelectedImage(null)}>
          <div className={css.modalContent}>
            <img src={selectedImage} alt="Full-size Camper Photo" />
            <button
              className={css.closeButton}
              onClick={() => setSelectedImage(null)}
            >
              × {/* Close icon */}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
