import css from "./DetailInfoCampers.module.css";
import CampersDetail from "../../components/CamperDetails/CamperDetails";
import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DetailInfoCampers() {
  return (
    <div className={css.container_detail_page}>
      <CampersDetail />
      <ul className={css.navLinks}>
        <li>
          <NavLink to="features" className={css.navLink}>
            Features
          </NavLink>
        </li>
        <li>
          <NavLink to="reviews" className={css.navLink}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.line}></div>
      <Suspense fallback={<div>Loading....</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
