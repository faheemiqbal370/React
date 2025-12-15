import Product from "./product";

function ProductTab(){
    // let options = [<li>wow</li> , <li>cool</li>];
    let options = ["wow" , "cool"];
    // let options2 ={a: "HI-TECH",b: "DURABLE", c: "FAST" }
    return(
        <>
        <Product title="Phone" price="30,000" features={options} />
        {/* <Product title="LAptop" price={50000}  features={options} features2={options2}/> */}
        {/* <Product title="Pen" price="80" features={options} features2={options2}/> */}
        </>
    );
}
export default ProductTab;