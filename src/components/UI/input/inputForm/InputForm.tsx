import React from "react";
import "./InputForm.css";

interface InputFormProps {
  className: string;
  type: string;
  placeholder: string;
  icon: string;
  classNameInput: string;
}

const InputForm: React.FC<InputFormProps> = ({
  className,
  type,
  placeholder,
  icon,
  classNameInput,
}) => {
  return (
    <label className="input-form">
      <input type={type} className={className} placeholder={placeholder} />
      <img src={icon} alt="icon" className={classNameInput} />
    </label>
  );
};

export default InputForm;
