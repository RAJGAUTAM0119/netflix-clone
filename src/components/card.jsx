import style from "./card.module.css";
import squidgame from "../assets/images/squid-game.webp";
import thug_life from "../assets/images/thug_life.webp";
import retro from "../assets/images/retro.webp";
import raid_2 from "../assets/images/raid_2.webp";
import hit from "../assets/images/hit.webp";

function Card() {
  return (
    <div className={style.blank}>
      <div className={style.movie}>
        <div className={style.trending}>Trending Now</div>
        <div className={style.mov}>
          <img src={squidgame} alt=""></img>
          <img src={thug_life} alt=""></img>
          <img src={retro} alt=""></img>
          <img src={raid_2} alt=""></img>
          <img src={hit} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
