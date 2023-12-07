import "./login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1> Sign In</h1>

          <input
            type="email"
            name=""
            id=""
            placeholder="Email or phone Number"
          />
          <input type="password" name="" id="" placeholder="PAssword" />
          <button className="loginButton">Sign In</button>

          <span>
            New to Netflix
            <b>sign Up now</b>
          </span>
          <small>
            this page is protected by Google reCAPTCHA to ensure you re not a
            bot. <b>Learn more</b>
          </small>
        </form>
      </div>
    </div>
  );
}
