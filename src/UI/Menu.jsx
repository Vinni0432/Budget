import style from "./menu.module.css";
import logo from "../images/logo_2.jpg";

const Menu = () => {
  return (
    <>
      <nav className={style.menu}>
        <div>
          <img className={style.img} src={logo} alt="Logo" />
        </div>
        <div>
          <p className={style.title}>
            Budget all time in <br />
            your pocket!
          </p>
        </div>
        <div className={style.menu_auth}>Авторизація</div>
      </nav>
    </>
  );
};

export default Menu;
