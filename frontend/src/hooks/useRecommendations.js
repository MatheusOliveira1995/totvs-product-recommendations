// useRecommendations.js

import { useState } from 'react';
import { getRecommendations as getRecommendationsService } from '../services';

function useRecommendations(products) {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData) => {
    return getRecommendationsService(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
}

export default useRecommendations;
