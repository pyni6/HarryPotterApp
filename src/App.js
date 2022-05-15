import './App.css';
import Main from './components/Main';
import CharsDetails from './components/CharsDetails';
import CharsTable from './components/CharsTable';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1 id="appTitle">Harry Potter Characters Query App</h1>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/CharsTable" element={<CharsTable />} />
        <Route path="/CharsDetails" element={<CharsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
