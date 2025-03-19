import css from "./DetailInfoCampers.module.css";
import CampersDetail from "../../components/CamperDetails/CamperDetails";
import { Suspense, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function DetailInfoCampers() {
  const reviewsRef = useRef(null);

  return (
    <div className={css.container_detail_page}>
      <CampersDetail reviewsRef={reviewsRef} />
      <ul className={css.navLinks}>
        <li>
          <NavLink
            to="features"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            Features
          </NavLink>
        </li>
        <li>
          <NavLink
            to="reviews"
            className={({ isActive }) =>
              `${css.navLink} ${isActive ? css.active : ""}`
            }
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <div className={css.line}></div>
      <Suspense fallback={<div>Loading....</div>}>
        <div ref={reviewsRef}>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
}
