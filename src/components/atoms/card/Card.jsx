import styles from "./Card.module.css";

export const Card = () => {
  return (
    <div className={styles.contenido}>
      <div className={styles.card}>
        <img
          className={styles.img}
          src="/photosCards/figura01.png"
          alt="Public Image"
        />
        <h2 className={styles.title}>Yuta Okkotsu | Jujutsu ..</h2>
        <p className={styles.price}>$ 1,200.00</p>

        <div className="btn">
          <button className={styles.button}>
            <img
              className={styles.imgCarrito}
              src="/photosCards/carretilla.png"
              alt="Public Image"
            />
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <img
          className={styles.img}
          src="/photosCards/figura02.png"
          alt="Public Image"
        />
        <h2 className={styles.title}>Kyojuro Rengoku | Demon..</h2>
        <p className={styles.price}>$ 1,500.00</p>

        <div className="btn">
          <button className={styles.button}>
            <img
              className={styles.imgCarrito}
              src="/photosCards/carretilla.png"
              alt="Public Image"
            />
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <img
          className={styles.img}
          src="/photosCards/figura03.png"
          alt="Public Image"
        />
        <h2 className={styles.title}>Naruto Uzumaki | Naruto</h2>
        <p className={styles.price}>$ 800.00</p>

        <div className="btn">
          <button className={styles.button}>
            <img
              className={styles.imgCarrito}
              src="/photosCards/carretilla.png"
              alt="Public Image"
            />
            Agregar al carrito
          </button>
        </div>
      </div>

      <div className={styles.card}>
        <img
          className={styles.img}
          src="/photosCards/figura04.png"
          alt="Public Image"
        />
        <h2 className={styles.title}>Asuka Langley | Evangelion</h2>
        <p className={styles.price}>$ 950.00</p>

        <div className="btn">
          <button className={styles.button}>
            <img
              className={styles.imgCarrito}
              src="/photosCards/carretilla.png"
              alt="Public Image"
            />
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
