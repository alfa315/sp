import React from 'react'

const Dropdown = (props) => {
  return(
    <select className="select" onChange={props.handleChange}>
      {props.integrations.map(function(n) {
          return (<option value={n} selected={props.selected === n}>{n}</option>);
      })}
    </select>
  )
}


export default Dropdown
