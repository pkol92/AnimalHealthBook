import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  gap: 30px;
  padding: 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  align-content: space-between;
  gap: 20px;
`;

export const ImgWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
`;

export const ItemTitle = styled.h4`
  display: flex;
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
