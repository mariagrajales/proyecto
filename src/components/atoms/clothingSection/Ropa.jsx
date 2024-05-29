import styles from "./Ropa.module.css";

export const Ropa = () => {
  return (
    <div className={styles.contenido}>
      <h1 className={styles.tittle}>Ropa Anime</h1>

      <div className={styles.contenidoRopa}>
        <div className={styles.card}>
          <img
            className={styles.img}
            src="/photosClothing/ropa01.png"
            alt="Public Image"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.img}
            src="/photosClothing/ropa02.png"
            alt="Public Image"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.img}
            src="/photosClothing/ropa03.png"
            alt="Public Image"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.img}
            src="/photosClothing/ropa04.png"
            alt="Public Image"
          />
        </div>

        <div className={styles.card}>
          <img
            className={styles.img}
            src="/photosClothing/ropa05.png"
            alt="Public Image"
          />
        </div>
      </div>
    </div>
  );
};