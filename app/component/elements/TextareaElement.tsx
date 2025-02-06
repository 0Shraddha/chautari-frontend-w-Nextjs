import { forwardRef } from "react";

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        <label className="form-label fw-semibold">{label}</label>
        <textarea
          ref={ref}
          {...props}
          className="form-control mb-2"
          rows={6}
        />
        {error && <p className="text-danger">{error}</p>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
