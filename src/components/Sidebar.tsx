import React from 'react';
import { LayoutDashboard, Users, UserPlus, FileText, Settings } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

export default function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'list', label: 'Patients', icon: Users },
    { id: 'registration', label: 'New Patient', icon: UserPlus },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="h-full w-64 bg-white border-r border-gray-200">
      <nav className="mt-5 px-2">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${
                  currentView === item.id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md w-full`}
              >
                <Icon
                  className={`${
                    currentView === item.id ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-500'
                  } mr-4 h-6 w-6`}
                />
                {item.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}