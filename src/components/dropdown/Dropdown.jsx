import React from 'react';
import "./dropdown.css"

const Dropdown = ({setDifficulty, data}) => {

  return (
    <div className="dropdown">
        <select onChange={(e)=>setDifficulty(e.target.value)}>
        {
            data.map((dt,i)=>{
            return <option value={dt} key={i}>{dt}</option>
            })
        }
        </select>
    </div>
  )
}

export default Dropdown
