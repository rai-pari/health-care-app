import React from 'react';
import PatientRegistrationForm from '../components/patients/PatientRegistrationForm';

export default function PatientRegistration() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Patient Registration</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="p-6">
          <PatientRegistrationForm />
        </div>
      </div>
    </div>
  );
}