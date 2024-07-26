'use client';

import React, { type FC, useEffect, useState } from 'react';

interface ToggleButtonProps {
  labels: string[];
  selected?: string;
  onChange?: (selectedLabel: string) => void;
}

const ToggleButton: FC<ToggleButtonProps> = ({
  labels,
  selected,
  onChange,
}) => {
  const [internalSelected, setInternalSelected] = useState(selected);
  useEffect(() => {
    if (selected !== undefined) {
      setInternalSelected(selected);
    }
  }, [selected]);

  const handleSelect = (label: string) => {
    if (selected === undefined) {
      setInternalSelected(label);
    }
    if (onChange) {
      onChange(label);
    }
  };

  return (
    <div className="flex overflow-hidden rounded-xl border border-gray-300">
      {labels.map((label) => (
        <button
          type="button"
          key={label}
          onClick={() => handleSelect(label)}
          className={`flex-1 px-4 py-2 text-center focus:outline-none ${
            internalSelected === label
              ? 'bg-primary text-white'
              : 'bg-white text-gray-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
