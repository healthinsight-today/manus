import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/reports')}
      >
        View Reports
      </Button>
    </div>
  );
};

export default Dashboard;
