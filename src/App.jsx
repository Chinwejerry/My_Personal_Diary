import { Front } from "./components/front";
import { Route, Routes } from "react-router";
import { Entry } from "./components/entry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Front />} />
      <Route path="/entry" element={<Entry />} />
    </Routes>
  );
}

export default App;
