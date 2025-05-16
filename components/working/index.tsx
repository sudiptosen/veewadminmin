import Box from "../../components/box";
import { PropsWithChildren } from "react";
import { Loader2 } from "lucide-react";

interface WorkingProps {
  centerScreen?: boolean;
  small?: boolean;
  text?: string;
}

export default function Working(props: PropsWithChildren<WorkingProps>) {
  const { centerScreen, small } = props;
  
  const spinner = (
    <div className="flex flex-col justify-center items-center gap-3">
      <Loader2 className="h-10 w-10 animate-spin text-primary" />
      {props.text && <div className="text-sm text-muted-foreground">{props.text}</div>}
    </div>
  );

  const smallSpinner = (
    <div className="flex flex-row justify-center items-center gap-2">
      <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
      {props.text && <div className="text-xs text-muted-foreground ml-1">{props.text}</div>}
    </div>
  );

  const boxed = (
    <Box otherStyle="p-6 border border-border rounded-lg shadow-sm h-[250px] flex items-center justify-center" widthStyle="w-[300px]">
      {spinner}
    </Box>
  );

  const fullScreenCentered = (
    <Box heightStyle="full-height" widthStyle="w-full" flex="flex items-center justify-center">
      {spinner}
    </Box>
  );

  const smallElement = (
    <div className="m-0 p-0">
      {smallSpinner}
    </div>
  );

  let finalElement = (centerScreen ? fullScreenCentered : small ? smallElement : boxed);
  return finalElement;
}
