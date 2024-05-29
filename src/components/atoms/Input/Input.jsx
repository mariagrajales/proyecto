import styles from './Input.module.css';

const Input = ({ type, onChange }) => {
  return (
    <input className={styles.input} type={type} placeholder="Buscar en toda la tienda" onChange={onChange} />
  );
};

export default Input;