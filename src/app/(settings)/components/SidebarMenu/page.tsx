import { IoExitOutline } from "react-icons/io5";

import { clsxm } from "src/utils/clsxm";
import { SETTINGS_MENU } from "src/utils/constants";

import { useSettingsProvider } from "../../settings/provider";

const SidebarMenu = () => {
  const { currentStep, setStep } = useSettingsProvider();

  return (
    <div className="p-4 pt-12 bg-gray-100 overflow-x-hidden basis-2/6 text-gray-500 dark:bg-[#161616]">
      {SETTINGS_MENU.map((section, index) => (
        <div
          key={`menu-${section.label}-${index}`}
          className="flex flex-col ml-auto"
        >
          {section.label && (
            <span className="ml-auto w-48 text-sm px-2 font-bold mb-2">
              {section.label}
            </span>
          )}
          <ul className="ml-auto space-y-0.5">
            {section.options.map((option) => (
              <li
                key={`option-${option.label}`}
                onClick={() => {
                  setStep(option);
                }}
                className={clsxm(
                  "w-48 flex items-center p-2 font-semibold text-sm rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-[#323232]",
                  {
                    ["bg-gray-200 text-black dark:bg-[#323232] dark:text-[#A5A5A5]"]:
                      currentStep.path === option.path,
                  }
                )}
              >
                <option.icon className="mr-2" />
                {option.label}
              </li>
            ))}
          </ul>

          <hr className="my-3 ml-auto w-48 bg-gray-200 h-0.5" />
        </div>
      ))}
      <div className="p-2 flex items-center w-48 ml-auto cursor-pointer text-red-500 font-semibold">
        <IoExitOutline className="-scale-x-100 h-5 w-5" />
        <span className="ms-3">Log out</span>
      </div>
    </div>
  );
};

export default SidebarMenu;
