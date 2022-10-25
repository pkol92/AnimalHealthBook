import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  line-height: 46px;
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  text-align: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.navy};
`;
