import "./product.css";
// function Product({title,price,features,features2}){
//     return(
//         <div className="product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>{features.map((features=><li>{features}</li>))}</p>
//             {/* <p>{features2.b}</p> */}
//             {/* <p>{features2.c}</p> */}
//         </div>
//     );
// }
// export default Product;

//Conditionals

// function Product({title,price}){
//     if (price>30000){
//          return(
//         <div className="product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//             <p>Discount of 5%</p>
//         </div>
//     );
//     }
//     else{
//          return(
//         <div className="product">
//             <h3>{title}</h3>
//             <h5>Price : {price}</h5>
//         </div>
//     );
//     }
   
// }
// export default Product;

//OR

function Product({title,price}){
         return(
        <div className="product">
            <h3>{title}</h3>
            <h5>Price : {price}</h5>
            {price > 30000 ? <p>Discount of 5%</p> : null }
        </div>
    );
   
}
export default Product;