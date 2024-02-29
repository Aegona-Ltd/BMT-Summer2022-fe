import cn from "@/utils/cn";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  placeholder?: string;
  register?: any;
  className?: string;
  name: string;
  error?: boolean;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  register,
  className,
  name,
  error,
  required = false,
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name={name}
        id={name}
        className={cn(
          "block py-2.5 px-0 w-full text-sm text-grey-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-dark-100 peer",
          className,
          {
            "border-red-400 focus:border-red-400": error,
          }
        )}
        autoComplete=""
        placeholder={placeholder}
        {...(register ? register(name) : {})}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-dark-100 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
      >
        {label} {required && "*"}
      </label>
    </div>
  );
};

export default Input;
