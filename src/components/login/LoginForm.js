import styles from './LoginForm.module.css'

import Input from '../form/Input'
import Submit from '../form/Submit'


const LoginForm = () => {
    return (
      <form action="">
        <Input
          type="text"
          name="name"
          text="Nome:"
          placeholder="Digite seu nome"
          value=""
        />
        <Input
          type="password"
          name="password"
          text="Senha:"
          placeholder="Digite sua senha"
          value=""
        />
        <Submit text="Entrar" />
      </form>
    );
}

export default LoginForm