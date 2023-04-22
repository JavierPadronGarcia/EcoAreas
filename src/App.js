import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/news" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;