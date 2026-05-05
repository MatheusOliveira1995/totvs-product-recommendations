import React from 'react';
import ListItem from './ListItem';

function RecommendationList({ recommendations }) {
  return (
    <div>
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
}

export default RecommendationList;
