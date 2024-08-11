import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/Routes";

function App() {
  return (
    <div className="app-section">
      <Router basename="/">
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
