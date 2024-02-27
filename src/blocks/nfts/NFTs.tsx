import "./NFTs.css";
import { Eye } from "../../img/img-icons";
import {
  DistantGalaxy,
  LifeOnEdena,
  AstroFiction,
} from "../../img/home/img-nfts";
import { MoonDancer, NebulaKid, Spaceone } from "../../img/home/img-avatars";
import { Button } from "../../components/UI";
import { NFTsCards } from "../../components/cards";

const NFTs = () => {
  return (
    <div className="nfts">
      <div className="nfts-wrap">
        <div className="nfts-title-wrap">
          <div className="nfts-title">
            <h1>Discover More NFTs</h1>
            <div className="nfts-block">
              <p>Explore new trending NFTs</p>
              <Button type="nfts-block-button" destination="/">
                <img src={Eye} alt="Eya" /> See All
              </Button>
            </div>
          </div>
        </div>

        <div className="nfts-cards">
          <NFTsCards
            mainImage={DistantGalaxy}
            name="Distant Galaxy"
            authorImage={MoonDancer}
            authorName="MoonDancer"
            price="1.63 ETH"
            highestBid="0.33 wETH"
            type="nfts-card"
          />

          <NFTsCards
            mainImage={LifeOnEdena}
            name="Life On Edena"
            authorImage={NebulaKid}
            authorName="NebulaKid"
            price="1.63 ETH"
            highestBid="0.33 wETH"
            type="nfts-card"
          />

          <NFTsCards
            mainImage={AstroFiction}
            name="AstroFiction"
            authorImage={Spaceone}
            authorName="Spaceone"
            price="1.63 ETH"
            highestBid="0.33 wETH"
            type="nfts-card"
          />
        </div>
      </div>
    </div>
  );
};

export default NFTs;
