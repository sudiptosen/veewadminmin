import {PropsWithChildren} from "react";

interface ButtonProps {
  caption: string;
  kind?: "primary" | "secondary" | "tertiary"
       | "primary-outline" | "secondary-outline" | "tertiary-outline" | "danger-outline"
       |"primary-disabled" | "secondary-disabled" | "tertiary-disabled" | "danger" | "success" | "warning";
  type?: "button" | "submit" | "reset";
  onClick?: (args?: any) => void;
  children?: any;
  otherStyles?: string;
  disabled?: boolean;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  let bgColor = "bg-primary";
  let borderStyle = "border border-slate-300 dark:border-blue-500";
  let textStyle = "text-white text-sm font-medium";

  const baseStyleNormal = `text-white focus:ring-4 focus:ring-blue-300
    rounded-lg  px-5 py-2.5 dark:bg-blue-600 
    focus:outline-none dark:focus:ring-blue-800`

  const hoverStyles = ``; // `hover:text-white hover:bg-secondary dark:hover:text-white dark:hover:bg-secondary`

  // Add disabledStyles
  const isDisabled = props.disabled || false;
  const disabledStyles = "cursor-not-allowed text-gray-400 opacity-50";

  let baseStyle = `text-sm text-white font-medium ${baseStyleNormal} ${isDisabled ? disabledStyles : hoverStyles}`;

  const baseStyleOutline = `bg-transparent focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800`


  switch (props.kind) {
    case "primary":
      bgColor = "bg-primary";
      borderStyle="";
      break;
    case "secondary":
      bgColor = "bg-secondary";
      borderStyle="";
      break;
    case "tertiary":
      bgColor = "bg-tertiary";
      borderStyle="";
      break;
    case "danger":
      bgColor = "bg-red-400";
      borderStyle = ""
      break;
    case "success":
      bgColor = "bg-lime-600";
      borderStyle = ""
      break;
    case "warning":
      bgColor = "bg-yellow-400";
      borderStyle = ""
      break;
    case "primary-outline":
      textStyle = ` ${isDisabled? '':' text-lime-600 hover:border-lime-500'} `;
      baseStyle = `${baseStyleOutline} ${isDisabled ? disabledStyles : null}`;
      break;
    case "secondary-outline":
      textStyle = ` ${isDisabled? '':' text-yellow-400 hover:border-yellow-400'} `;
      baseStyle = `${baseStyleOutline} ${isDisabled ? disabledStyles : null}`;
      break;
    case "tertiary-outline":
      textStyle = ` ${isDisabled? '':' text-gray-400 hover:border-gray-400'} `;
      baseStyle = `${baseStyleOutline} ${isDisabled ? disabledStyles : null}`;
      break;
    case "danger-outline":
      textStyle = ` ${isDisabled? '':' text-red-300 hover:border-red-300'} `;
      baseStyle = `${baseStyleOutline} ${isDisabled ? disabledStyles : null}`;
      break;
  }

  const disabledStyle = isDisabled?`cursor-not-allowed opacity-40` : '';
  const buttonStyle = `text-sm font-medium rounded-lg px-5 py-2.5 text-center ${bgColor} ${borderStyle} ${baseStyle} ${textStyle} ${props.otherStyles} ${disabledStyle}`;

  return (
    <button type={props.type ? props.type : "button"}
            className={buttonStyle}
            disabled={isDisabled}
            onClick={props.onClick} >{props.caption}</button>
  )
}
