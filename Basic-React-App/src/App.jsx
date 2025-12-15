import "./App.css"
import Title from "./Title.jsx"
// import ProductTab from "./ProductTab.jsx";
// import Msgbox from "./MsfBox.jsx";
import AprodTab from "./AmaprodTab.jsx";


function Description(){
  return <h2>I'm Description</h2>;
}

function App() {
  return( 
  <>
  <h2> BlockBuster Deals | Shop now</h2> 
  <AprodTab />
  {/* <Msgbox userName="Ahmed" textColor="yellow"/>
  <Msgbox userName="Rehman" textColor="blue"/> */}
    {/* <Title />
    <ProductTab/> */}
    {/* <Description/> */}
  </>
  );

}
export default App;
