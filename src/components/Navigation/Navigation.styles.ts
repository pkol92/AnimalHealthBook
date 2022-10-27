import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  padding: 20px;
  color: ${({ theme }) => theme.colors.navy};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${(props) => props.theme.zIndex.modal};
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 20px;
`;

export const ChildrenWrapper = styled.div`
  padding: 100px 80px;
`;

export const HeaderWrapper = styled.div`
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  color: ${(props) => props.theme.colors.navy};
`;

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
`;

export const LinkWrapper = styled(Link)`
  text-decoration: none;
`;
