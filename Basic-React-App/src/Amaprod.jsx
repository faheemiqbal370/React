import "./product.css";
import Price from "./price";


function Aproduct({title,idx}){
    let oldPrice=["12,495","11,900","1,599","599"];
    let newPrice=["8,999","9,199","899","278"];
    let description= [
        ["8,000 DPI","5 Programmable buttons"],
        ["Intutive Surface","designed for ipad pro"],
        ["Nexus","Best"],
        ["wireles","optical Orientation"],
    ];
    return(
        <div className="product">
            <p>{title}</p>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]}/>
        </div>
    );
}
export default Aproduct;