import React from 'react';
import { Users, UserPlus, Calendar, AlertTriangle } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import { mockPatients, mockAlerts } from '../data/mockData';

export default function Dashboard() {
  const stats = {
    totalPatients: mockPatients.length,
    newPatients: 5,
    appointments: 8,
    alerts: mockAlerts.length,
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          title="Total Patients"
          value={stats.totalPatients}
          icon={<Users className="h-6 w-6 text-blue-600" />}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="New Patients"
          value={stats.newPatients}
          icon={<UserPlus className="h-6 w-6 text-green-600" />}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Today's Appointments"
          value={stats.appointments}
          icon={<Calendar className="h-6 w-6 text-purple-600" />}
        />
        <DashboardCard
          title="Active Alerts"
          value={stats.alerts}
          icon={<AlertTriangle className="h-6 w-6 text-orange-600" />}
          trend={{ value: 2, isPositive: false }}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Alerts</h2>
          <div className="space-y-4">
            {mockAlerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-4 rounded-lg ${
                  alert.type === 'warning'
                    ? 'bg-yellow-50'
                    : alert.type === 'info'
                    ? 'bg-blue-50'
                    : 'bg-red-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{alert.title}</h3>
                  <span className="text-xs text-gray-500">
                    {new Date(alert.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{alert.message}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Patients</h2>
          <div className="space-y-4">
            {mockPatients.slice(0, 5).map((patient) => (
              <div key={patient.id} className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{patient.name}</h3>
                  <p className="text-sm text-gray-500">{patient.conditions.join(', ')}</p>
                </div>
                <span className="text-xs text-gray-500">
                  {patient.lastVisit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}