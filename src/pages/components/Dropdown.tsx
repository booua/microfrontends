'use client';

import React, { type FC } from 'react';

interface DropdownProps {
  options: string[];
  onChange?: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, onChange }) => {
  const handleChange = (e: any) => {
    // TODO
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <div className="relative inline-block bg-white text-left">
      <select
        onChange={handleChange}
        className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      >
        {options.map((option, index) => (
          <option key={`${index * 2}-${option}`} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
