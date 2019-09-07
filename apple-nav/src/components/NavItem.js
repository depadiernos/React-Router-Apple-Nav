import React from 'react'

export default function(props){
  console.log(props)
  return (<div>{`${props.details.make}, ${props.details.model}`}</div>)
}