import React from 'react';
import { ListItem } from './ListItem';

export const RecommendationList = ({ recommendations }) => {
  return (
    <div className="max-w-md mx-auto p-4 rounded-lg border-solid border-2 border-gray-100 bg-white">
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>
      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index} className="mb-2">
            <ListItem item={recommendation} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendationList;
