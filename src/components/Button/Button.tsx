import {FC, memo } from "react";

interface Props {
  children: string;
  theme: "primary" | "Info" | "Success" | "Warning" | "Danger";
  fill: "solid" | "outline";
}

const Button: FC<Props> = ({ children, theme, fill }) => {
  const generateClasses = function (
    colour: string,
    filltype: "solid" | "outline"
  ) {
    let formedClass = "";
    if (filltype === "outline") {
      formedClass = "rounded-full border border-" + colour + " text-" + colour;
    } else {
      formedClass = "bg-" + colour + " text-white rounded-md";
    }
    return formedClass;
  };
  const themeClasses = {
    primary: {
      color: "primary",
    },
    Info: {
      color: "blue-500",
    },
    Success: {
      color: "green-500",
    },
    Warning: {
      color: "yellow-500",
    },
    Danger: {
      color: "red-500",
    },
  };
  const apply = generateClasses(themeClasses[theme].color, fill);
  return (
    <div>
      <button className={"py-2 px-5 " + apply}>{children}</button>
    </div>
  );
};

Button.defaultProps = {
  fill: "solid",
  theme: "primary",
};

export default memo(Button);
