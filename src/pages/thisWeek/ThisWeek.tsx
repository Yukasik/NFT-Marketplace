import { RankingsTitle, RankingsNavigation } from "../../components";
import "./ThisWeek.css";

const ThisWeek = () => {
  return (
    <div className="this-week">
      <RankingsTitle />
      <RankingsNavigation
        typeToday="rankings-navigation-not-active"
        typeWeek="rankings-navigation-active"
        typeMonth="rankings-navigation-not-active"
        typeTime="rankings-navigation-not-active"
      />
    </div>
  );
};

export default ThisWeek;
