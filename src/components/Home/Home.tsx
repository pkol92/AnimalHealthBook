import { ItemsList } from '../ItemsList/ItemsList';
import { Navigation } from '../Navigation/Navigation';
import { HeaderWrapper } from './Home.styles';

export const Home = () => {
  return (
    <div>
      <Navigation>
        <ItemsList />
      </Navigation>
    </div>
  );
};
