import { Link } from 'react-router-dom';

import useFetchApi, { ItemCard } from '../../server/useFetchAPI';
import { Button } from '../Button/Button';
import { Navigation } from '../Navigation/Navigation';
import {
  ButtonsWrapper,
  ImgWrapper,
  ItemDescription,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
  ListWrapper,
  MainDataWrapper,
} from './ItemList.styles';

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
                <ItemWrapper key={item.id}>
                  <ImgWrapper>
                    <ItemImg alt={item.title} src={item.image} />
                  </ImgWrapper>
                  <div>
                    <MainDataWrapper>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{`Price: ${item.price.toFixed(2)} $`}</ItemPrice>
                    </MainDataWrapper>
                    {/* <ButtonsWrapper>
                      <Button size="medium" variant="default">
                        {'Add to card'}
                      </Button>
                      <Link to={`/${item.id}`}>
                        <Button size="medium" variant="default">
                          {'See details'}
                        </Button>
                      </Link>
                    </ButtonsWrapper> */}
                  </div>
                </ItemWrapper>
              ))}
            </ListWrapper>
          )}
        </div>
      )}
    </div>
  );
};
