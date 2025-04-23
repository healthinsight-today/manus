import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const ReportDetailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Report Detail Page</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/reports')}
      >
        Back to Reports
      </Button>
    </div>
  );
};

export default ReportDetailPage;
