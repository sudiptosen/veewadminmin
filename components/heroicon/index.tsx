import {
  ArrowDownOnSquareStackIcon,
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowUpIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChatBubbleBottomCenterTextIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  DocumentChartBarIcon,
  DevicePhoneMobileIcon,
  DocumentArrowUpIcon,
  InformationCircleIcon,
  UserCircleIcon,
  LockClosedIcon,
  UserGroupIcon,
  UserIcon,
  ChartPieIcon,
  TableCellsIcon,
  PresentationChartBarIcon,
  PresentationChartLineIcon,
  EyeIcon,
  EyeSlashIcon,
  ChartBarIcon,
  MinusCircleIcon,
  CheckIcon,
  XCircleIcon,
  XMarkIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  RocketLaunchIcon,
  RectangleGroupIcon,
  BriefcaseIcon,
  HomeModernIcon,
  SunIcon,
  BuildingOffice2Icon,
  PuzzlePieceIcon,
  PencilIcon,
  TrashIcon,
  GiftTopIcon,
  NoSymbolIcon,
  LightBulbIcon} from "@heroicons/react/24/outline";
import Box from "../../components/box";
import {ReactElement} from "react";


interface HeroIconProps {
  icon: string;
  other?:string; // E.g. other={"text-[32px] " + color }
  size?: string;   // E.g. size="w-10 h-10";
  className?: string; // w-10 h-10 text-primary-light dark:text-primary-dark
  onClick?: () => void;
}

function HeroIcon(props: HeroIconProps) {
  let textStyles = "text-primary-light dark:text-primary-dark font-light";
  let style =props.other? `${props.other}` : "text-primary-light dark:text-primary-dark";

  if(props.size) {
    style += ` ${props.size}`;
  }

  if(style.indexOf("h-") === -1) {
    style += " h-6";
  }
  if(style.indexOf("w-") === -1) {
    style += " w-6";
  }

  if (style.indexOf("text-") === -1) {
    style += ` ${textStyles}`;
  }

  // replace everything if className is specified
  if(props.className && props.className.length > 0) {
    style = `${props.className}`;
  }

  let retVal: ReactElement  = <NoSymbolIcon className={style} ></NoSymbolIcon>;
  switch (props.icon) {
    case "user-group":
      retVal = <UserGroupIcon className={style} ></UserGroupIcon>
      break;
    case "user-circle":
      retVal = <UserCircleIcon className={style} ></UserCircleIcon>
      break;
    case "user":
      retVal = <UserIcon className={style} ></UserIcon>
      break;
    case "document-duplicate":
      retVal = <DocumentDuplicateIcon className={style} ></DocumentDuplicateIcon>
      break;
    case "document-chart-bar":
      retVal = <DocumentChartBarIcon className={style} ></DocumentChartBarIcon>
      break;
    case "chevron-down":
      retVal = <ChevronDownIcon className={style} ></ChevronDownIcon>
      break;
    case "chevron-up":
      retVal = <ChevronUpIcon className={style} ></ChevronUpIcon>
      break;
    case "cog-6-tooth":
      retVal = <Cog6ToothIcon className={style} ></Cog6ToothIcon>
      break;
    case "lock-closed":
      retVal = <LockClosedIcon className={style} ></LockClosedIcon>
      break;
    case "device-phone-mobile":
      retVal = <DevicePhoneMobileIcon className={style} ></DevicePhoneMobileIcon>
      break;
    case "document-arrow-up":
      retVal = <DocumentArrowUpIcon className={style} ></DocumentArrowUpIcon>
      break;
    case "chat-bubble-bottom-center-icon":
      retVal = <ChatBubbleBottomCenterTextIcon className={style} ></ChatBubbleBottomCenterTextIcon>
      break;
    case "arrow-left-on-rectangle":
      retVal = <ArrowLeftOnRectangleIcon className={style} ></ArrowLeftOnRectangleIcon>
      break;
    case "arrow-down-on-square-stack":
      retVal = <ArrowDownOnSquareStackIcon className={style} ></ArrowDownOnSquareStackIcon>
      break;
    case "arrow-down":
      retVal = <ArrowDownIcon className={style} ></ArrowDownIcon>
      break;
    case "arrow-up":
      retVal = <ArrowUpIcon className={style} ></ArrowUpIcon>
      break;
    case "chart-pie":
      retVal = <ChartPieIcon className={style} ></ChartPieIcon>
      break;
    case "chart-bar":
      retVal = <ChartBarIcon className={style} ></ChartBarIcon>
      break;
    case "table-cells":
      retVal = <TableCellsIcon className={style} ></TableCellsIcon>
      break;
    case "presentation-chart-bar":
      retVal = <PresentationChartBarIcon className={style} ></PresentationChartBarIcon>
      break;
    case "presentation-chart-line":
      retVal = <PresentationChartLineIcon className={style} ></PresentationChartLineIcon>
      break;
    case "eye":
      retVal = <EyeIcon className={style} ></EyeIcon>
      break;
    case "eye-slash":
      retVal = <EyeSlashIcon className={style} ></EyeSlashIcon>
      break;
    case "minus-circle":
      retVal = <MinusCircleIcon className={style} ></MinusCircleIcon>
      break;
    case "check":
      retVal = <CheckIcon className={style} ></CheckIcon>
      break;
    case "x-circle":
      retVal = <XCircleIcon className={style} ></XCircleIcon>
      break;
    case "plus-circle":
      retVal = <PlusCircleIcon className={style} ></PlusCircleIcon>
      break;
    case "plus-circle-filled":
      retVal = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="green" className={`${style} text-4xl`}>
        <path fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
              clipRule="evenodd"/>
      </svg>
      break;
    case "question-mark-circle":
      retVal = <QuestionMarkCircleIcon className={style}></QuestionMarkCircleIcon>
      break;
    case "information-circle":
      retVal = <InformationCircleIcon className={style}></InformationCircleIcon>
      break;
    case "rocket-launch":
      retVal = <RocketLaunchIcon className={style}></RocketLaunchIcon>
      break;
    case "rectangle-group":
      retVal = <RectangleGroupIcon className={style} ></RectangleGroupIcon>
      break;
    case "x-mark":
      retVal = <XMarkIcon className={style} ></XMarkIcon>
      break;
    case "briefcase":
      retVal = <BriefcaseIcon className={style} ></BriefcaseIcon>
      break;
    case "home-modern":
      retVal = <HomeModernIcon className={style} ></HomeModernIcon>
      break;
    case "refresh":
      retVal = <ArrowPathIcon className={style} ></ArrowPathIcon>
      break;
    case "sun":
      retVal = <SunIcon className={style} ></SunIcon>
      break;
    case "office":
      retVal = <BuildingOffice2Icon className={style} ></BuildingOffice2Icon>
      break;
    case "widget":
      retVal = <PuzzlePieceIcon className={style} ></PuzzlePieceIcon>
      break;
    case "light-bulb":
      retVal = <LightBulbIcon className={style} ></LightBulbIcon>
      break;
    case "pencil":
      retVal = <PencilIcon className={style} ></PencilIcon>
      break;
    case "trash":
      retVal = <TrashIcon className={style} ></TrashIcon>
      break;
    case "gift-top":
      retVal = <GiftTopIcon className={style} ></GiftTopIcon>
      break;
    default:
      break;
  }
  return (
    <Box noSpacing={true} background="none" onClick={props.onClick}>
      {retVal}
    </Box>
  );
}

export default HeroIcon;

