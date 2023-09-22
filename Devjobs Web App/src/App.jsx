import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Shared from "./SharedLayout";
import HomePage from "./HomePage";
import Job from "./JobPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shared />}>
          <Route index element={<HomePage />}></Route>
          <Route path="job/:id" element={<Job />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
