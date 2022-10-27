import { useState } from 'react';

import { ItemCard } from '../../server/useFetchAPI';
import { Button } from '../Button/Button';
import {
  ButtonsWrapper,
  ImgWrapper,
  ItemImg,
  ItemPrice,
  ItemTitle,
  ItemWrapper,
  LinkWrapper,
  MainDataWrapper,
} from './ItemList.styles';

const Item = ({ item }: { item: ItemCard }) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <ItemWrapper key={item.id}>
      <ImgWrapper key={item.id} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        <ButtonsWrapper isHidden={!isHovering}>
          <Button size="medium" variant="default">
            {'Add to card'}
          </Button>
          <LinkWrapper to={`/${item.id}`}>
            <Button size="medium" variant="default">
              {'See details'}
            </Button>
          </LinkWrapper>
        </ButtonsWrapper>

        <ItemImg alt={item.title} src={item.image} />
      </ImgWrapper>
      <MainDataWrapper>
        <ItemTitle>{item.title}</ItemTitle>
        <ItemPrice>{`${item.price.toFixed(2)} $`}</ItemPrice>
      </MainDataWrapper>
    </ItemWrapper>
  );
};

export default Item;
