import { ForwardedRef, TextareaHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface ITextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: FieldError;
}

const Textarea = forwardRef(
  (
    { label, id, error, ...rest }: ITextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ) => {
    return (
      <div className="input-container">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <textarea ref={ref} id={id} {...rest} />
        {error ? <span className="p-text">{error.message}</span> : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
export default Textarea;
