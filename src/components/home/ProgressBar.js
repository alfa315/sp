import React from 'react'

const ProgressBar = (props) => {
  return(
    <ul>
      <li id='one' className="active" onClick={props.handleClick}>1</li>
      <li id='two' className="inactive" onClick={props.handleClick}>2</li>
      <li id='three' className="inactive" onClick={props.handleClick}>3</li>
      <li id='four' className="inactive" onClick={props.handleClick}>4</li>
      <li id='five' className="inactive" onClick={props.handleClick}>5</li>
    </ul>
  )
}

export default ProgressBar
