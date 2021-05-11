import "./styles/App.css";
import NavBar from "./components/NavBar";
import ProductsList from "./components/ProductsList";
import BugsList from "./components/BugsList";
import BugsAddComp from "./components/BugsAddComp";
import BugAddedComp from "./components/BugAddedComp";
import { useSelector } from "react-redux";

function App() {
  //A component wil render(or not) based on the state 'showComponent'
  const showComponent = useSelector((state) => state.showComponent);
  return (
    <div className="App">
      <NavBar />
      <div className="AppFunctions">
        {showComponent === "SHOW_PRODUCTSLIST" && <ProductsList />}
        {showComponent === "SHOW_BUGSLIST" && <BugsList />}
        {showComponent === "SHOW_BUG_ADD" && <BugsAddComp />}
        {showComponent === "Bug_Added_Screen" && <BugAddedComp />}
      </div>
    </div>
  );
}

export default App;
