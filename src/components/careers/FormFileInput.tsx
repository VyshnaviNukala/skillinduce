import React from 'react';

interface FormFileInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  required?: boolean;
}

export function FormFileInput({ label, name, onChange, accept, required }: FormFileInputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type="file"
        id={name}
        name={name}
        accept={accept}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={onChange}
      />
      {accept && <p className="mt-1 text-sm text-gray-500">Accepted formats: {accept.replace(/\./g, '').toUpperCase()}</p>}
    </div>
  );
}