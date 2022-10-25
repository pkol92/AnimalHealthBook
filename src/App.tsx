import { Route, Routes } from 'react-router-dom';

import { Home } from './components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" />
      </Routes>
    </div>
  );
}

export default App;
