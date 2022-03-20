import React from "react";


export default function ButtonFilter(props){
    const [formData, setFormData] = React.useState("2022")

    function handleChange(event) {
        setFormData(event.target.value);
        props.event(event.target.value);
    }


    return(
        <div className="buttonFilter">
            <label htmlFor="ChooseYear" className="insideBox">Filter by years</label>
            <select
                name="ChooseYear"
                id="ChooseYear"
                className="buttonFilter--select"
                onChange={handleChange}
                value={formData.ChooseYear}
            >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
        </div>
    )
}