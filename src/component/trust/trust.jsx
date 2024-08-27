import "./trust.css";
import photo1 from "./../../assets/imges/a.jpg";
import photo2 from "./../../assets/imges/b.jpg";
import photo3 from "./../../assets/imges/c.jpg";
import photo4 from "./../../assets/imges/d.jpg";

export function Trust() {
  return (
    <div className="trust">
      <p className={"p44"}>
        Trust & security
        <br />
      </p>
      <p className={"p45"}>
        Security and compliance are top priorities for Sentry because they are
        fundamental
        <br /> to your experience. We use a variety of industry-standard
        technologies and <br />
        services to secure your data from unauthorized access
      </p>
      <div className={"divo1"}>
        <img className={"mages11"} src={photo1} alt={"error"} />
        <img className={"mages11"} src={photo2} alt={"error"} />
        <img className={"mages11"} src={photo3} alt={"error"} />
        <img className={"mages11"} src={photo4} alt={"error"} />
      </div>
      <button className={"button12"} id={"button12"}>
        Contact Sale
      </button>
      <button className={"button13"} id={"button13"}>
        LEARN MORE ABOUT SENTRY FOR ENTERPRISE
      </button>

      <h1 className={"h1232"}>Of course we have more content</h1>
    </div>
  );
}
