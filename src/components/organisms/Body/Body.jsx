import styles from "./Body.module.css";
import { Card } from '../../atoms/card/Card';
import {Ropa} from '../../atoms/clothingSection/Ropa';

export const Body = () => {
  return (
    <div className={styles.containerBody}>

      <div className={styles.contenido}>
        <div className={styles.cardMain}>
          <h1 className={styles.title1}>LO MAS NUEVO</h1>
          <img
            className={styles.cardMain}
            src="hero.png"
            alt="Image My hero academt"
          />
        </div>

        <div className={styles.container}>
          <h1 className={styles.title}>TOP EN VENTAS</h1>
          <div className={styles.cards}>
            <img
              className={styles.card}
              src="manga01.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga02.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga03.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga04.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga05.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga06.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga 08.png"
              alt="Image One Piece"
            />
            <img
              className={styles.card}
              src="manga 09 (1).png"
              alt="Image One Piece"
            />
          </div>
        </div>

        

      </div>


      <h2 className={styles.title2} >Figuras</h2>

      <div className="cards">
        <Card />
        
      </div>


      <div>
        <Ropa />
      </div>
      
    </div>
  );
};
