import Router from "./router";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Router />
    </div>
  );
}

export default App;
