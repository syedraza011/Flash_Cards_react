import React from "react";
function Card(props){
    const [flip, setFlip]=React.useState(false)

    const border =()=>{
        switch(props.dt.type){
            case "math":
                return "red";
            case "science":
                return "green";
            case "history":
                return "purple";
            default:
                return "blue"

        }

    }

    return(
        <div className={"card"} style={{borderColor: border()}} onClick={()=>setFlip(!flip)}>
            <div className="front" style={{display: flip ?"none":"block"}}>
                <h1>{props.dt.q}</h1>
            </div>
            <div className="back" style={{display: flip ?"block":"none"}}>
                <h1>{props.dt.a}</h1>
            </div>
        </div>
    )
}

export default Card;