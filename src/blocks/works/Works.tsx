import { Wallet, Collection, Earning } from "../../img/home/img-works";
import "./Works.css";

const Works = () => {
  return (
    <div className="works">
      <div className="works-wrap">
        <div className="works-title-wrap">
          <div className="works-title">
            <h1>How It Works</h1>
            <p>Find Qut How To Get Started</p>
          </div>
        </div>

        <div className="works-cards">
          <div className="works-card">
            <img src={Wallet} alt="Wallet" />
            <h1>Setup Your wallet</h1>
            <p>
              Set up your wallet of choice. <br /> Connect it to the Animarket
              by <br /> clicking the wallet icon in the top <br /> right corner.
            </p>
          </div>

          <div className="works-card">
            <img src={Collection} alt="Wallet" />
            <h1>Create Collection</h1>
            <p>
              Upload your work and setup your <br /> collection. Add a
              description, <br /> social links and floor price.
            </p>
          </div>

          <div className="works-card">
            <img src={Earning} alt="Wallet" />
            <h1>Start Earning</h1>
            <p>
              Choose between auctions and <br /> fixed-price listings. Start
              earning <br /> by selling your NFTs or trading <br /> others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
