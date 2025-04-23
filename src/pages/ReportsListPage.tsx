import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const ReportsListPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Reports List Page</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/upload')}
      >
        Upload New Report
      </Button>
    </div>
  );
};

export default ReportsListPage;
