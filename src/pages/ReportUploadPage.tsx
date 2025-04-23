import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

const ReportUploadPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Report Upload Page</h1>
      <Button
        variant="primary"
        onClick={() => navigate('/reports')}
      >
        Back to Reports
      </Button>
    </div>
  );
};

export default ReportUploadPage;
