import "./ConnectWallet.css";
import { Metamask, WalletConnect, Coinbase } from "../../img/img-icons";
import { Button } from "../../components/UI";

const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <div className="connect-wallet-wrap">
        <div className="connect-wallet-left"></div>
        <div className="connect-wallet-right">
          <div className="connect-wallet-right-text">
            <h1>Connect Wallet</h1>
            <p>
              Choose a wallet you want to connect. <br /> There are several
              wallet providers.
            </p>
            <Button type="connect-wallet-right-button" destination="/">
              <img src={Metamask} alt="Coinbase" />
              Metamask
            </Button>
            <Button type="connect-wallet-right-button" destination="/">
              <img src={WalletConnect} alt="Coinbase" />
              Wallet Connect
            </Button>
            <Button type="connect-wallet-right-button" destination="/">
              <img src={Coinbase} alt="Coinbase" />
              Coinbase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
