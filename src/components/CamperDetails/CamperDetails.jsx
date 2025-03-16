import css from "./CamperDetails.module.css";
import { fetchOneCamper } from "../../redux/operation";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCamper } from "../../redux/selectors";
import sprite from "../../assets/icons/sprite.svg";
import { useNavigate } from "react-router-dom";

export default function DetailInfoCampers() {
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const navigate = useNavigate();
  const [isFavoriteTrue, setIsFavoriteTrue] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("Favorite_List")) || [];
    const isFavorite = favorites.some((item) => item.id === camper.id);
    setIsFavoriteTrue(isFavorite);
  }, [camper.id]);

  const favorites = JSON.parse(localStorage.getItem("Favorite_List")) || [];
  console.log(favorites);

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
  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [dispatch, id]);

  console.log(camper);

  const handleNext = useCallback(() => {
    setSelectedImageIndex((prev) =>
      Math.min(prev + 1, camper.gallery?.length - 1)
    );
  }, [camper.gallery?.length]);

  const handlePrev = useCallback(() => {
    setSelectedImageIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }),
    [selectedImageIndex, handlePrev, handleNext];

  return (
    <div className={css.container_detail_page}>
      <div className={css.container_top_info}>
        <button className={css.backButton} onClick={() => navigate("/catalog")}>
          ←
        </button>
        <div className={css.main_info}>
          <h1>{camper.name}</h1>
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
        <div>
          <svg
            width={30}
            height={30}
            onClick={toggleFavorite}
            style={{
              cursor: "pointer",
              stroke: isFavoriteTrue ? "red" : "gray",
            }}
          >
            <use href={`${sprite}#${"favorite_icons"}`} />
          </svg>
        </div>
      </div>
      <div className={css.container_photo_info}>
        <div className={css.container_photo}>
          {camper.gallery?.map((photo, index) => (
            <div
              key={index}
              className={css.image_wrapper}
              onClick={() => setSelectedImageIndex(index)}
            >
              <img className={css.image} src={photo.thumb} alt="Photo" />
            </div>
          ))}
        </div>
        <div className={css.container_description}>
          <p className={css.description}>{camper.description}</p>
        </div>
      </div>

      {/* Modal */}
      {selectedImageIndex !== null && (
        <div className={css.modal} onClick={() => setSelectedImageIndex(null)}>
          <div
            className={css.modalContent}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <img
              src={camper.gallery[selectedImageIndex].original}
              alt="Full-size Camper Photo"
            />
            <button
              className={css.closeButton}
              onClick={() => setSelectedImageIndex(null)}
            >
              ×
            </button>
            <button
              className={css.prevButton}
              onClick={handlePrev}
              disabled={selectedImageIndex === 0}
            >
              ←
            </button>
            <button
              className={css.nextButton}
              onClick={handleNext}
              disabled={selectedImageIndex === camper.gallery.length - 1}
            >
              →
            </button>
            <p className={css.imageCounter}>
              {selectedImageIndex + 1}/{camper.gallery?.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
