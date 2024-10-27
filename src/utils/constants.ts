import {
  FaCog,
  FaUser,
  FaToggleOn,
  FaPuzzlePiece,
  FaPalette,
  FaCalendarAlt,
  FaListUl,
  FaCheckSquare,
  FaVideo,
  FaCube,
  FaBoxOpen,
  FaDollarSign,
  FaCompass,
  FaAt,
  FaBullhorn,
  FaDownload,
  FaFire,
  FaGift,
  FaRocket,
} from "react-icons/fa";

import {
  AppleCalendar,
  AppleMusic,
  Netflix,
  Notion,
  Spotify,
  Weather,
  Zapier,
  Zoom,
} from "src/assets/src";

import { TSETTINGS_MENU } from "./types";
export const SETTINGS_MENU: TSETTINGS_MENU[] = [
  {
    label: "Workspace Settings",
    options: [
      {
        label: "Overview",
        nextStepLabel: "Profile",
        icon: FaCog,
        path: "overview",
        nextStep: "profile",
      },
    ],
  },
  {
    label: "User Settings",
    options: [
      {
        label: "Profile",
        nextStepLabel: "Accounts",
        prevStepLabel: "Overview",
        icon: FaUser,
        path: "profile",
        prevStep: "overview",
        nextStep: "accounts",
      },
      {
        label: "Accounts",
        nextStepLabel: "Integrations",
        prevStepLabel: "Profile",
        icon: FaToggleOn,
        path: "accounts",
        prevStep: "profile",
        nextStep: "integrations",
      },
      {
        label: "Integrations",
        icon: FaPuzzlePiece,
        path: "integrations",
        prevStepLabel: "Accounts",
        nextStepLabel: "General",
        nextStep: "general",
        prevStep: "accounts",
      },
    ],
  },
  {
    label: "App Settings",
    options: [
      {
        label: "General",
        nextStepLabel: "Appearance",
        prevStepLabel: "Integrations",
        icon: FaCog,
        path: "general",
        prevStep: "integrations",
        nextStep: "appearance",
      },
      {
        label: "Appearance",
        nextStepLabel: "Calendars",
        prevStepLabel: "General",
        icon: FaPalette,
        path: "appearance",
        prevStep: "general",
        nextStep: "calendars",
      },
      {
        label: "Calendars",
        nextStepLabel: "Lists",
        prevStepLabel: "Appearance",
        icon: FaCalendarAlt,
        path: "calendars",
        prevStep: "appearance",
        nextStep: "lists",
      },
      {
        label: "Lists",
        nextStepLabel: "Todos",
        prevStepLabel: "Calendars",
        icon: FaListUl,
        path: "lists",
        prevStep: "calendars",
        nextStep: "todos",
      },
      {
        label: "Todos",
        nextStepLabel: "Meetings",
        prevStepLabel: "Lists",
        icon: FaCheckSquare,
        path: "todos",
        prevStep: "lists",
        nextStep: "meetings",
      },
      {
        label: "Meetings",
        nextStepLabel: "Plans",
        prevStepLabel: "Todos",
        icon: FaVideo,
        path: "meetings",
        prevStep: "todos",
        nextStep: "plans",
      },
    ],
  },
  {
    label: "Billing Settings",
    options: [
      {
        label: "Plans",
        nextStepLabel: "Subscriptions",
        prevStepLabel: "Meetings",
        icon: FaCube,
        path: "plans",
        prevStep: "meetings",
        nextStep: "subscriptions",
      },
      {
        label: "Subscriptions",
        nextStepLabel: "Billing",
        prevStepLabel: "Plans",
        icon: FaBoxOpen,
        path: "subscriptions",
        prevStep: "plans",
        nextStep: "billing",
      },
      {
        label: "Billing",
        nextStepLabel: "Quick Access",
        prevStepLabel: "Subscriptions",
        icon: FaDollarSign,
        path: "billing",
        prevStep: "subscriptions",
        nextStep: "quick-access",
      },
    ],
  },
  {
    options: [
      {
        label: "Quick Access",
        icon: FaCompass,
        path: "quick-access",
        nextStepLabel: "Shortcuts",
        prevStepLabel: "Billing",
        prevStep: "billing",
        nextStep: "shortcuts",
      },
      {
        label: "Shortcuts",
        icon: FaAt,
        path: "shortcuts",
        nextStepLabel: "Download Apps",
        prevStepLabel: "Quick Access",
        prevStep: "quick-access",
        nextStep: "download-apps",
      },
      {
        label: "Download Apps",
        icon: FaDownload,
        path: "download-apps",
        nextStepLabel: "What's New",
        prevStepLabel: "Shortcuts",
        prevStep: "shortcuts",
        nextStep: "whats-new",
      },
    ],
  },
  {
    options: [
      {
        label: "What's New",
        icon: FaFire,
        path: "whats-new",
        nextStepLabel: "Early Access",
        prevStepLabel: "Download Apps",
        prevStep: "download-apps",
        nextStep: "early-access",
      },
      {
        label: "Early Access",
        icon: FaRocket,
        path: "early-access",
        nextStepLabel: "Invite Friends",
        prevStepLabel: "What's New",
        prevStep: "whats-new",
        nextStep: "invite-friends",
      },
      {
        label: "Invite Friends",
        icon: FaGift,
        path: "invite-friends",
        nextStepLabel: "Send Feedback",
        prevStepLabel: "Early Access",
        prevStep: "early-access",
        nextStep: "send-feedback",
      },
      {
        label: "Send Feedback",
        icon: FaBullhorn,
        path: "send-feedback",
        prevStepLabel: "Invite Friends",
        prevStep: "invite-friends",
      },
    ],
  },
];

export const THEME_OPTIONS = [
  {
    label: "Light",
    value: "light",
  },
  {
    label: "Dark",
    value: "dark",
  },
  {
    label: "Automatic",
    value: "system",
    description: "Sync theme with your system preference",
  },
];

export const APP_INTEGRATIONS = [
  {
    label: "Apple Calendar",
    description: "Sync events (macOS only)",
    icon: AppleCalendar,
  },
  {
    label: "Spotify",
    description: "Visualize listened songs on your calendar",
    icon: Spotify,
  },
  {
    label: "Zoom",
    description: "Create video calls from your calendar",
    icon: Zoom,
  },
  {
    label: "Notion",
    description: "Project Management & Issue Tracking",
    icon: Notion,
  },
];

export const NEXT_APP_INTEGRATIONS = [
  {
    label: "Apple Music",
    description: "Visualize listened songs on your calendar",
    icon: AppleMusic,
  },
  {
    label: "Zapier",
    description: "Connect to +6,000 apps",
    icon: Zapier,
  },
  {
    label: "Weather",
    description: "Visualize weather on your calendar",
    icon: Weather,
  },
  {
    label: "Netflix",
    description: "Visualize watched show on your calendar",
    icon: Netflix,
  },
];
