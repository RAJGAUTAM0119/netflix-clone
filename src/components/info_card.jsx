import style from "./info_card.module.css";
function Info_card() {
  return (
    <>
      <div className={style.cardArea}>More reasons to join</div>
      <div className={style.card}>
        <div className={style.infoCard}>
          <h2 className={style.infoCardHeading}>Enjoy on your TV</h2>
          <p className={style.infoCardPara}>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className={style.infoCard}>
          <h2 className={style.infoCardHeading}>
            Download your shows to watch offline
          </h2>
          <p className={style.infoCardPara}>
            Save your favourites easily and always have something to watch.
          </p>
        </div>
        <div className={style.infoCard}>
          <h2 className={style.infoCardHeading}>Watch everywhere</h2>
          <p className={style.infoCardPara}>
            Stream unlimited movies and TV shows on your phone, tablet, laptop
            and TV.
          </p>
        </div>
        <div className={style.infoCard}>
          <h2 className={style.infoCardHeading}>Create profiles for kids</h2>
          <p className={style.infoCardPara}>
            Send kids on adventures with their favourite characters in a space
            made just for them — free with your membership.
          </p>
        </div>
      </div>
    </>
  );
}

export default Info_card;
