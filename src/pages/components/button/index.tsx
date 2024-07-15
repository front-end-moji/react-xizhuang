import clsx from "clsx";
import { PropsWithChildren } from "react";
import "./index.css";

interface IProps {
  onClick?: () => void;
  className?: string;
  type: "light" | "star";
  disable?: boolean;
}

export default function Button(props: PropsWithChildren<IProps>) {
  const { type, onClick, disable } = props;

  if (disable) {
    return (
      <div
        className={clsx(
          "border border-text-gray-500 text-gray-500 flex items-center justify-center w-full cursor-pointer commonText",
          props.className
        )}
        onClick={onClick}
      >
        {props.children}
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "light commonText",
        props.className,
        {
          light: type === "light",
        },
        "py-[10px] px-[20px] sm:min-h-[30px] mobile:py-[6px] mobile:px-[12px]"
      )}
      onClick={onClick}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {props.children}
    </div>
  );
}
