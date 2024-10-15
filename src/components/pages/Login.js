import styles from './Login.module.css'
import Container from '../layout/Container'

import LoginForm from '../login/LoginForm'

const Login = () => {
    return (
      <div className={styles.login}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    );
}

export default Login