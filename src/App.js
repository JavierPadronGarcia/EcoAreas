import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';
import Newspage from './pages/newspage/Newspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Newspage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;