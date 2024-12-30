import { useState } from 'react';

export interface PasswordValidation {
  hasMinLength: boolean;
  hasUpperCase: boolean;
  hasLowerCase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

export const validatePassword = (password: string): PasswordValidation => {
  return {
    hasMinLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
};

export const usePasswordValidation = (initialPassword = '') => {
  const [validation, setValidation] = useState<PasswordValidation>(() =>
    validatePassword(initialPassword)
  );

  const updateValidation = (password: string) => {
    setValidation(validatePassword(password));
  };

  const isValid = Object.values(validation).every(Boolean);

  return { validation, updateValidation, isValid };
};