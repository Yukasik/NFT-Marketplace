import { Initial, Trending, Creators, Browse, NFTs, Mashrooms, Works, Join } from "../../blocks";
import "./Home.css";


const Home = () => {
  return (
    <div className="home">
      <Initial />
      <Trending />
      <Creators />
      <Browse />
      <NFTs />
      <Mashrooms />
      <Works />
      <Join />
    </div>
  );
};

export default Home;
