import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  isBored?: boolean;
  borderColor?: string;
};

export const Button = ({
  children,
  isBored,
  borderColor,
  className,
}: ButtonProps) => {
  return (
    <button
      className={`text-white rounded-3xl ${
        isBored && "border-[2px]"
      } ${borderColor} ${className}`}
    >
      {children}
    </button>
  );
};
