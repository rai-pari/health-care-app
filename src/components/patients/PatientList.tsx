import React from 'react';
import { Patient } from '../../types';
import { Calendar, Phone, MapPin } from 'lucide-react';

interface PatientListProps {
  patients: Patient[];
  onSelectPatient: (patient: Patient) => void;
}

export default function PatientList({ patients, onSelectPatient }: PatientListProps) {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {patients.map((patient) => (
          <li key={patient.id}>
            <button
              onClick={() => onSelectPatient(patient)}
              className="block hover:bg-gray-50 w-full text-left"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <p className="truncate text-sm font-medium text-blue-600">{patient.name}</p>
                    <span className="ml-2 inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                      ID: {patient.id}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    {patient.lastVisit && (
                      <>
                        <Calendar className="h-4 w-4" />
                        <span>Last visit: {patient.lastVisit}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1" />
                      {patient.contact}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {patient.address}
                    </div>
                  </div>
                  {patient.conditions.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {patient.conditions.map((condition) => (
                        <span
                          key={condition}
                          className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-800"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}