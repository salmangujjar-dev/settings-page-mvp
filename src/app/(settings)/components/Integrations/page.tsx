import { AiFillMessage } from "react-icons/ai";

import { APP_INTEGRATIONS, NEXT_APP_INTEGRATIONS } from "src/utils/constants";

const Integrations = () => {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-xl font-bold">Integrations</h2>
        <p className="text-gray-600">Connect Amie with your existing tools.</p>
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-600 my-3">Apps</span>
        <div className="flex flex-col gap-y-2">
          {APP_INTEGRATIONS.map((item) => (
            <div
              key={`app-${item.label}`}
              className="flex items-center bg-white rounded-lg p-2 border border-gray-300 cursor-pointer hover:border-gray-400 dark:border-black dark:bg-slate-800"
            >
              <item.icon className="w-10 h-10" />
              <div className="ms-3 flex flex-col">
                <h5 className="text-base font-semibold">{item.label}</h5>
                <span className="text-xs text-gray-600 dark:text-white">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        <hr className="my-6 bg-gray-200 h-0.5" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {NEXT_APP_INTEGRATIONS.map((item) => (
            <div
              key={`next-app-${item.label}`}
              className="flex flex-col justify-between gap-y-2 bg-white rounded-lg p-3 border border-gray-300 dark:border-black dark:bg-slate-800"
            >
              <div className="flex gap">
                <item.icon className="w-10 h-10" />
                <div className="ms-3 flex flex-col">
                  <h5 className="text-base font-semibold ">{item.label}</h5>
                  <span className="text-xs text-gray-600 dark:text-white">
                    {item.description}
                  </span>
                </div>
              </div>
              <button className="bg-[#E7E7E7] rounded-md text-xs py-1 font-semibold hover:bg-[#DDDDDD] dark:bg-slate-700">
                Request
              </button>
            </div>
          ))}
        </div>
        <hr className="my-6 bg-gray-200 h-0.5" />
        <div className="flex items-center p-2 py-3 bg-[#E7E7E7] dark:bg-slate-700 rounded-md">
          <AiFillMessage className="fill-[#959595]" />
          <input
            className="ms-3 bg-transparent w-full text-sm outline-none"
            placeholder="Tell us your dream workflow"
          />
          <button className="ms-2 bg-[#C5C5C5] dark:bg-slate-500 font-semibold text-xs px-2 py-1.5 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
