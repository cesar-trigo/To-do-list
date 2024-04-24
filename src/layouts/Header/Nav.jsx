import { Link } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = () => {
  return (
    <header className={style.header}>
      <nav>
        <ul className={style.ulNav}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/formP">Form</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

/* rafce == para crear el componente funcional */
