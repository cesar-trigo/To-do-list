import Footer from "./Footer/Footer";
import Nav from "./Header/Nav";
import style from "./Main.module.css";

const Main = props => {
  return (
    <div>
      <Nav />
      <div className={style.main}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Main;
