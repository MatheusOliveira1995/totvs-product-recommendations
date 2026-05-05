// getRecommendations.js

const getRecommendations = (
  formData = {
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  },
  products,
) => {
  const matchedProducts = products.filter((product) => {
    const hasPreferences = product.preferences.some((preference) =>
      formData.selectedPreferences.includes(preference),
    );
    const hasFeatures = product.features.some((feature) =>
      formData.selectedFeatures.includes(feature),
    );

    return hasPreferences && hasFeatures;
  });

  return matchedProducts ?? [];
};

export default { getRecommendations };
