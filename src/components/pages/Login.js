import styles from './Login.module.css'
import Container from '../layout/Container'

import LoginForm from '../login/LoginForm'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const submitHandler = () => {
    navigate('/home')
  }

    return (
      <div className={styles.login}>
        <h1>Login</h1>
        <LoginForm handleSubmit={submitHandler} />
      </div>
    );
}

export default Login