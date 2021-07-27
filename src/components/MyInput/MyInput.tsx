import { FC, memo } from "react";
import { InputHTMLAttributes } from "react";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children: string;
  type: string;
  touched?: boolean;
  error?: string;
  icon?: React.ReactElement;
  id : string;
}

const MyInput: FC<Props> = ({ children, type, touched, error, id, icon, ...rest }) => {
  return (
    <div className="border-b border-gray-300 w-full mt-3 mb-6">
      <div className="flex">
        <div className="mr-3 h-10 flex items-center">{icon}</div>
        <div className="w-full">
          <input
            id={id}
            type={type}
            placeholder={children}
            className="focus:outline-none w-full h-10"
            {...rest}
          />
        </div>
      </div>
      {touched && <div className="text-red-600">
          {error}
      </div>}
    </div>
  );
};

MyInput.defaultProps = {};

export default memo(MyInput);
