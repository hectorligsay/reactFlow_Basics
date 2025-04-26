import { Workflow } from "./Workflow/Workflow";
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
    </div>
  );
};

export default App;
