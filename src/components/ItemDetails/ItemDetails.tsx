import { useParams } from 'react-router-dom';

import useFetchApi from '../../server/useFetchAPI';
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
} from './ItemDetails.style';

export const ItemDetails = () => {
  const { id } = useParams();
  const { data } = useFetchApi();
  const pickedProduct = data?.find((item) => item.id === +id!);

  return (
    <Navigation>
      {pickedProduct ? (
        <ItemWrapper>
          <div>
            <div>
              <ItemTitle>{pickedProduct.title}</ItemTitle>
              <ItemPrice>{`Price: ${pickedProduct.price.toFixed(2)} $`}</ItemPrice>
              <ItemDescription>{pickedProduct.description}</ItemDescription>
            </div>
            <ButtonsWrapper>
              <Button size="medium" variant="default">
                {'Add to card'}
              </Button>
            </ButtonsWrapper>
          </div>
          <ImgWrapper>
            <ItemImg alt={pickedProduct.title} src={pickedProduct.image} />
          </ImgWrapper>
        </ItemWrapper>
      ) : (
        <h3>{'Oops, there is no such product'}</h3>
      )}
    </Navigation>
  );
};
