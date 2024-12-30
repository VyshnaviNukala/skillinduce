import React from 'react';
import { Check, X } from 'lucide-react';
import type { PasswordValidation } from '../utils/passwordValidation';

interface PasswordStrengthIndicatorProps {
  validation: PasswordValidation;
}

export function PasswordStrengthIndicator({ validation }: PasswordStrengthIndicatorProps) {
  const requirements = [
    { key: 'hasMinLength', label: 'At least 8 characters' },
    { key: 'hasUpperCase', label: 'One uppercase letter' },
    { key: 'hasLowerCase', label: 'One lowercase letter' },
    { key: 'hasNumber', label: 'One number' },
    { key: 'hasSpecialChar', label: 'One special character' },
  ] as const;

  return (
    <div className="mt-4 space-y-2">
      <h4 className="text-sm font-medium text-gray-700">Password requirements:</h4>
      <ul className="space-y-1">
        {requirements.map(({ key, label }) => (
          <li
            key={key}
            className={`text-sm flex items-center space-x-2 ${
              validation[key] ? 'text-green-600' : 'text-gray-500'
            }`}
          >
            {validation[key] ? (
              <Check className="h-4 w-4" />
            ) : (
              <X className="h-4 w-4" />
            )}
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}