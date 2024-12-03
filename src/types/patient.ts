export interface PatientFormData {
  name: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  contact: string;
  email: string;
  address: string;
  identifiers: {
    aadhaar?: string;
    voterId?: string;
    pan?: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    contact: string;
  };
  medicalHistory: {
    conditions: string[];
    allergies: string[];
    medications: string[];
  };
}

export type ValidationErrors = Partial<Record<keyof PatientFormData, string>>;