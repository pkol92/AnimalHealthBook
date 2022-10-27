import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
  gap: 30px;
  padding: 20px;
  box-sizing: border-box;
`;

export const ItemWrapper = styled.div`
  display: flex;
  /* width: 350px; */
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 250px;
  height: 350px;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: ${({ theme }) => theme.boxShadows.light};
  justify-content: flex-start;
  align-content: stretch;
`;

export const ImgWrapper = styled.div`
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  display: flex;
  position: relative;
`;

export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  object-fit: contain;
`;

export const ItemTitle = styled.div`
  display: flex;
`;

export const ItemPrice = styled.div`
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
  box-sizing: border-box;
`;

export const MainDataWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
