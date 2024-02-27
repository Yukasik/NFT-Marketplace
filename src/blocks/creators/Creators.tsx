import "./Creators.css";
import {
  Keepitreal,
  DigiLab,
  GravityOne,
  Juanie,
  BlueWhale,
  Robotica,
  RustyRobot,
  Dotgu,
  Ghiblier,
  MrFoxBig,
  AnimakidBig,
  ShroomieBig,
} from "../../img/home/img-avatars";
import { Rocket } from "../../img/img-icons";
import { Button } from "../../components/UI";
import { CreatorsCards } from "../../components/cards";

const Creators = () => {
  return (
    <div className="creators">
      <div className="creators-wrap">
        <div className="creators-text-wrap">
          <div className="creators-text">
            <h1>Top creators</h1>
            <div className="creators-block">
              <p>Checkout Top Rated Creators on the NFT Marketplace</p>
              <Button type="creators-block-button" destination="/">
                <img src={Rocket} alt="Rocket" /> View Rankings
              </Button>
            </div>
          </div>
        </div>
        <div className="creators-cards-wrap">
          <div className="creators-cards">
            <CreatorsCards
              image={Keepitreal}
              number={1}
              name="Keepitreal"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={DigiLab}
              number={2}
              name="DigiLab"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={GravityOne}
              number={3}
              name="GravityOne"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={Juanie}
              number={4}
              name="Juanie"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={BlueWhale}
              number={5}
              name="BlueWhale"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={MrFoxBig}
              number={6}
              name="Mr Fox"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={ShroomieBig}
              number={7}
              name="Shroomie"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={Robotica}
              number={8}
              name="Robotica"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={RustyRobot}
              number={9}
              name="RustyRobot"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={AnimakidBig}
              number={10}
              name="Animakid"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={Dotgu}
              number={11}
              name="Dotgu"
              totalSales="34.53 ETH"
            />

            <CreatorsCards
              image={Ghiblier}
              number={12}
              name="Ghiblier"
              totalSales="34.53 ETH"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creators;
