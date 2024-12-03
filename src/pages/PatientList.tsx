import React, { useState } from 'react';
import { mockPatients } from '../data/mockData';
import PatientListComponent from '../components/patients/PatientList';
import { Patient } from '../types';
import { Search } from 'lucide-react';

export default function PatientListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectPatient = (patient: Patient) => {
    console.log('Selected patient:', patient);
    // TODO: Implement patient details view
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Patients</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Add New Patient
          </button>
        </div>
      </div>
      
      <PatientListComponent
        patients={filteredPatients}
        onSelectPatient={handleSelectPatient}
      />
    </div>
  );
}