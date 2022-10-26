import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: baseline;
  align-content: center;
  gap: 30px;
  padding: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  /* width: 350px; */
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 250px;
`;

export const ImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ItemTitle = styled.h5`
  display: flex;
`;

export const ItemPrice = styled.h4`
  display: flex;
  color: ${({ theme }) => theme.colors.magenta};
`;

export const ButtonsWrapper = styled.div<{ isHidden: boolean }>`
  position: absolute;
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 15px;
  height: 200px;
  background-color: rgb(0 72 153 / 42%);
  z-index: ${({ theme }) => theme.zIndex.button};
`;

export const MainDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
