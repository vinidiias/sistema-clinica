import styles from './LoginForm.module.css'
import Input from '../form/Input'
import Submit from '../form/Submit'


const LoginForm = ({ handleSubmit }) => {

    const submit = (e) =>{
      e.preventDefault()

      handleSubmit()
    }

    return (
      <form onSubmit={submit}>
        <Input
          type="text"
          name="name"
          text="Nome:"
          placeholder="Digite seu nome"
          customClass="column"
        />
        <Input
          type="password"
          name="password"
          text="Senha:"
          placeholder="Digite sua senha"
          customClass="column"
        />
        <div className={styles.form_submit}>
          <Submit text="Entrar" />
          <Submit text="Criar conta" />
        </div>
      </form>
    );
}

export default LoginForm