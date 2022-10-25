import FetchApi from '../../server/fetchAPI';
import { Button } from '../Button/Button';
import {
  ButtonsWrapper,
  ImgWrapper,
  ItemDescription,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
  ListWrapper,
} from './ItemList.styles';

export const ItemsList = () => {
  const { shopData, error, loading } = FetchApi();

  return (
    <div>
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
                    <ButtonsWrapper>
                      <Button size="medium" variant="default">
                        {'Add to card'}
                      </Button>
                      <Button size="medium" variant="default">
                        {'See details'}
                      </Button>
                    </ButtonsWrapper>
                  </div>
                  <ImgWrapper>
                    <ItemImg alt={item.title} src={item.image} />
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
