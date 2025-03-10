import css from "./Filters.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchFilters } from "../../redux/operation";
import { selectFilters } from "../../redux/selectors";
import { setFilters, clearFilters } from "../../redux/campersSlice";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const { location, AC, transmission, kitchen, TV, bathroom, form } = filters;
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClearFilters = () => {
    dispatch(clearFilters());
    setSearchParams({});
  };

  const handleSearch = () => {
    const active = Object.entries(filters);
    if (active.some(([_, value]) => value)) {
      const activeFilters = Object.entries(filters)
        .filter(([_, value]) => value)
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});

      setSearchParams({ ...activeFilters });
      dispatch(fetchFilters(activeFilters));
    } else {
      alert("Please, choose filters");
    }
  };

  const toggleFilter = (key, value) => {
    const currentValue = filters[key];
    const newValue = currentValue === value ? "" : value;
    dispatch(setFilters({ key, value: newValue }));
  };

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
          value={location}
          onChange={(e) => toggleFilter("location", e.target.value)}
        />
      </div>
      <p className={css.label_filters}>Filters</p>
      <h4 className={css.vehicle_topic}>Vehicle equipment</h4>
      <div className={css.line}></div>
      <div className={css.container_icons}>
        <div
          className={`${css.equipment} ${AC ? css.selected : ""}`}
          onClick={() => toggleFilter("AC", !AC)}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"ac"}`} />
          </svg>
          <p>AC</p>
        </div>
        <div
          className={`${css.equipment} ${transmission ? css.selected : ""}`}
          onClick={() => toggleFilter("transmission", "automatic")}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"transmission"}`} />
          </svg>
          <p>Automatic</p>
        </div>
        <div
          className={`${css.equipment} ${kitchen ? css.selected : ""}`}
          onClick={() => toggleFilter("kitchen", !kitchen)}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"kitchen"}`} />
          </svg>
          <p>Kitchen</p>
        </div>
        <div
          className={`${css.equipment} ${TV ? css.selected : ""}`}
          onClick={() => toggleFilter("TV", !TV)}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"tv"}`} />
          </svg>
          <p>TV</p>
        </div>
        <div
          className={`${css.equipment} ${bathroom ? css.selected : ""}`}
          onClick={() => toggleFilter("bathroom", !bathroom)}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"bathroom"}`} />
          </svg>
          <p>Bathroom</p>
        </div>
      </div>
      <h4 className={css.vehicle_topic}>Vehicle type</h4>
      <div className={css.line}></div>
      <div className={css.container_icons}>
        <div
          className={`${css.equipment} ${form === "van" ? css.selected : ""}`}
          onClick={() => toggleFilter("form", "van")}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"van"}`} />
          </svg>
          <p>Van</p>
        </div>
        <div
          className={`${css.equipment} ${
            form === "fullyIntegrated" ? css.selected : ""
          }`}
          onClick={() => toggleFilter("form", "fullyIntegrated")}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"fully_integrated"}`} />
          </svg>
          <p>Fully Integrated</p>
        </div>
        <div
          className={`${css.equipment} ${
            form === "alcove" ? css.selected : ""
          }`}
          onClick={() => toggleFilter("form", "alcove")}
        >
          <svg width={32} height={28}>
            <use href={`${sprite}#${"alcove"}`} />
          </svg>
          <p>Alcove</p>
        </div>
      </div>
      <div className={css.container_buttons}>
        <button className={css.button_delete} onClick={handleClearFilters}>
          Clear
        </button>
        <button className={css.button_search} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
