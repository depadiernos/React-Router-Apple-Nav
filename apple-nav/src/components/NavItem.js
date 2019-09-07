import React from 'react'

export default function(props){
  console.log(props)
  return (<div>
    <h1>{`${props.details.make}, ${props.details.model}`}</h1>
    <img src={props.details.image} alt={props.details.model}/>
    </div>)
}