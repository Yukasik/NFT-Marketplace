import "./Mashrooms.css";
import { Shroomie } from "../../img/home/img-avatars";
import { Eye } from "../../img/img-icons";
import { Button } from "../../components/UI";

const Mashrooms = () => {
  return (
    <div className="mashrooms">
      <div className="mashrooms-wrap">
        <div className="mashrooms-block-user">
          <img src={Shroomie} alt="Shroomie" />
          <p>Shroomie</p>
        </div>
        <div className="mashrooms-block-info">
          <div className="mashrooms-title">
            <h1>Magic Mashrooms</h1>
            <Button type="mashrooms-block-info-button" destination="/">
              <img src={Eye} alt="Eya" /> See NFT
            </Button>
          </div>
          <div className="mashrooms-timer">
            <p className="mashrooms-timer-title">Auction ends in:</p>
            <p className="mashrooms-timer-text">59 : 59 : 59</p>
            <div className="mashrooms-timer-text-min">
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mashrooms;
