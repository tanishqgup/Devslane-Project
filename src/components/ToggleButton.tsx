import { Dispatch, FC, Fragment, memo, SetStateAction } from "react";
import { Switch } from "@headlessui/react";

interface Props {
  checked: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

const ToggleButton: FC<Props> = ({
  checked: enable,
  onChange: setEnable,
}) => {
    const translatoryClasses = (enable ? "translate-x-5 bg-white" : "translate-x-0.5 bg-primary");
    const onorOff = (enable ? "bg-primary" : "bg-gray-300");
  return (
    <Switch.Group as={Fragment}>
      <div>
        <Switch
          checked={enable}
          onChange={setEnable}
          className={onorOff +  " relative inline-flex items-center h-4 rounded-full w-8 ml-2 focus:outline-none focus:ring-2"}
        >
          <span
            className={translatoryClasses + " inline-block w-2.5 h-2.5 rounded-full transform transition ease-in-out duration-200"}
          />
        </Switch>
      </div>
    </Switch.Group>
  );
};

ToggleButton.defaultProps = {};

export default memo(ToggleButton);
