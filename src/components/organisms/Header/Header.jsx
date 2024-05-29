import styles from "./Header.module.css";
import Input from '../../atoms/Input/Input';

export const Header = () => {
  return (
    <div className="containerMain">
      <div className={`${styles.containerHeader} ${styles.flexContainer}`}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src="1.png" alt="Image 1" />
          <h1 className={styles.tittle}>PUNSHOP</h1>
        </div>

        <div className={styles.containerBtn}>
          <button className={styles.btnService}>Servicio a cliente</button>
          <button className={styles.btn} >Login</button>
          <button className={styles.btn}>Registro</button>
        </div>
      </div>

      <div className={styles.secctionBlack}>
        <button className={styles.btndSecctionBlack}>MANGAS</button>
        <button className={styles.btndSecctionBlack}>FIGURAS</button>
        <button className={styles.btndSecctionBlack}>ROPA</button>
        <Input />
      </div>

      <div className={styles.secctionRed}>
        <img className={styles.photoRed} src="PUN-SHop.png" alt="imagen de promocion" />

      </div>


    </div>
  );
};
