import styled from 'styled-components';

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  line-height: 46px;
  font-size: ${(props) => props.theme.fontSizes.xxlarge};
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
`;
