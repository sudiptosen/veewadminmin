import React, {PropsWithChildren} from 'react';

export interface BoxProps {
  id?: number;
  children: React.ReactNode;
  background?: 'primary' | 'secondary' | 'tertiary' | 'none';
  corner?: 'rounded' | 'rounded-t' | 'rounded-b' | 'rounded-l' | 'rounded-r' | 'rounded-tl'
    | 'rounded-tr' | 'rounded-bl' | 'rounded-br';
  heightStyle?: 'full-height' | 'full';
  widthStyle?: string;
  otherStyle?: string;
  textStyle?: string;
  flex?: string;
  noSpacing?: boolean;
  overrideAllStyle?: string;
  onClick?: (id?: number) => void;
}


function Box(props: PropsWithChildren<BoxProps>) {
  const {id, heightStyle="", background="", corner="", widthStyle="", flex="", otherStyle="", overrideAllStyle="",
        children, noSpacing=false, textStyle, onClick} = props;

  const defaultFlex = "flex flex-col justify-center items-center";
  const defaultWidth = "w-max"; // default width is w-max = width of content
  const defaultText = "text-primary-dark";

  let hs = getHeightVariant(heightStyle);
  let bg = getBackgroundColorVariant(background);
  let crs = getCornerVariant(corner);
  let ws = widthStyle? widthStyle : defaultWidth;
  let fs = flex? flex : defaultFlex;
  let ns = noSpacing? "m-0 p-0" : "";
  let tx = textStyle? textStyle: defaultText;
  let other = otherStyle? otherStyle : "border-0 font-thin";

  let finalStyle = overrideAllStyle? overrideAllStyle : `${fs} ${hs} ${bg} ${crs} ${ws} ${tx} ${other} ${ns}`;
  return (
    <div className={finalStyle} onClick={emitOnClick}>{children}</div>
  );

  function emitOnClick() {
    if(onClick && id) {
      onClick(id || -1);
      return;
    }

    if(onClick) {onClick();}
  }
}

function getCornerVariant(variant: string) {
  let cornerVariant: string = "";

  switch (variant) {
    case "rounded":
      cornerVariant = "rounded";
      break;
    case "rounded-t":
      cornerVariant = "rounded-t";
      break;
    case "rounded-b":
      cornerVariant = "rounded-b";
      break;
    case "rounded-l":
      cornerVariant = "rounded-l";
      break;
    case "rounded-r":
      cornerVariant = "rounded-r";
      break;
    case "rounded-tl":
      cornerVariant = "rounded-tl";
      break;
    case "rounded-tr":
      cornerVariant = "rounded-tr";
      break;
    case "rounded-bl":
      cornerVariant = "rounded-bl";
      break;
    case "rounded-br":
      cornerVariant = "rounded-br";
      break;
    default:
      break;
  }
  return cornerVariant;
}

function getBackgroundColorVariant(variant: string) {
  let colorVariant: string = "bg-none";

  switch (variant) {
    case "primary":
      colorVariant = "bg-primary";
      break;
    case "secondary":
      colorVariant = "bg-secondary";
      break;
    case "tertiary":
      colorVariant = "bg-tertiary";
      break;
    case "none":
      colorVariant = "bg-none";
      break;
    default:
      break;
  }
  return colorVariant;
}

function getHeightVariant(variant: string) {
  let sizeVariant: string = "full";

  switch (variant) {
    case "full":
      sizeVariant = "w-full h-screen";
      break;
    case "full-height":
      sizeVariant = "h-screen";
      break;
    default:
      break;
  }
  return sizeVariant;
}

export default Box;
