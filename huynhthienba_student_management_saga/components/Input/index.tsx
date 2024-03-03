import cn from "@/utils/cn";
import { InputProps } from "@/utils/interface";
import React from "react";

const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  register,
  className,
  name,
  error,
  required = false,
  theme = "light",
  defaultValue,
}) => {
  return (
    <div className="relative z-0 w-full mb-5 group">
      <input
        type={type}
        name={name}
        id={name}
        className={cn(
          "block py-2.5 px-0 w-full text-sm text-grey-100 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 peer",
          className,
          {
            "border-red-400 focus:border-red-400": error,
            "focus:border-dark-100": theme === "light" && !error,
            "focus:border-light-100": theme === "dark" && !error,
          }
        )}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...(register ? register(name) : {})}
      />
      <label
        htmlFor={name}
        className={cn(
          "peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7",
          {
            "peer-focus:text-dark-100": theme === "light",
            "peer-focus:text-light-200": theme === "dark",
          }
        )}
      >
        {label} {required && "*"}
      </label>
    </div>
  );
};

export default Input;
