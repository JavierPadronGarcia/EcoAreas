import { Route, Routes, BrowserRouter } from "react-router-dom";
import EcoareasNetwork from './pages/ecoareasNetwork/EcoareasNetwork';
import Homepage from './pages/homepage/Homepage';
import Newspage from './pages/newspage/Newspage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/network" element={<EcoareasNetwork />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;