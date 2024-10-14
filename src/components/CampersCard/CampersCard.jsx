import css from "./CampersCard.module.css";

export default function CampersCard({ camper }) {
  if (!camper) {
    return <p>No camper data</p>;
  }
  console.log(camper);
  return (
    <div>
      <p>{camper.name}</p>
    </div>
  );
}
