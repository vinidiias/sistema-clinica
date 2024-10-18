import styles from './CheckBox.module.css'

const CheckBox = ({ name, text, side, handleOnChange, value, isSelected, customClass }) => {

    return (
      <div className={`${styles.form_control} ${styles[customClass]}`}>
        {side === "left" && (
          <label htmlFor={name} className={styles.label_left}>
            {text}
          </label>
        )}
        <input
          type="checkbox"
          checked={isSelected}
          name={name}
          id={value}
          onChange={() => handleOnChange(name)}
          value={value | ''}
        />
        {side === "right" && (
          <label htmlFor={value} className={styles.label_right}>
            {text}
          </label>
        )}
      </div>
    );
}

export default CheckBox
