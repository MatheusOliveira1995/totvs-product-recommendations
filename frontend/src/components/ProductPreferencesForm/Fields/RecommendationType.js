import React from 'react';
import { Checkbox } from '../../shared';
import { SINGLE_PRODUCT, MULTIPLE_PRODUCTS } from '../../../constants';

export const RecommendationType = ({ onRecommendationTypeChange }) => {
  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold mb-2">Tipo de Recomendação:</h2>
      <div className="flex items-center">
        <Checkbox
          type="radio"
          name="recommendationType"
          value={SINGLE_PRODUCT}
          required
          onChange={() => onRecommendationTypeChange(SINGLE_PRODUCT)}
        />
        <label htmlFor="SingleProduct" className="mr-4">
          Produto Único
        </label>
        <Checkbox
          type="radio"
          name="recommendationType"
          value={MULTIPLE_PRODUCTS}
          required
          onChange={() => onRecommendationTypeChange(MULTIPLE_PRODUCTS)}
        />
        <label htmlFor="MultipleProducts">Múltiplos Produtos</label>
      </div>
    </div>
  );
};
