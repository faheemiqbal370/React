import Product from "./product";

function ProductTab(){
    return(
        <>
        <Product title="Phone" price="30,000"/>
        <Product title="LAptop" price={50000}/>
        <Product title="Pen" price="80"/>
        </>
    );
}
export default ProductTab;