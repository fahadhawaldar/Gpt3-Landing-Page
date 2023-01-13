import styles from "./Navbar.module.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import { useState } from "react";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#wgpt3">What is GTP3?</a>
    </p>
    <p>
      <a href="#possibility">Open AI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggelMenu, setToggleMenu] = useState(false);
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarlinks}>
        <div className={styles.navbarlinkslogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.linkscontainer}>
          <Menu />
        </div>
      </div>
      <div className={styles.sign}>
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className={styles.menu}>
        {toggelMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggelMenu && (
          <div className={`${styles.nabarmenuitems} scale-up-center`}>
            <Menu />
            <div className={styles.menusign}>
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
