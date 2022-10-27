import useFetchApi, { ItemCard } from '../../server/useFetchAPI';
import Item from './Item';
import { ListWrapper } from './ItemList.styles';

export const ItemsList = () => {
  const { data, error, loading } = useFetchApi() as {
    data: Array<ItemCard>;
    error: boolean;
    loading: boolean;
  };

  return (
    <div>
      {error ? (
        <div>Ups, something go wrong...</div>
      ) : (
        <div>
          {loading && <p>Loading data...</p>}
          {!loading && (
            <ListWrapper>
              {data.map((item) => (
                <Item item={item} key={item.id} />
              ))}
            </ListWrapper>
          )}
        </div>
      )}
    </div>
  );
};
