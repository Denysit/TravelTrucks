import css from "./Catalog.module.css";
import CapmersList from "../../components/CapmersList/CapmersList";
import Filters from "../../components/Filters/Filters";

export default function Catalog() {
  return (
    <div className={css.container}>
      <Filters/>
      <CapmersList/>
    </div>
  );
}
