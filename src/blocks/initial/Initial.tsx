import { Button } from "../../components/UI";
import { Animakid } from "../../img/home/img-avatars";
import { Placeholder } from "../../img/home/img-initial";
import { RocketWhite } from "../../img/img-icons";
import "./Initial.css";

const Initial = () => {
  return (
    <div className="initial">
      <div className="initial-wrap">
        <div className="initial-left">
          <div className="initial-left-text">
            <h1>
              Discover <br /> Digital Art & <br /> Collect NFTs
            </h1>
            <p>
              NFT Marketplace UI Created With Anima For <br /> Figma. Collect,
              Buy And Sell Art From More <br /> Than 20k NFT Artists.
            </p>
          </div>
          <div className="initial-left-button">
            <Button type="initial-button" destination="/">
              <img src={RocketWhite} alt="airplane" /> Get Started
            </Button>
          </div>
          <div className="initial-left-info">
            <div className="initial-left-text">
              <p className="info-fatty-text">240k+</p>
              <p className="info-text">Total Sale</p>
            </div>
            <div className="initial-left-text">
              <p className="info-fatty-text">100k+</p>
              <p className="info-text">Auctions</p>
            </div>
            <div className="initial-left-text">
              <p className="info-fatty-text">240k+</p>
              <p className="info-text">Artists</p>
            </div>
          </div>
        </div>
        <div className="initial-right">
          <div className="initial-right-card">
            <img src={Placeholder} alt="Space Walking" />
            <div className="initial-right-card-info">
              <h1 className="initial-right-card-text">Space Walking</h1>
              <div className="initial-right-card-user">
                <img src={Animakid} alt="Animakid" />
                <p>Animakid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Initial;
