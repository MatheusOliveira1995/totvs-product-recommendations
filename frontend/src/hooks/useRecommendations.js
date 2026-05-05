// useRecommendations.js

import { useState } from 'react';
import { getRecommendations as getRecommendationsService } from '../services';

export const useRecommendations = (products) => {
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = (formData) => {
    return getRecommendationsService(formData, products);
  };

  return { recommendations, getRecommendations, setRecommendations };
};
