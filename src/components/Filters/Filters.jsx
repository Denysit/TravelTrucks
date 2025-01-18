import css from "./Filters.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function Filters() {
  return (
    <div className={css.container_filters}>
      <label htmlFor="location" className={css.label_location}>
        Location
      </label>
      <div className={css.input_wrapper}>
        <svg width={20} height={20} className={css.icon}>
          <use href={`${sprite}#${"Map"}`} />
        </svg>
        <input
          id="location"
          type="text"
          placeholder="Kyiv, Ukraine"
          className={css.input_location}
        />
      </div>
      <p className={css.label_filters}>Filters</p>
      <h4 className={css.vehicle_topic}>Vehicle equipment</h4>
      <div className={css.line}></div>
      <div className={css.container_icons}>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"ac"}`} />
          </svg>
          <p>AC</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"transmission"}`} />
          </svg>
          <p>Automatic</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"kitchen"}`} />
          </svg>
          <p>Kitchen</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"tv"}`} />
          </svg>
          <p>TV</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"bathroom"}`} />
          </svg>
          <p>Bathroom</p>
        </div>
      </div>
      <h4 className={css.vehicle_topic}>Vehicle type</h4>
      <div className={css.line}></div>
      <div className={css.container_icons}>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"van"}`} />
          </svg>
          <p>Van</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"fully_integrated"}`} />
          </svg>
          <p>Fully Integrated</p>
        </div>
        <div className={css.equipment}>
          <svg width={32} height={28}>
            <use href={`${sprite}#${"alcove"}`} />
          </svg>
          <p>Alcove</p>
        </div>
      </div>
      <button className={css.button_search}>Search</button>
    </div>
  );
}
