// import React from 'react';
import { User } from 'lucide-react';

interface LoginOption {
  type: string;
  label: string;
  color: string;
}

interface LoginDropdownProps {
  isOpen: boolean;
  onSelect: (type: string) => void;
  options: LoginOption[];
}

export function LoginDropdown({ isOpen, onSelect, options }: LoginDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
      <div className="py-1" role="menu" aria-orientation="vertical">
        {options.map((option) => (
          <button
            key={option.type}
            onClick={() => onSelect(option.type)}
            className={`w-full text-left px-4 py-2 text-sm text-white ${option.color} hover:opacity-90`}
            role="menuitem"
          >
            <User className="h-4 w-4 inline-block mr-2" />
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}