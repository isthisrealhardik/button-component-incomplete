import Main from "./components/Main";
import SideNav from "./components/SideNav";
import "./styles/main.css";

const App = () => {
  return(
    <div className="Main">
      <SideNav />
      <Main />
    </div>
  )
}

export default App;