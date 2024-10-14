import css from "./PageNotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <Link to="/" className={css.link}>
        Back to Homepage
      </Link>
    </div>
  );
}
