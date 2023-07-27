import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from "./components";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
    </Router>
  );
};

export default App;
