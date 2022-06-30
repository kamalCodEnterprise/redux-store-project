import React, { useContext } from 'react'
import { ContextData } from  './ComA'


const ComC = () => {
    const result = useContext(ContextData)
  return (
    <div>ComC {result}</div>
  )
}

export default ComC