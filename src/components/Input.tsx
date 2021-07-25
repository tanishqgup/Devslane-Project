import { FC, InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
  placeholder: string;
  id: string;
  children?: React.ReactElement;
}

const Input: FC<Props> = ({
  touched,
  error,
  id,
  children,
  placeholder,
  ...rest
}) => {
  return (
    <div className="h-20 mb-1 pt-3 pb-6">
      {id && placeholder && (
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>
      )}
      {children}
      <input
        id={id}
        {...rest}
        required
        className={
          "relative appearance-none rounded-none block p-10 w-full h-12 pl-10 py-5 border-b border-gray-300 placeholder-gray-300 text-gray-900 focus:outline-none focus:ring-indigo-500  focus:border-indigo-500 focus:z-10 sm:text-sm "
        }
        placeholder={placeholder}
      />
      {touched && (
        <div className="text-red-600 font-semibold ml-10 mt-1">{error}</div>
      )}
    </div>
  );
};

Input.defaultProps = {};

export default memo(Input);
