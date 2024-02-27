import "./Header.css";
import { Logo } from "../../img/header";
import { User } from "../../img/img-icons";
import Button from "../UI/button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrap">
        <div className="header-logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="header-menu">
          <ul className="header-menu-items">
            <li className="header-menu-item">
              <Link to="/Marketplace" className="header-menu-link">
                Marketplace
              </Link>
            </li>
            <li className="header-menu-item">
              <Link to="/Rankings" className="header-menu-link">
                Rankings
              </Link>
            </li>
            <li className="header-menu-item">
              <Link to="/Connect wallet" className="header-menu-link">
                Connect a wallet
              </Link>
            </li>
          </ul>
          <div className="header-btn">
            <Button type="header-button" destination="/Create account">
              <img className="header-btn-img" src={User} alt="user" />
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
