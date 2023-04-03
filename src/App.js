import "./App.css";
import "./bootstrap.css";
import { Routes, Route } from "react-router-dom";
import Table from "./table/Table.component";
import Navbar from "./pages/Navbar/Navbar.component";
import CreateLearner from "./pages/CreateLearner/createLearner.component";
import CreateMentor from "./pages/CreateMentor/createMentor.component";

function App() {
 return (
  <Routes>
   <Route path="/" element={<Navbar />} />
   <Route path="/create-user" element={<CreateLearner />} />
   <Route path="/create-mentor" element={<CreateMentor />} />
   <Route path="/table-view" element={<Table />} />
  </Routes>
 );
}

export default App;
