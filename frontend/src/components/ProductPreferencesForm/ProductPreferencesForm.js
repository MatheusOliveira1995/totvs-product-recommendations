// Form.js

import React from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import { useForm } from '../../hooks';

export const ProductPreferencesForm = (props) => {
  const { onSubmit, preferences, features } = props;

  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="max-w-md mx-auto p-4 rounded-lg border-solid border-2 border-gray-100 bg-white">
        <Preferences
          preferences={preferences}
          onPreferenceChange={(selected) =>
            handleChange('selectedPreferences', selected)
          }
        />
        <Features
          features={features}
          onFeatureChange={(selected) =>
            handleChange('selectedFeatures', selected)
          }
        />
        <RecommendationType
          onRecommendationTypeChange={(selected) =>
            handleChange('selectedRecommendationType', selected)
          }
        />
        <SubmitButton text="Obter recomendação" />
      </div>
    </form>
  );
};
