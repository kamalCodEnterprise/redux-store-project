import React from 'react'
import ComB from './ComB'
import { createContext } from 'react';
export const ContextData = createContext()
const ComA = () => {
  return (
    <ContextData.Provider value={"kamal"}>
    <div>ComA  <ComB/></div>
    </ContextData.Provider>
  )
}

export default ComA