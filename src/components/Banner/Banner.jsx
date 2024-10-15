import css from "./Banner.module.css";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className={css.banner}>
      <div className={css.text_container}>
        <h1 className={css.text_top}>Campers of your dreams</h1>
        <h2 className={css.sub_text}>
          You can find everything you want in our catalog
        </h2>
        <Link to="/catalog">
          <button className={css.button_home}>View Now</button>
        </Link>
      </div>
    </div>
  );
}
