import style from "../components/banner-section.module.css";
import Nav from "./nav.jsx";
import Login from "./login-form.jsx";
import Ark from "./ark.jsx";

function Banner_section() {
  return (
    <div className={style.section}>
      <Nav />
      <h1>
        Unlimited movies, TV
        <br />
        shows and more
      </h1>
      <p id={style.para1}>Starts at ₹149. Cancel at any time.</p>
      <p id={style.para2}>
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <Login />
      <Ark/>
    </div>
  );
}

export default Banner_section;
