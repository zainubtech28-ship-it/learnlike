import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import AnimeWorld from "./pages/AnimeWorld";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/animeworld" element={<AnimeWorld />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
