import "./App.css"
import Title from "./Title.jsx"
import ProductTab from "./ProductTab.jsx";
import Msgbox from "./MsfBox.jsx";


function Description(){
  return <h2>I'm Description</h2>;
}

function App() {
  return( 
  <>
  <Msgbox userName="Ahmed" textColor="yellow"/>
  <Msgbox userName="Rehman" textColor="blue"/>
    <Title />
    <ProductTab/>
    {/* <Description/> */}
  </>
  );

}
export default App;
