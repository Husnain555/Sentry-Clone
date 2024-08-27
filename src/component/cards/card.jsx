import "./card.css";

export function Card(props) {
  return (
    <div className="card">
      <img className="card__img" src={props.img} alt=" " />
      <div className="card__body">
        <h1 className="card__title">{props.title}</h1>
        <p className="card__description">{props.description}</p>
      </div>
    </div>
  );
}
