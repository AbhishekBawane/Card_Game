import "./Card.css";

export default function Card({ value, isFlipped, onClick }) {

    console.log("Card Values:", value)
  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="inner">
        <div className="front">?</div>
        <div className="back">{value}</div>
      </div>
    </div>
  );
}