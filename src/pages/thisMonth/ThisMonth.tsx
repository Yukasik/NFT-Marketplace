import { RankingsTitle, RankingsNavigation } from "../../components";
import "./ThisMonth.css";

const ThisMonth = () => {
  return (
    <div className="this-month">
      <RankingsTitle />
      <RankingsNavigation
        typeToday="rankings-navigation-not-active"
        typeWeek="rankings-navigation-not-active"
        typeMonth="rankings-navigation-active"
        typeTime="rankings-navigation-not-active"
      />
    </div>
  );
};

export default ThisMonth;
