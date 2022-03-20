import React from "react";
import CylinderChart from "./CylinderChart";
import {nanoid} from "nanoid"

export default function BarChart(props){

    let chartData=  [
        {
            month: "January",
            total: 0
        },
        {
            month: "February",
            total: 0
        },
        {
            month: "March",
            total: 0
        },
        {
            month: "April",
            total: 0
        },
        {
            month: "May",
            total: 0
        },
        {
            month: "June",
            total: 0
        },
        {
            month: "July",
            total: 0
        },
        {
            month: "August",
            total: 0
        },
        {
            month: "September",
            total: 0
        },
        {
            month: "October",
            total: 0
        },
        {
            month: "November",
            total: 0
        },
        {
            month: "December",
            total: 0
        },

    ]

    let totalYear = 0

    for (const values of props.values)
    {
        for (const element of chartData) {
            if (element.month == values.month) {
                chartData[chartData.indexOf(element)].total = chartData[chartData.indexOf(element)].total + parseInt(values.amount)
            }
        }
    }

    for (const element of props.values){
        totalYear+=parseInt(element.amount)
    }

    return(
     <div className="bar--chart">
         {chartData.map((item) => <CylinderChart key={nanoid()} month={item.month.slice(0,3)} total={(item.total)/totalYear}></CylinderChart>)}
     </div>
    )
}