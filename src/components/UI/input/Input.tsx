import "./Input.css";
import React from "react";

interface InputProps {
  className: string;
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ className, type, placeholder }) => {
  return (
    <div className="input">
      <input type={type} className={className} placeholder={placeholder} />
    </div>
  );
};

export default Input;
