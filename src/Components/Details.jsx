import React, { useEffect } from 'react'

const Details = () => {
    useEffect(() => {
        props.actions.Details()
    },[])
  return (<div></div>)
}

export default Details