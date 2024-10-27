import { useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { SETTINGS_MENU } from "src/utils/constants";

import { useSettingsProvider } from "../../settings/provider";
import Accounts from "../Accounts/page";
import Appearance from "../Appearance/page";
import Billing from "../Billing/page";
import Calendars from "../Calendars/page";
import General from "../General/page";
import Integrations from "../Integrations/page";
import Lists from "../Lists/page";
import Meetings from "../Meetings/page";
import Overview from "../Overview/page";
import Profile from "../Profile/page";
import Subscriptions from "../Subscriptions/page";
import Todos from "../Todos/page";

const SideMenuContent = () => {
  const { currentStep, setStep } = useSettingsProvider();

  const { push } = useRouter();

  const handlePrevStep = () => {
    if (currentStep.prevStep) {
      const prevStep = findStepByPath(currentStep.prevStep);
      if (prevStep) {
        setStep(prevStep);
      }
    }
  };

  const handleNextStep = () => {
    if (currentStep.nextStep) {
      const nextStep = findStepByPath(currentStep.nextStep);
      if (nextStep) {
        setStep(nextStep);
      }
    }
  };

  const findStepByPath = (path: string) => {
    for (const menu of SETTINGS_MENU) {
      const step = menu.options.find((option) => option.path === path);
      if (step) return step;
    }
    return null;
  };

  return (
    <div className="realtive flex flex-col p-8 md:p-12 overflow-x-hidden basis-2/3 bg-[#F9F9F9] dark:bg-[#181818]">
      <div
        className="absolute top-4 right-7 lg:top-8 lg:right-10 text-center cursor-pointer hover:scale-110 ease-in-out transition-all group flex-1"
        onClick={() => push("/")}
      >
        <div className="w-10 h-10 leading-none rounded-full bg-gray-200 shadow-sm text-gray-900 flex items-center justify-center group-hover:bg-gray-300">
          X
        </div>
        <span className="text-sm text-gray-500 font-semibold tracking-wide">
          ESC
        </span>
      </div>
      <div className="md:max-w-3xl flex flex-col flex-1">
        {(() => {
          switch (currentStep.path) {
            case "integrations":
              return <Integrations />;
            case "overview":
              return <Overview />;
            case "profile":
              return <Profile />;
            case "accounts":
              return <Accounts />;
            case "general":
              return <General />;
            case "appearance":
              return <Appearance />;
            case "calendars":
              return <Calendars />;
            case "lists":
              return <Lists />;
            case "todos":
              return <Todos />;
            case "meetings":
              return <Meetings />;
            case "subscriptions":
              return <Subscriptions />;
            case "billing":
              return <Billing />;
            default:
              return <div>Not Implemented Yet</div>;
          }
        })()}
        <hr className="my-6 bg-gray-200 h-0.5" />
        <div className="flex justify-between gap-x-4 mt-auto">
          {currentStep.prevStep && (
            <div
              className="flex items-center justify-between bg-[#E7E7E7] rounded-lg p-3 flex-1 hover:bg-[#C5C5C5] cursor-pointer"
              onClick={handlePrevStep}
            >
              <FaArrowLeft className="fill-[#999999]" />
              <div className="flex flex-col items-end">
                <span className="text-sm font-semibold">
                  {currentStep.prevStepLabel}
                </span>
                <span className="text-xs">Previous</span>
              </div>
            </div>
          )}
          {currentStep.nextStep && (
            <div
              className="flex flex-row-reverse items-center justify-between bg-[#E7E7E7] rounded-lg p-3 flex-1 hover:bg-[#C5C5C5] cursor-pointer"
              onClick={handleNextStep}
            >
              <FaArrowRight className="fill-[#999999]" />
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {currentStep.nextStepLabel}
                </span>
                <span className="text-xs">Next</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideMenuContent;
