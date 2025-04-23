import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/common/Button';

const RecommendationDetailPage: React.FC = () => {
  const { recommendationId } = useParams<{ recommendationId: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Recommendation Detail Page</h1>
      <p>Recommendation ID: {recommendationId}</p>
      <Button
        variant="primary"
        onClick={() => navigate('/recommendations')}
      >
        Back to Recommendations
      </Button>
    </div>
  );
};

export default RecommendationDetailPage;
