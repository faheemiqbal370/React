import Product from "./product";

function ProductTab(){
    let options = ["hi=tech", "Durable", "fast"];
    let options2 ={a: "HI-TECH",b: "DURABLE", c: "FAST" }
    return(
        <>
        <Product title="Phone" price="30,000" features={["wow","cow"]} features2={options2}/>
        <Product title="LAptop" price={50000}  features={options} features2={options2}/>
        <Product title="Pen" price="80" features={options} features2={options2}/>
        </>
    );
}
export default ProductTab;