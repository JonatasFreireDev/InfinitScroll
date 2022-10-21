import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input(props: IInputProps) {
  const { id, label } = props;

  return (
    <div className="w-full mb-8">
      <label htmlFor={id} className="font-sm text-sm">
        {label}
      </label>
      <input
        className="w-full p-2 rounded-[4px] border-2 border-gray-500 placeholder:text-black placeholder:font-sm placeholder:text-xs placeholder:opacity-50"
        {...props}
      />
    </div>
  );
}
