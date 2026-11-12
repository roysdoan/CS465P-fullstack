import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Countries from "./Countries";
import Populous from "./Populous";
import Regions from "./Regions";

const Home = function Home() {
  return (
    <main>
      <h1>Countries App</h1>
      <p>Explore countries, their capitals, currencies, and populations</p>

      <nav>
        <p>
          <Link to="/countries">View all countries</Link>
        </p>
        <p>
          <Link to="/populous">View all populous countries</Link>
        </p>
        <p>
          <Link to="/regions">View regions</Link>
        </p>
      </nav>
    </main>
  );
};

const App = function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/populous" element={<Populous />} />
        <Route path="/regions" element={<Regions />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
