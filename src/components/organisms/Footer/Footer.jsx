import styles from './Footer.module.css';
 
export const Footer = () => {
  return (
    <div className={styles.containerFooter}>

      <div className="izquierda">
        <h1 id='title5'>PUNSHOP</h1>

        <button className={styles.btn}>face</button>
        <button className={styles.btn}>insta</button>
        <button className={styles.btn}>twitter</button>
        <button className={styles.btn}>youtube</button>
      </div>

      <div className={styles.derecha}>
            <p>© 2021 PUNSHOP</p>
            <p>Todos los derechos reservados</p>
      </div>
      
    </div>
  )
}
