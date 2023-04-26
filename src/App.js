import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './pages/Homepage/Homepage';
import Newspage from './pages/Newspage/Newspage';
import EcoareasNetwork from './pages/EcoareasNetwork/EcoareasNetwork';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/contact" element={<EcoareasNetwork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;