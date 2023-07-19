import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { FieldError } from "react-hook-form";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: FieldError;
  id?: string;
}

const Input = forwardRef(
  (
    { label, id, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className="input-container">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input ref={ref} id={id} {...rest} />
        {error ? <span className="p-text">{error.message}</span> : null}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
