import css from "./HomePage.module.css";
import Banner from "../../components/Banner/Banner";

export default function HomePage() {
  return (
    <div className={css.box_for_homepage}>
      <Banner />
    </div>
  );
}
