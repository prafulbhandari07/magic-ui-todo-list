import { Route, Routes } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing/Landing";
import ToDo from "./pages/todolist/ToDo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}

export default App;
