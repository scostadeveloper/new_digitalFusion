import { useState, useCallback, useMemo } from 'react';

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
  phone?: boolean;
  custom?: (value: string) => string | null;
}

export interface FieldConfig {
  [fieldName: string]: ValidationRule;
}

export interface FormData {
  [fieldName: string]: string;
}

export interface FormErrors {
  [fieldName: string]: string;
}

export interface UseFormValidationReturn {
  formData: FormData;
  errors: FormErrors;
  isValid: boolean;
  isSubmitting: boolean;
  handleInputChange: (name: string, value: string) => void;
  validateField: (name: string, value: string) => string;
  validateForm: () => boolean;
  resetForm: () => void;
  setSubmitting: (submitting: boolean) => void;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[\+]?[1-9][\d]{0,3}[\s\-\(]?[\d]{2,3}[\s\-\)]?[\d]{3,5}[\s\-]?[\d]{3,5}$/;

export function useFormValidation(
  initialData: FormData,
  fieldConfigs: FieldConfig
): UseFormValidationReturn {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = useCallback((name: string, value: string): string => {
    const config = fieldConfigs[name];
    if (!config) return '';

    // Required validation
    if (config.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} é obrigatório`;
    }

    // Skip other validations if field is empty and not required
    if (!value.trim() && !config.required) {
      return '';
    }

    // Min length validation
    if (config.minLength && value.length < config.minLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} deve ter pelo menos ${config.minLength} caracteres`;
    }

    // Max length validation
    if (config.maxLength && value.length > config.maxLength) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} deve ter no máximo ${config.maxLength} caracteres`;
    }

    // Email validation
    if (config.email && !emailRegex.test(value)) {
      return 'Por favor, insira um email válido';
    }

    // Phone validation
    if (config.phone && !phoneRegex.test(value)) {
      return 'Por favor, insira um telefone válido';
    }

    // Pattern validation
    if (config.pattern && !config.pattern.test(value)) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} tem formato inválido`;
    }

    // Custom validation
    if (config.custom) {
      const customError = config.custom(value);
      if (customError) return customError;
    }

    return '';
  }, [fieldConfigs]);

  const handleInputChange = useCallback((name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    let isFormValid = true;

    Object.keys(fieldConfigs).forEach(fieldName => {
      const error = validateField(fieldName, formData[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isFormValid = false;
      }
    });

    setErrors(newErrors);
    return isFormValid;
  }, [formData, fieldConfigs, validateField]);

  const resetForm = useCallback(() => {
    setFormData(initialData);
    setErrors({});
    setIsSubmitting(false);
  }, [initialData]);

  const setSubmitting = useCallback((submitting: boolean) => {
    setIsSubmitting(submitting);
  }, []);

  const isValid = useMemo(() => {
    return Object.keys(fieldConfigs).every(fieldName => {
      const value = formData[fieldName] || '';
      return !validateField(fieldName, value);
    });
  }, [formData, fieldConfigs, validateField]);

  return {
    formData,
    errors,
    isValid,
    isSubmitting,
    handleInputChange,
    validateField,
    validateForm,
    resetForm,
    setSubmitting
  };
}

export default useFormValidation;