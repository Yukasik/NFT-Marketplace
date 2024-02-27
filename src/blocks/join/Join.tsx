import "./Join.css";
import { Gmail } from "../../img/img-icons";
import { ImgAstronaut } from "../../img/home/img-join";
import { Input, Button } from "../../components/UI";

const Join = () => {
  return (
    <div className="join">
      <div className="join-wrap">
        <div className="join-card">
          <div className="join-card-left">
            <img src={ImgAstronaut} alt="Img" />
          </div>
          <div className="join-card-right">
            <h1>
              Join Our Weekly <br /> Digest
            </h1>
            <p>
              Get Exclusive Promotions & Updates <br /> Straight To Your Inbox.
            </p>
            <div className="join-card-subscribe">
              <Input
                type="email"
                placeholder="Enter your email here"
                className="join-input"
              ></Input>
              <Button type="join-btn" destination="/">
                <img src={Gmail} alt="Gmail" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
