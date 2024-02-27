import { Link } from "react-router-dom";
import { MagnifyingGlass } from "../../img/img-icons";
import "./Collections.css";
import { InputForm } from "../../components/UI";

const Collections = () => {
  return (
    <div className="collections">
      <div className="collections-wrap">
        <div className="collections-upper-block">
          <div className="collections-search">
            <h1>Browse Marketplace</h1>
            <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
            <InputForm
              type="text"
              className="collections-search-input"
              placeholder="Search your favourite NFTs"
              icon={MagnifyingGlass}
              classNameInput="collections-search-input-img"
            />
          </div>
        </div>
        <div className="collections-navigation">
          <div className="collections-navigation-left">
            <Link
              to="/Marketplace"
              className="collections-navigation-left-link"
            >
              NFTs
            </Link>
            <div className="collections-navigation-left-container">
              <span className="collections-navigation-left-span-number">
                302
              </span>
            </div>
          </div>
          <div className="collections-navigation-right">
            <h2>Collections</h2>
            <div className="collections-navigation-right-container">
              <span className="collections-navigation-right-span-number">
                67
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
