import { useMemo } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';
import { ItemDetails } from './components/ItemDetails/ItemDetails';

function App() {
  const item = useMemo(() => <ItemDetails />, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={item} />
      </Routes>
    </div>
  );
}

export default App;
