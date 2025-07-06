import styles from './info_card.module.css';

const cardData = [
  {
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
  },
  {
    title: 'Download your shows to watch offline',
    description: 'Save your favourites easily and always have something to watch.',
  },
  {
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
  },
  {
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
  },
];

function InfoCard({ title, description }) {
  return (
    <div className={styles.infoCard}>
      <h2 className={styles.infoCardHeading}>{title}</h2>
      <p className={styles.infoCardPara}>{description}</p>
    </div>
  );
}

function InfoCardContainer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>More reasons to join</h1>
      <div className={styles.cardGrid}>
        {cardData.map((card, index) => (
          <InfoCard key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default InfoCardContainer;