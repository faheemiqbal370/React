import Amaprod from "./Amaprod";

function AprodTab(){
    let styles={
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return(

    <div style={styles}>
        
    <Amaprod title="Logitech MX Master" idx={0}/>
    <Amaprod title="Apple Pencil (2nd Gen)" idx={1}/>
    <Amaprod title="Zebronics Zeb-Transformer" idx={2}/>
    <Amaprod title="Petronics toad C3" idx={3}/>
      </div>
      );
}
export default AprodTab;