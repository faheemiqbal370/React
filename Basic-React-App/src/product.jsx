import "./product.css";
function Product({title,price,features,features2}){
    return(
        <div className="product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            <p>{features}</p>
            <p>{features2.b}</p>
            <p>{features2.c}</p>
        </div>
    );
}
export default Product;