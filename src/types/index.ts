export interface User {
  id: string;
  name: string;
  role: 'CHW' | 'MO' | 'ADMIN';
  email: string;
}

export interface Patient {
  id: string;
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  contact: string;
  address: string;
  lastVisit?: string;
  conditions: string[];
}

export interface AlertNotification {
  id: string;
  title: string;
  message: string;
  type: 'warning' | 'info' | 'error' | 'success';
  timestamp: string;
}