import {InputProps} from "@/types/input";
import styles from './input.module.css';
function Input({value,label,onChange,name, type,  ...other}:InputProps){
    return (
        <div className={styles.inputMain}>
          <label htmlFor={label} className={styles.inputLabel}>{label}</label>
          {
            type === "textarea"
            ? <textarea name={name} className={styles.inputField} rows={4} value={value} onChange={onChange} id={label}/>
            : <input type={"text"} name={name} className={styles.inputField} value={value} {...other} onChange={onChange} id={label}/>
          }
        </div>
    )
}

export default Input