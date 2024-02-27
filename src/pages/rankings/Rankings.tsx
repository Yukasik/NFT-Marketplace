import { RankingsNavigation, RankingsTitle } from "../../components";
import { RankingsCards } from "../../components/cards";
import "./Rankings.css";
import {
  JaydonEkstromBothman,
  AlfredoSeptimusTerryDorwart,
  AllisonTorff,
  AngelLubinSkylarLevin,
  DavisFranci,
  DavisWorkman,
  JocelynWestervelt,
  KiannaDonin,
  KiannaStanton,
  LindseyLipshutz,
  LiviaRosser,
  LydiaCulhane,
  MariaRosser,
  MarilynTorff,
  PhillipLipshutz,
  RandyCarder,
  RaynaBator,
  RubenCarder,
} from "../../img/rankings";

const Rankings = () => {
  return (
    <div className="rankings">
      <div className="rankings-wrap">
        <RankingsTitle />
        <RankingsNavigation
          typeToday="rankings-navigation-active"
          typeWeek="rankings-navigation-not-active"
          typeMonth="rankings-navigation-not-active"
          typeTime="rankings-navigation-not-active"
        />
        <div className="rankings-block">
          <div className="rankings-block-artist">
            <div className="rankings-block-artist-info">
              <div className="rankings-block-artist-info-left">
                <p>#</p>
                <p className="rankings-block-artist-info-left-artist">Artist</p>
              </div>
              <div className="rankings-block-artist-info-right">
                <p>Change</p>
                <p>NFTs Sold</p>
                <p>Volume</p>
              </div>
            </div>
            <RankingsCards
              number={1}
              image={JaydonEkstromBothman}
              name="Jaydon Ekstrom Bothman"
            />
            <RankingsCards number={2} image={RubenCarder} name="Ruben Carder" />
            <RankingsCards
              number={3}
              image={AlfredoSeptimusTerryDorwart}
              name="Alfredo Septimus"
            />
            <RankingsCards number={4} image={DavisFranci} name="Davis Franci" />
            <RankingsCards number={5} image={LiviaRosser} name="Livia Rosser" />
            <RankingsCards number={6} image={KiannaDonin} name="Kianna Donin" />
            <RankingsCards
              number={7}
              image={PhillipLipshutz}
              name="Phillip Lipshutz"
            />
            <RankingsCards number={8} image={MariaRosser} name="Maria Rosser" />
            <RankingsCards
              number={9}
              image={KiannaStanton}
              name="Kianna Stanton"
            />
            <RankingsCards
              number={10}
              image={AngelLubinSkylarLevin}
              name="Angel Lubin"
            />
            <RankingsCards
              number={11}
              image={AllisonTorff}
              name="Allison Torff"
            />
            <RankingsCards
              number={12}
              image={DavisWorkman}
              name="Davis Workman"
            />
            <RankingsCards
              number={13}
              image={LindseyLipshutz}
              name="Lindsey Lipshutz"
            />
            <RankingsCards
              number={14}
              image={RandyCarder}
              name="Randy Carder"
            />
            <RankingsCards
              number={15}
              image={LydiaCulhane}
              name="Lydia Culhane"
            />
            <RankingsCards number={16} image={RaynaBator} name="Rayna Bator" />
            <RankingsCards
              number={17}
              image={JocelynWestervelt}
              name="Jocelyn Westervelt"
            />
            <RankingsCards
              number={18}
              image={MarilynTorff}
              name="Marilyn Torff"
            />
            <RankingsCards
              number={19}
              image={AngelLubinSkylarLevin}
              name="Skylar Levin"
            />
            <RankingsCards
              number={20}
              image={AlfredoSeptimusTerryDorwart}
              name="Terry Dorwart"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
