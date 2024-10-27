import { IconType } from "react-icons";

export type TSETTINGS_OPTIONS = {
  label: string;
  icon: IconType;
  path: string;
  nextStepLabel?: string;
  nextStep?: string;
  prevStepLabel?: string;
  prevStep?: string;
};

export type TSETTINGS_MENU = {
  label?: string;
  options: TSETTINGS_OPTIONS[];
};
