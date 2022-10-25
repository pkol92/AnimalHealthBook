import FetchApi from '../../server/fetchAPI';
import {
  ImgWrapper,
  ItemDescription,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
  ListWrapper,
} from './ItemList.styles';

export const ItemsList = () => {
  const { shopData, error, loading } = FetchApi();

  return (
    <div>
      {' '}
      {error ? (
        <div>Ups, something go wrong...</div>
      ) : (
        <div>
          {loading && <p>Loading data...</p>}
          {!loading && (
            <ListWrapper>
              {shopData.map((item) => (
                <ItemWrapper key={item.id}>
                  <div>
                    <div>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{`Price: ${item.price.toFixed(2)} $`}</ItemPrice>
                    </div>
                    <ItemDescription>{item.description}</ItemDescription>
                  </div>
                  <ImgWrapper>
                    <img alt={item.title} src={item.image}></img>
                  </ImgWrapper>
                </ItemWrapper>
              ))}
            </ListWrapper>
          )}
        </div>
      )}
    </div>
  );
};
