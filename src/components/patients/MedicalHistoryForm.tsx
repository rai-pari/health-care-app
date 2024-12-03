import React, { useState } from 'react';
import { PatientFormData } from '../../types/patient';
import InputField from '../forms/InputField';

interface MedicalHistoryFormProps {
  value: PatientFormData['medicalHistory'];
  onChange: (medicalHistory: PatientFormData['medicalHistory']) => void;
}

export default function MedicalHistoryForm({ value, onChange }: MedicalHistoryFormProps) {
  const [newCondition, setNewCondition] = useState('');
  const [newAllergy, setNewAllergy] = useState('');
  const [newMedication, setNewMedication] = useState('');

  const handleAddItem = (
    field: 'conditions' | 'allergies' | 'medications',
    item: string,
    clearInput: () => void
  ) => {
    if (item.trim()) {
      onChange({
        ...value,
        [field]: [...value[field], item.trim()]
      });
      clearInput();
    }
  };

  const handleRemoveItem = (
    field: 'conditions' | 'allergies' | 'medications',
    index: number
  ) => {
    onChange({
      ...value,
      [field]: value[field].filter((_, i) => i !== index)
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Medical History</h3>
        
        {/* Medical Conditions */}
        <div className="mb-6">
          <div className="flex gap-2 mb-2">
            <InputField
              label="Add Medical Condition"
              name="newCondition"
              value={newCondition}
              onChange={(e) => setNewCondition(e.target.value)}
              placeholder="Enter medical condition"
            />
            <button
              type="button"
              onClick={() => handleAddItem('conditions', newCondition, () => setNewCondition(''))}
              className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {value.conditions.map((condition, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-blue-100 px-3 py-1 rounded-full"
              >
                {condition}
                <button
                  type="button"
                  onClick={() => handleRemoveItem('conditions', index)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div className="mb-6">
          <div className="flex gap-2 mb-2">
            <InputField
              label="Add Allergy"
              name="newAllergy"
              value={newAllergy}
              onChange={(e) => setNewAllergy(e.target.value)}
              placeholder="Enter allergy"
            />
            <button
              type="button"
              onClick={() => handleAddItem('allergies', newAllergy, () => setNewAllergy(''))}
              className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {value.allergies.map((allergy, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-red-100 px-3 py-1 rounded-full"
              >
                {allergy}
                <button
                  type="button"
                  onClick={() => handleRemoveItem('allergies', index)}
                  className="text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Medications */}
        <div className="mb-6">
          <div className="flex gap-2 mb-2">
            <InputField
              label="Add Medication"
              name="newMedication"
              value={newMedication}
              onChange={(e) => setNewMedication(e.target.value)}
              placeholder="Enter medication"
            />
            <button
              type="button"
              onClick={() => handleAddItem('medications', newMedication, () => setNewMedication(''))}
              className="mt-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Add
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {value.medications.map((medication, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 bg-green-100 px-3 py-1 rounded-full"
              >
                {medication}
                <button
                  type="button"
                  onClick={() => handleRemoveItem('medications', index)}
                  className="text-green-600 hover:text-green-800"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}