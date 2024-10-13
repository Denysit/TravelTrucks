import css from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={css.banner}>
      <div className={css.text_container}>
        <h1 className={css.text_top}>Campers of your dreams</h1>
        <h2 className={css.sub_text}>
          You can find everything you want in our catalog
        </h2>
        <button className={css.button_home}>View Now</button>
      </div>
    </div>
  );
}
