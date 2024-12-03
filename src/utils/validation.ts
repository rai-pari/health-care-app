import { PatientFormData, ValidationErrors } from '../types/patient';

export const validatePatientForm = (data: PatientFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!data.dateOfBirth) {
    errors.dateOfBirth = 'Date of birth is required';
  }

  if (!data.contact.trim()) {
    errors.contact = 'Contact number is required';
  } else if (!/^\+?[\d\s-]{10,}$/.test(data.contact)) {
    errors.contact = 'Invalid contact number';
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  if (!data.address.trim()) {
    errors.address = 'Address is required';
  }

  return errors;
};