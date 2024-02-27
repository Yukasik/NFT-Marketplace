import { BrowseCards } from "../../components/cards";
import {
  Art,
  Collectibles,
  Music,
  Photography,
  Video,
  Utility,
  Sport,
  VirtualWorlds,
} from "../../img/home/img-browse";
import "./Browse.css";

const Browse = () => {
  return (
    <div className="browse">
      <div className="browse-wrap">
        <div className="browse-title">
          <h1>Browse Categories</h1>
        </div>
      </div>
      <div className="browse-cards-wrap">
        <div className="browse-cards">
          <BrowseCards image={Art} text="Art" />
          <BrowseCards image={Collectibles} text="Collectibles" />
          <BrowseCards image={Music} text="Music" />
          <BrowseCards image={Photography} text="Photography" />
          <BrowseCards image={Video} text="Video" />
          <BrowseCards image={Utility} text="Utility" />
          <BrowseCards image={Sport} text="Sport" />
          <BrowseCards image={VirtualWorlds} text="VirtualWorlds" />
        </div>
      </div>
    </div>
  );
};

export default Browse;
