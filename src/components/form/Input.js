import styles from './Input.module.css'

const Input = ({ id, type, name, text, title, isSelected, handleOnChange, placeholder, value, autoComplete, customClass}) => {
    return (
      <div
        className={`${styles.form_control} ${
          customClass &&
          customClass
            .split(" ")
            .map((cls) => styles[cls])
            .join(" ")
        }`}
      >
        {text && <label htmlFor={name}>{text}:</label>}
        <input
          type={type}
          name={name}
          checked={isSelected}
          id={id}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
          autoComplete={"" | autoComplete}
        />
      </div>
    );
}

export default Input