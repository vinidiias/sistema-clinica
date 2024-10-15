import styles from'./Footer.module.css'

import { IoLogoWhatsapp } from "react-icons/io";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";


const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>Copyright &copy; 2024 Clínica de Psicologia Unioeste</p>
        <div className={styles.social_list}>
          <a href="">
              <IoLogoWhatsapp />
          </a>
          <a href="">
              <TiSocialInstagram />
          </a>
          <a href="">
              <AiFillLinkedin />
          </a>
          <a href="">
              <AiOutlineGlobal />
          </a>
        </div>
      </footer>
    );
}

export default Footer