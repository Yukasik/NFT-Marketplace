import "./Trending.css";
import { Shroomie, MrFox, BeKind2Robots } from "../../img/home/img-avatars";
import {
  NFTDogOne,
  NFTDogTwo,
  NFTDogThree,
  DiscoMachinesOne,
  DiscoMachinesTwo,
  DiscoMachinesThree,
  MagicMushroomsOne,
  MagicMushroomsTwo,
  MagicMushroomsThree,
  NumberNFTs,
} from "../../img/home/img-trending";
import { TrendingCards } from "../../components/cards";

const Trending = () => {
  return (
    <div className="trending">
      <div className="trending-wrap">
        <div className="trending-text-wrap">
          <div className="trending-text">
            <h1>Trending Collection</h1>
            <p>Checkout Our Weekly Updated Trending Collection.</p>
          </div>
        </div>
        <div className="trending-cards">
          <TrendingCards
            mainImage={NFTDogOne}
            secondaryImages={[NFTDogTwo, NFTDogThree, NumberNFTs]}
            title="DSGN Animals"
            authorImage={MrFox}
            authorName="MrFox"
          />
          <TrendingCards
            mainImage={MagicMushroomsOne}
            secondaryImages={[
              MagicMushroomsTwo,
              MagicMushroomsThree,
              NumberNFTs,
            ]}
            title="Magic Mushrooms"
            authorImage={Shroomie}
            authorName="Shroomie"
          />
          <TrendingCards
            mainImage={DiscoMachinesOne}
            secondaryImages={[DiscoMachinesTwo, DiscoMachinesThree, NumberNFTs]}
            title="Disco Machines"
            authorImage={BeKind2Robots}
            authorName="BeKind2Robots"
          />
        </div>
      </div>
    </div>
  );
};

export default Trending;
