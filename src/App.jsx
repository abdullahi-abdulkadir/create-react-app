import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";

function App() {
  return (
    //semantic tags are used here to improve accessibility and SEO
    //fragment is used here to group multiple components without adding extra nodes to the DOM
    <>
      <Nav />
      <Main />
    </>

  );
}

export default App;