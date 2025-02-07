import { forwardRef } from "react";
import styles from '../../styles/form.module.css';


interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string;
    error ?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({label, error, ...props}, ref) => {
        return (
           <div >
            {/* className="form-floating" */}
            <label className={styles.label}>{label}</label>
            <input 
            ref={ref}
            {...props}
            className={`${styles["form-control"]} form-control mb-2`}
             />
             { error && <p className="text-danger">{error}</p> }
           </div>

        )
    }
)

FormInput.displayName = "FormInput";

export default FormInput;