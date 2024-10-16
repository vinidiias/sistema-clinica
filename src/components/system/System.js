import styles from './System.module.css'

const System = ({ icon, text }) => {
    return (
        <button className={styles.btn}>
            {icon}
            <h3>{text}</h3>
        </button>
    )
}

export default System