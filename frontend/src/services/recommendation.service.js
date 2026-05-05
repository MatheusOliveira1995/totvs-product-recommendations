// getRecommendations.js
import { SINGLE_PRODUCT } from '../constants';

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

  const matchedProducts = products.filter((product) => {
    const hasPreferences =
      hasSelectedPreferences &&
      product.preferences.some((preference) =>
        formData.selectedPreferences.includes(preference),
      );

    const hasFeatures =
      hasSelectedFeatures &&
      product.features.some((feature) =>
        formData.selectedFeatures.includes(feature),
      );

    return hasPreferences || hasFeatures;
  });

  if (formData.selectedRecommendationType === SINGLE_PRODUCT) {
    return matchedProducts.length
      ? [matchedProducts[matchedProducts.length - 1]]
      : [];
  }

  return matchedProducts ?? [];
};
