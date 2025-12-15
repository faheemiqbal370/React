//Show msg hello to user in different colors, pass 2 props userName and textColor

function Msgbox({userName,textColor}){
    let styles={color: textColor};
    return(
        <>
        <h1 style={{color: textColor}}>hello ,{userName}</h1>
        </>
    );
}
export default Msgbox;