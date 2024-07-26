'use client';

import React, { useState } from 'react';
import Datepicker, { type DateValueType } from 'react-tailwindcss-datepicker';

const DatePicker = () => {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: DateValueType) => {
    setValue(newValue);
  };

  return (
    <Datepicker value={value} onChange={handleValueChange} showShortcuts />
  );
};

export default DatePicker;
