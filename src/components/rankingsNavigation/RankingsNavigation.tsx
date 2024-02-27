import React from "react";
import "./RankingsNavigation.css";
import { Link } from "react-router-dom";

export interface RankingsNavigationProps {
  typeToday: string;
  typeWeek: string;
  typeMonth: string;
  typeTime: string;
}
const RankingsNavigation: React.FC<RankingsNavigationProps> = ({
  typeToday,
  typeWeek,
  typeMonth,
  typeTime,
}) => {
  return (
    <div className="rankings-navigation">
      <Link to="/Rankings" className={typeToday}>
        Today
      </Link>
      <Link to="/This Week" className={typeWeek}>
        This Week
      </Link>
      <Link to="/This Month" className={typeMonth}>
        This Month
      </Link>
      <Link to="/All Time" className={typeTime}>
        All Time
      </Link>
    </div>
  );
};

export default RankingsNavigation;
