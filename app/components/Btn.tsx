import { url } from "inspector";
import Link from "next/link";



interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  title?: string;
  onClick?: () => void;
  isRounded?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  className?: string;
  link?: string;
}
export default function Btn({ children, type = "button", style, title, onClick, isRounded, isDisabled, isFullWidth, className, link }: ButtonProps) {
const baseClasses = `px-4 py-2 bg-primary text-white font-semibold hover:bg-primary-dark focus:outline-none ring-2 ring-primary focus:ring-opacity-50 ${
    isRounded ? "rounded-full" : "rounded-md"
  } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${
    isFullWidth ? "w-full" : ""
  }`;  return (
    <div>
      <Link href="">
       <button
          type={type}
          style={style}
          title={title}
          onClick={onClick}
          className={`${className ?? ""} ${baseClasses}`}
        >

            {children}
        </button>
        </Link>
    </div>
  )
}
