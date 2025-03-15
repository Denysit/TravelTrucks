import css from "./DetailInfoCampers.module.css";
import CampersDetail from "../../components/CamperDetails/CamperDetails";

export default function DetailInfoCampers() {
  return (
    <div className={css.container_detail_page}>
      <CampersDetail />
    </div>
  );
}
