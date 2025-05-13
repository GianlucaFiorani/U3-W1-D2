import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllThrBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllThrBooks />
      <MyFooter />
    </>
  );
}

export default App;
