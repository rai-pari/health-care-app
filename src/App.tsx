import React, { useState } from 'react';
import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import PatientList from './pages/PatientList';
import PatientRegistration from './pages/PatientRegistration';

function App() {
  const [currentView, setCurrentView] = useState<string>('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'list':
        return <PatientList />;
      case 'registration':
        return <PatientRegistration />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout>
      <div className="flex h-full">
        <Sidebar currentView={currentView} onNavigate={setCurrentView} />
        <div className="flex-1 overflow-auto p-6">
          {renderView()}
        </div>
      </div>
    </Layout>
  );
}

export default App;