import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddAccount from "./components/addaccount/AddAccount";
import ViewIssues from "./components/issues/ViewIssues";
import Navbar from "./components/navbar/Navbar";

// import AddAccount from "./components/AddAccount";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/staff" element={<AddAccount />} />
          <Route path="/viewIssues" element={<ViewIssues />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
