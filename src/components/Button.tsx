import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  isBored?: boolean;
};

export const Button = ({
  children,
  isBored = false,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`
        text-white 
        rounded-3xl 
        ${isBored ? `border-[2px]` : ""} 
        ${className}
      `.trim()}
    >
      {children}
    </button>
  );
};
