import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button';

const InsightDetailPage: React.FC = () => {
  const { insightId } = useParams<{ insightId: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Insight Detail Page</h1>
      <p>Insight ID: {insightId}</p>
      <Button
        variant="primary"
        onClick={() => navigate('/insights')}
      >
        Back to Insights
      </Button>
    </div>
  );
};

export default InsightDetailPage;
