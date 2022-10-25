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
  display: grid;
  grid-template-columns: 3fr 1fr;
  /* width: 350px; */
  gap: 15px;
  align-items: center;
  justify-items: stretch;
  box-sizing: border-box;
  padding: 10px;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
`;

export const ItemImg = styled.img`
  width: 100%;
  object-fit: contain;
`;

export const ItemTitle = styled.h4`
  display: flex;
  max-width: 300px;
`;

export const ItemPrice = styled.h5`
  display: flex;
`;

export const ItemDescription = styled.p`
  display: flex;
  text-align: justify;
  height: 100px;
  overflow-y: scroll;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  gap: 15px;
`;
