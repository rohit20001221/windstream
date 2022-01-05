import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
