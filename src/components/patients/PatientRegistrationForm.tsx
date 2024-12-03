import React, { useState } from 'react';
import { PatientFormData, ValidationErrors } from '../../types/patient';
import { validatePatientForm } from '../../utils/validation';
import InputField from '../forms/InputField';
import SelectField from '../forms/SelectField';
import MedicalHistoryForm from './MedicalHistoryForm';

const initialFormData: PatientFormData = {
  name: '',
  dateOfBirth: '',
  gender: 'Male',
  contact: '',
  email: '',
  address: '',
  identifiers: {},
  emergencyContact: {
    name: '',
    relationship: '',
    contact: '',
  },
  medicalHistory: {
    conditions: [],
    allergies: [],
    medications: [],
  },
};

const genderOptions = [
  { value: 'Male', label: 'Male' },
  { value: 'Female', label: 'Female' },
  { value: 'Other', label: 'Other' },
];

export default function PatientRegistrationForm() {
  const [formData, setFormData] = useState<PatientFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [currentStep, setCurrentStep] = useState<'personal' | 'medical'>('personal');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleMedicalHistoryChange = (medicalHistory: PatientFormData['medicalHistory']) => {
    setFormData((prev) => ({
      ...prev,
      medicalHistory,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePatientForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex space-x-4 mb-6">
        <button
          type="button"
          onClick={() => setCurrentStep('personal')}
          className={`px-4 py-2 rounded-md ${
            currentStep === 'personal'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Personal Information
        </button>
        <button
          type="button"
          onClick={() => setCurrentStep('medical')}
          className={`px-4 py-2 rounded-md ${
            currentStep === 'medical'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Medical History
        </button>
      </div>

      {currentStep === 'personal' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            required
          />
          
          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            error={errors.dateOfBirth}
            required
          />

          <SelectField
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
            required
          />

          <InputField
            label="Contact Number"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            error={errors.contact}
            required
            placeholder="+91 XXXXX XXXXX"
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="patient@example.com"
          />

          <InputField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={errors.address}
            required
          />
        </div>
      ) : (
        <MedicalHistoryForm
          value={formData.medicalHistory}
          onChange={handleMedicalHistoryChange}
        />
      )}

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          onClick={() => setFormData(initialFormData)}
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Register Patient
        </button>
      </div>
    </form>
  );
}