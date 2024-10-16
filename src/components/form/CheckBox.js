import styles from './CheckBox.module.css'

const CheckBox = ({ name, text, handleOnChange, handleSetShowCurso, placeholder, value, selected, customClass }) => {

    return (
      <div className={`${styles.form_control} ${styles[customClass]}`}>
        <input
          type="checkbox"
          checked = {selected === name}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={() => handleOnChange(name)}
          value={value}
          onClick={handleSetShowCurso}
        />
        <label htmlFor={name}>{text}</label>
      </div>
    )
}

export default CheckBox