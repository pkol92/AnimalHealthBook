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
  grid-template-columns: 2fr 3fr;
  /* width: 350px; */
  gap: 30px;
  box-sizing: border-box;
  padding: 10px;
`;

export const ImgWrapper = styled.div`
  /* width: 100px;
  height: 100px; */
  display: flex;
  justify-self: center;
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  padding: 0 40px;
  gap: 20px;
`;
