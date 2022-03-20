import React from "react";


export default function Expenses(props){
    return(
        <div>
            <div className="block1">
                <h3 className="insideBox" style={{fontSize: "18px"}}>{props.date.month}</h3>
                <h3 className="insideBox" style={{fontSize: "15px"}}>{props.date.year}</h3>
                <h3 className="insideBox" style={{fontSize: "25px"}}>{props.date.day}</h3>
            </div>

        </div>
    )
}