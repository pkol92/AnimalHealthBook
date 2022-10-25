import { ItemsList } from '../ItemsList/ItemsList';
import { HeaderWrapper } from './Home.styles';

export const Home = () => {
  const header = 'Welcome to Super Store';

  return (
    <div>
      <HeaderWrapper>{header}</HeaderWrapper>
      <ItemsList />
    </div>
  );
};
