import "./comments.css";
import photo from "./../../assets/imges/lll.png";
import photo1 from "./../../assets/imges/logo11.jpg";

export function Comments(props) {
  return (
    <div className="comments">
      <div className={"cdiv1"}>
        <div className={"photodiv"}>
          <img className={"photo"} src={photo} alt="error" />
        </div>
        <p className={"photopara"}>{props.para}</p>

        <div className={"pdiv"}>
          <img className={"photo1"} src={photo1} alt="error" />
        </div>
        <div className={"photoh1"}>
          <h1 className={"photoh2"}>{props.h11}</h1>
          <h2 className={"photoh3"}>{props.h12}</h2>
          <button className={"btn77"}>Read More</button>
        </div>
      </div>
    </div>
  );
}
