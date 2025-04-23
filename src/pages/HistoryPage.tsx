import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const HistoryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>History Page</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/')}
      >
        Back to Dashboard
      </Button>
    </div>
  );
};

export default HistoryPage;
