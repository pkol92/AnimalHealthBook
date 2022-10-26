import { FC, ReactNode } from 'react';

import { Link } from 'react-router-dom';

import {
  ChildrenWrapper,
  HeaderWrapper,
  LinkWrapper,
  MenuWrapper,
  NavigationWrapper,
  TabsWrapper,
} from './Navigation.styles';

interface NavigationProps {
  children: ReactNode;
}

export const Navigation: FC<NavigationProps> = ({ children }) => {
  const header = 'Super Store';

  return (
    <NavigationWrapper>
      <MenuWrapper>
        <LinkWrapper to="/">
          <HeaderWrapper>{header}</HeaderWrapper>
        </LinkWrapper>
        <TabsWrapper>
          <div>My cards</div>
          <div>My wish list</div>
          <div>My Account</div>
        </TabsWrapper>
      </MenuWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </NavigationWrapper>
  );
};
