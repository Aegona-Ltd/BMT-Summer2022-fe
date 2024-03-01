import { InputHTMLAttributes, MouseEventHandler } from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  theme?: "dark" | "light";
}

export interface IconProps {
  className?: string;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  register?: any;
  className?: string;
  name: string;
  error?: boolean;
  required?: boolean;
  theme?: "dark" | "light";
  defaultValue?: string;
  value?: string;
}
