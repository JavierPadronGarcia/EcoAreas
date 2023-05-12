import { Route, Routes, BrowserRouter } from "react-router-dom";
import EcoareasNetwork from './pages/ecoareasNetwork/EcoareasNetwork';
import Homepage from './pages/homepage/Homepage';
import Newspage from './pages/newspage/Newspage';
import ModifyNews from "./pages/modifyNews/ModifyNews";
import PoliticsPage from "./pages/politicsPage/PoliticsPage";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
        <Route path="/network" element={<EcoareasNetwork />} />
        <Route path="/politics" element={<PoliticsPage />} />
        <Route path="/modifyNews" element={<ModifyNews />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;