import style from "../components/nav.module.css";
import logo from "../assets/images/Netflix-logo.png";

function Nav() {
  return (
    <div className="container">
        <div className={style.nav}>
        <img src={logo} alt="netflix logo" />
        <select name="lang" id="lang" className={style.lang}>
          <option value="eng">English</option>
          <option value="eng">हिन्दी</option>
        </select>
        <button type="submit" id="btn" className={style.btn}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Nav;
