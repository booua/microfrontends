import React, { type FC } from 'react';

interface IToggleSwitch {
  id: string;
  label?: string;
}

export const ToggleSwitch: FC<IToggleSwitch> = ({ label, id }) => {
  return (
    <label className="inline-flex cursor-pointer items-center" htmlFor={id}>
      <input id={id} type="checkbox" value="" className="peer sr-only" />
      <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:size-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none rtl:peer-checked:after:-translate-x-full " />
      <span className="ms-3 text-sm font-medium text-slate-400  peer-checked:text-primary ">
        {label}
      </span>
    </label>
  );
};
