import clsx from "clsx";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { RiCheckboxCircleFill } from "react-icons/ri";

export const ViewModeController = ({ name }: { name: string }) => {
  const customClassName = clsx(
    "flex",
    "gap-[15px]",
    "rounded",
    "items-center",
    "border",
    "px-[18px]",
    "py-[10px]",
    {
      "bg-black": name.toLowerCase() == "dark",
      "text-white":
        name.toLowerCase() == "dark" || name.toLowerCase() == "night",
      "bg-[#15202b]": name.toLowerCase() == "night",
      "border-[#1d9bf0]": name.toLowerCase() == "white",
      "border-2": name.toLowerCase() == "white",
    }
  );

  let userModeSelected = "white";

  return (
    <div className={customClassName}>
      {userModeSelected == name.toLowerCase() ? (
        <RiCheckboxCircleFill className="text-[#1d9bf0]" />
      ) : (
        <RiCheckboxBlankCircleLine />
      )}

      <span className="text-[13px]">{name}</span>
    </div>
  );
};
