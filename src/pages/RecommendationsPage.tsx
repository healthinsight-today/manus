import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const RecommendationsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Recommendations Page</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/reports')}
      >
        Back to Reports
      </Button>
    </div>
  );
};

export default RecommendationsPage;
