import style from "./login-form.module.css";

const Login = () => {
  return (
    <section>
      <form action="">
        <input type="email" id="email" className={style.input} required />
        <label for="email" className={style.label}>
          Email address
        </label>
        <button type="submit" className={style.btn}>
          Get Started
        </button>
      </form>
    </section>
  );
};

export default Login;
