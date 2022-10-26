import { useParams } from 'react-router-dom';

import useFetchApi, { ItemCard } from '../../server/useFetchAPI';
import { Button } from '../Button/Button';
import {
  ButtonsWrapper,
  ImgWrapper,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
} from '../ItemsList/ItemList.styles';

export const ItemDetails = () => {
  const { id } = useParams();
  const { data } = useFetchApi(id) as { data: ItemCard; error: boolean; loading: boolean };

  return (
    <ItemWrapper key={data.id}>
      <div>
        <div>
          <ItemTitle>{data.title}</ItemTitle>
          <ItemPrice>{`Price: ${data.price.toFixed(2)} $`}</ItemPrice>
          <div>{data.description}</div>
        </div>
        <ButtonsWrapper>
          <Button size="medium" variant="default">
            {'Add to card'}
          </Button>
        </ButtonsWrapper>
      </div>
      <ImgWrapper>
        <ItemImg alt={data.title} src={data.image} />
      </ImgWrapper>
    </ItemWrapper>
  );
};
