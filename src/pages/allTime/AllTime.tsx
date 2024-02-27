import { RankingsTitle, RankingsNavigation } from "../../components";
import "./AllTime.css";

const AllTime = () => {
  return (
    <div className="all-time">
      <RankingsTitle />
      <RankingsNavigation
        typeToday="rankings-navigation-not-active"
        typeWeek="rankings-navigation-not-active"
        typeMonth="rankings-navigation-not-active"
        typeTime="rankings-navigation-active"
      />
    </div>
  );
};

export default AllTime;
