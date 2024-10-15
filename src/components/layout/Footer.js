import styles from'./Footer.module.css'

import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.copy_right}>
          <p>&copy; 2024 Todos os Direitos Reservados</p>
          <p style={{display: 'inline-block', marginRight:'5px'}}>Unioeste - Universidade Estadual do Oeste do Paraná</p>
          <a href=""><IoLogoWhatsapp /></a>
          <a href=""><TiSocialInstagram /></a>
          <a href=""><AiFillLinkedin /></a>
          <a href=""><AiOutlineGlobal /></a>
        </div>

      </footer>
    );
}

export default Footer