import ReactComponent from "./components/ReactComponent";
import ReactCreateElement from "./components/ReactCreateElement";
import ReactFunctionalComponent from "./components/ReactFunctionalComponent";
import ReactPureComponent from "./components/ReactPureComponent";

function App() {
  return (
    <>
      <ReactCreateElement />
      <ReactComponent />
      <ReactPureComponent />
      <ReactFunctionalComponent />
    </>
  );
}

export default App;
