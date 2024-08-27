import "./forms.css";

export function Form(props) {
  return (
    <div className="form">
      <div>
        <h1 className={"h546"}>
          Get monthly product <br />
          updates from Sentry
        </h1>
        <h2 className={"h2"}>Sign up for our newsletter.</h2>
        <p className={"p231"}>
          And yes, it really is monthly. Ok, maybe the occasional
          <br /> twice a month, but for sure not like one of those daily ones{" "}
          <br />
          that you just tune out after a while.
        </p>
      </div>
      <div className={"formreal"}>
        <p className={"p69"}> Your Email:</p>
        <br />
        <input
          className={"input65"}
          placeholder={"Please Enter Your Name"}
          type={"text"}
        />
        <input type={"checkbox"} />
        I want to receive the monthly newsletter and other updates from Sentry.
        You may unsubscribe at any time.
        <br />
        <br />
        <p className={"p75"}>
          By filling out this form, you agree to our privacy policy. This form
          is protected by reCAPTCHA and Google's Privacy Policy and Terms of
          Service apply.{" "}
        </p>
        <button className={"btn555"}>Sign Up</button>
      </div>
    </div>
  );
}
