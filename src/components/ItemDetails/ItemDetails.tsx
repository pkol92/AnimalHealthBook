import { useParams } from 'react-router-dom';

import useFetchApi from '../../server/useFetchAPI';
import { Button } from '../Button/Button';
import { Navigation } from '../Navigation/Navigation';
import {
  ButtonsWrapper,
  ContentWrapper,
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
          <ImgWrapper>
            <ItemImg alt={pickedProduct.title} src={pickedProduct.image} />
          </ImgWrapper>
          <ContentWrapper>
            <div>
              <ItemTitle>{pickedProduct.title}</ItemTitle>
              <ItemPrice>{`Price: ${pickedProduct.price.toFixed(2)} $`}</ItemPrice>
              <ItemDescription>{pickedProduct.description}</ItemDescription>
            </div>
            <ButtonsWrapper>
              <Button size="medium" variant="default">
                {'Add to card'}
              </Button>
              <Button size="medium" variant="default">
                {'Add to wish list'}
              </Button>
            </ButtonsWrapper>
          </ContentWrapper>
        </ItemWrapper>
      ) : (
        <h3>{'Oops, there is no such product'}</h3>
      )}
    </Navigation>
  );
};
