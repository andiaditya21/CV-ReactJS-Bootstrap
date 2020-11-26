import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      {/* <Route path="/home/my-project" component={} /> */}
    </Router>
  );
}

export default App;
