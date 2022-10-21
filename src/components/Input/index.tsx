import { ForwardRefRenderFunction, forwardRef } from "react";

export interface IInputProps {
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, any> = (
  props,
  ref
) => {
  const { label } = props;

  return (
    <div className="w-full mb-8">
      <label htmlFor={label} className="font-sm text-sm">
        {label}
      </label>
      <input
        id={label}
        ref={ref}
        {...props}
        className="w-full p-2 rounded-[4px] border-2 border-gray-500 placeholder:text-black placeholder:font-sm placeholder:text-xs placeholder:opacity-50"
      />
    </div>
  );
};

export const Input = forwardRef(InputBase);
