import styles from './CheckBox.module.css'

const CheckBox = ({ name, text, label, textLabel, handleOnChange, id, value, isSelected, customClass }) => {

    return (
      <div className={`${styles.form_control} ${styles[customClass]}`}>
        <input
          type="checkbox"
          checked={isSelected}
          name={name}
          id={id}
          onChange={() => handleOnChange(value)}
          value={value}
        />
        {text && <h3>{text}</h3>}
        {label && <label htmlFor={label} className={styles.label}>
            {textLabel}
          </label>}
      </div>
    );
}

export default CheckBox
