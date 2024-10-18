import styles from './Input.module.css'

const Input = ({ type, name, text, isSelected, handleOnChange, placeholder, value, autoComplete, customClass}) => {
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
        <label htmlFor={name}>{text}:</label>
        <input
          type={type}
          name={name}
          checked={isSelected}
          id={name}
          placeholder={placeholder}
          onChange={handleOnChange}
          value={value}
          autoComplete={"" | autoComplete}
        />
      </div>
    );
}

export default Input