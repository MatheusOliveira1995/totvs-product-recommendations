import { Chip, Card } from '../shared';

export const ListItem = (props) => {
  const { item } = props;

  return (
    <Card>
      <h3 className="text-md font-semibold">{item.name}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
      <p className="text-sm font-medium text-gray-700 mt-2">Categoria</p>
      <p className="text-sm text-gray-600">{item.category}</p>
      <div className="mt-2">
        {item.preferences.length > 0 && (
          <div>
            <p className="text-sm font-medium text-gray-600">Preferências</p>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              {item.preferences.map((preference, index) => (
                <Chip key={`${preference}-${index}`} label={preference} />
              ))}
            </div>
          </div>
        )}
        {item.features.length > 0 && (
          <div className="mt-2">
            <p className="text-sm font-medium text-gray-600">Funcionalidades</p>
            <div className="flex flex-row flex-wrap gap-1 mt-2">
              {item.features.map((feature, index) => (
                <Chip key={`${feature}-${index}`} label={feature} />
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
