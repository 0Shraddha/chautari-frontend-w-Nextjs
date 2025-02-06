import { forwardRef } from "react";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label : string;
    error ?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
    ({label, error, ...props}, ref) => {
        return (
           <div>
            <label>{label}</label>
            <input 
            ref={ref}
            {...props}
            className="form-control"
             />
             { error && <p className="text-danger">{error}</p> }
           </div>

        )
    }
)

FormInput.displayName = "FormInput";

export default FormInput;