import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { ItemDetails } from './components/ItemDetails/ItemDetails';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
}

export default App;
