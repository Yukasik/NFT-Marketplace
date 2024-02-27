import "./Footer.css";
import Input from "../UI/input/Input";
import Button from "../UI/button/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-left">
          <div className="footer-left-text">
            <h1>Explore</h1>
          </div>
          <ul className="footer-items">
            <li className="footer-item">Marketplace</li>
            <li className="footer-item">Rankings</li>
            <li className="footer-item">Connect a wallet</li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="footer-right-text">
            <h1>Join Our Weekly Digest</h1>
            <p>
              Get exclusive promotions & updates <br /> straight to your inbox.
            </p>
          </div>
          <div className="footer-subscribe">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="footer-input"
            ></Input>
            <Button type="footer-btn" destination="/">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
