import "./Marketplace.css";
import { MagnifyingGlass } from "../../img/img-icons";
import {
  CherryBlossomGirl035,
  ColorfulDog0344,
  ColorfulDog0356,
  DancingRobot0312,
  DesertWalk,
  DesignerBear,
  HappyRobot024,
  HappyRobot032,
  IceCreamApe0324,
  MagicMushroom0325,
  SpaceTravel,
  SunsetDimension,
} from "../../img/marketplace";
import {
  Animakid,
  Shroomie,
  MrFox,
  BeKind2Robots,
  Robotica,
  Keepitreal,
  MoonDancer,
  NebulaKid,
  IceApeClub,
  Catch22,
  PuppyPower,
} from "../../img/marketplace/img-avatars";
import { Link } from "react-router-dom";
import { InputForm } from "../../components/UI";
import { NFTsCards } from "../../components/cards";

const Marketplace = () => {
  return (
    <div className="marketplace">
      <div className="marketplace-wrap">
        <div className="marketplace-upper-block">
          <div className="marketplace-search">
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <InputForm
              type="text"
              className="marketplace-search-input"
              placeholder="Search your favourite NFTs"
              icon={MagnifyingGlass}
              classNameInput="marketplace-search-input-img"
            />
          </div>
        </div>
        <div className="marketplace-lower-block">
          <div className="marketplace-navigation">
            <div className="marketplace-navigation-left">
              <h2>NFTs</h2>
              <div className="marketplace-navigation-left-container">
                <span className="marketplace-navigation-left-span-number">
                  302
                </span>
              </div>
            </div>
            <div className="marketplace-navigation-right">
              <Link
                to="/Collections"
                className="marketplace-navigation-right-link"
              >
                Collections
              </Link>
              <div className="marketplace-navigation-right-container">
                <span className="marketplace-navigation-right-span-number">
                  67
                </span>
              </div>
            </div>
          </div>
          <div className="marketplace-nfts">
            <NFTsCards
              mainImage={MagicMushroom0325}
              name="Magic Mushroom 0325"
              authorImage={Shroomie}
              authorName="Shroomie"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={HappyRobot032}
              name="Happy Robot 032"
              authorImage={BeKind2Robots}
              authorName="BeKind2Robots"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={HappyRobot024}
              name="Happy Robot 024"
              authorImage={BeKind2Robots}
              authorName="BeKind2Robots"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={DesignerBear}
              name="Designer Bear"
              authorImage={MrFox}
              authorName="Mr Fox"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={ColorfulDog0356}
              name="Magic Mushroom 0325"
              authorImage={Keepitreal}
              authorName="Keepitreal"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={DancingRobot0312}
              name="Dancing Robot 0312"
              authorImage={Robotica}
              authorName="Robotica"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={CherryBlossomGirl035}
              name="Cherry Blossom Girl 035"
              authorImage={MoonDancer}
              authorName="MoonDancer"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={SpaceTravel}
              name="Space Travel"
              authorImage={NebulaKid}
              authorName="NebulaKid"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={SunsetDimension}
              name="Sunset Dimension"
              authorImage={Animakid}
              authorName="Animakid"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={DesertWalk}
              name="Desert Walk"
              authorImage={Catch22}
              authorName="Catch 22"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={IceCreamApe0324}
              name="IceCream Ape 0324"
              authorImage={IceApeClub}
              authorName="Ice Ape Club"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />

            <NFTsCards
              mainImage={ColorfulDog0344}
              name="Colorful Dog 0344"
              authorImage={PuppyPower}
              authorName="PuppyPower"
              price="1.63 ETH"
              highestBid="0.33 wETH"
              type="marketplace-nfts-card"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
