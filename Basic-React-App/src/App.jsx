import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx";

function Description(){
  return <h2>I'm Description</h2>;
}

function App() {
  return( 
  <>
    <Title />
    <ProductTab/>
    <Description/>
  </>
  );

}
export default App;
