import React from "react";


export default function CylinderChart(props){

    const totalPxBar = 150;
    let styleValue = Math.floor((totalPxBar)*props.total);
    const style = {
        borderBottom:`${styleValue}px solid #3F23A2`
    }

    console.log(styleValue)
    return(
        <div className="cylinder">
            <div className="cylinder--bar--empty" style={style}></div>
            <h3 style={{fontSize: "15px"}}>{props.month}</h3>
        </div>
    )

}

