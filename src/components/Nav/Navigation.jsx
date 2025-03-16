import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <div className={css.nav_container}>
      <p className={css.logo}>
        Travel <span className={css.logo_two}> Trucks</span>
      </p>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/favorite" className={buildLinkClass}>
          Favorite
        </NavLink>
      </nav>
    </div>
  );
}
