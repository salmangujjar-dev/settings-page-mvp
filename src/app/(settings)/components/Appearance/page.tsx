"use client";

import { useTheme } from "next-themes";

import { THEME_OPTIONS } from "src/utils/constants";

const Appearance = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <h2 className="text-xl font-bold mb-5">Appearance</h2>
      <div className="flex flex-col">
        <h3 className="text-lg font-bold">Theme</h3>
        <span className="text-gray-400">
          Choose a preferred theme for the app.
        </span>
        <div className="flex flex-col gap-y-2">
          {THEME_OPTIONS.map((item) => (
            <label
              key={`${item.label}`}
              htmlFor={item.label}
              className="flex items-center p-3 gap-x-2 bg-gray-200 dark:bg-[#454545] rounded-lg cursor-pointer"
            >
              <input
                id={item.label}
                name="theme-radio"
                type="radio"
                value={item.value}
                checked={item.value === theme}
                className="w-5 h-5 outline-none accent-gray-200 dark:accent-gray-400 cursor-pointer"
                onChange={() => setTheme(item.value)}
              />

              <div className="ms-2 flex flex-col">
                <span className="text-lg font-semibold capitalize">
                  {item.label}
                </span>
                <span className="text-gray-500 dark:text-[#979797] text-sm">
                  {item?.description}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appearance;
