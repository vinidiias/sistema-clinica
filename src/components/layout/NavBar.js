import styles from './NavBar.module.css'
import { RiMentalHealthFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
                <Link to="/">
                    <RiMentalHealthFill />
                    <h1>Clínica</h1>
                </Link>
                <ul className={styles.list}>
                    <li><Link to="/contact">Contato</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                </ul>
        </nav>
    )
}

export default NavBar