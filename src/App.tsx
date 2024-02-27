import {
  Home,
  CreateAccount,
  ConnectWallet,
  Marketplace,
  Collections,
  Rankings,
  AllTime,
  ThisMonth,
  ThisWeek,
} from "./pages";
import { Footer, Header } from "./components";
import { MyRouter } from "./router/MyRouter";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path={MyRouter.HOME} element={<Home />} />
        <Route path={MyRouter.CREATEACCOUNT} element={<CreateAccount />} />
        <Route path={MyRouter.CONNECTWALLET} element={<ConnectWallet />} />
        <Route path={MyRouter.MARKETPLACE} element={<Marketplace />} />
        <Route path={MyRouter.COLLECTIONS} element={<Collections />} />
        <Route path={MyRouter.ALLTIME} element={<AllTime />} />
        <Route path={MyRouter.RANKINGS} element={<Rankings />} />
        <Route path={MyRouter.THISMONTH} element={<ThisMonth />} />
        <Route path={MyRouter.THISWEEK} element={<ThisWeek />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
