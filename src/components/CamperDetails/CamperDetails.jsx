import css from "./CamperDetails.module.css";
import { fetchOneCamper } from "../../redux/operation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDetailCamper } from "../../redux/selectors";

export default function DetailInfoCampers() {
  const selectCamper = useSelector(selectDetailCamper);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchOneCamper(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>{selectCamper.name}</h2>
    </div>
  );
}
