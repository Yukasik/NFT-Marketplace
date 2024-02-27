import React from "react";
import { useNavigate } from "react-router-dom";
import "./Button.css";

export interface ButtonProps {
  children: React.ReactNode;
  destination: string;
  type: string;
}
const Button: React.FC<ButtonProps> = ({ children, destination, type }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(destination);
  };

  return (
    <button className={type} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
