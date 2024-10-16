import styles from './Home.module.css'

import { FaPlusCircle } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

import System from '../system/System';

const Home = () => {
    return (
      <div className={styles.home}>
        <h1>Meus sistemas</h1>
        <div className={styles.systems}>
          <System text="Dados Pessoais" icon={<FaAddressCard style={{color: '#fff'}} />} />
          <System text="Consultas" icon={<FaPlusCircle style={{color:'#fff'}} />} />
        </div>
      </div>
    );
}

export default Home