import React from 'react'

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  title?: string;
  onClick?: () => void;
  isRounded?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
}
export default function Btn({ children, type = "button", style, title, onClick, isRounded, isDisabled, isFullWidth }: ButtonProps) {
  const className=`px-4 py-2 bg-primary text-white font-semibold hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 ${isRounded ? "rounded-full" : "rounded-md"} ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${isFullWidth ? "w-full" : ""}`;
  return (
    <div>
       <button
          type={type}
          style={style}
          title={title}
          onClick={onClick}
          className={className}
        >

            {children}
        </button>
    </div>
  )
}
