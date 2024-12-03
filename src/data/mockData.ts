import { Patient, AlertNotification } from '../types';

export const mockPatients: Patient[] = [
  {
    id: 'P001',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    contact: '+91-9876543210',
    address: '123 Health Street, Medical District',
    lastVisit: '2024-03-10',
    conditions: ['Hypertension', 'Diabetes']
  },
  {
    id: 'P002',
    name: 'Jane Smith',
    age: 35,
    gender: 'Female',
    contact: '+91-9876543211',
    address: '456 Wellness Road, Care Zone',
    lastVisit: '2024-03-15',
    conditions: ['Asthma']
  }
];

export const mockAlerts: AlertNotification[] = [
  {
    id: 'A001',
    title: 'Follow-up Required',
    message: 'Patient John Doe due for diabetes follow-up',
    type: 'warning',
    timestamp: '2024-03-20T10:00:00'
  },
  {
    id: 'A002',
    title: 'New Test Results',
    message: 'Lab results available for Jane Smith',
    type: 'info',
    timestamp: '2024-03-20T09:30:00'
  }
];