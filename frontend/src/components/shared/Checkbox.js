import React from 'react';

export const Checkbox = ({ children, ...props }) => {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="form-checkbox h-5 w-5 accent-blue-500"
        {...props}
      />
      <span className="ml-2">{children}</span>
    </label>
  );
};
