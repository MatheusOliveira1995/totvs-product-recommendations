// getRecommendations.js
import { SINGLE_PRODUCT, MULTIPLE_PRODUCTS } from '../constants';

const getBestMatches = (formData, products) => {
  return products.filter((product) => {
    const hasPreferences =
      formData.selectedPreferences?.length > 0 &&
      product.preferences.some((preference) =>
        formData.selectedPreferences.includes(preference),
      );

    const hasFeatures =
      formData.selectedFeatures?.length > 0 &&
      product.features.some((feature) =>
        formData.selectedFeatures.includes(feature),
      );

    return hasPreferences || hasFeatures;
  });
};

const getBestMatch = (formData, bestMatches) => {
  if (bestMatches.length === 0) {
    return null;
  }

  const bestMatchesWithAllCriteria = bestMatches.filter((match) => {
    const hasAllPreferences = formData.selectedPreferences?.every((preference) =>
      match.preferences.includes(preference),
    ) ?? false;

    const hasAllFeatures = formData.selectedFeatures?.every((feature) =>
      match.features.includes(feature),
    ) ?? false;

    return hasAllPreferences && hasAllFeatures;
  });

  return bestMatchesWithAllCriteria.length > 0
    ? bestMatchesWithAllCriteria[bestMatchesWithAllCriteria.length - 1]
    : bestMatches[bestMatches.length - 1];
};

export const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products,
) => {
  if (!products?.length) {
    return [];
  }

  const hasSelectedPreferences = formData.selectedPreferences?.length > 0;
  const hasSelectedFeatures = formData.selectedFeatures?.length > 0;

  if (!hasSelectedPreferences && !hasSelectedFeatures) {
    return [];
  }

  const bestMatches = getBestMatches(formData, products);

  if (formData.selectedRecommendationType === MULTIPLE_PRODUCTS) {
    return bestMatches;
  }

  if (formData.selectedRecommendationType === SINGLE_PRODUCT) {
    const bestMatch = getBestMatch(formData, bestMatches);
    return bestMatch ? [bestMatch] : [];
  }

  return [];
};
