import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incredata} from '../store/check';
const Check = () => {
 
    const checkdata = useSelector(state => state.check)
    const dispatch = useDispatch()
    
    
  return (
    
    <div>Check
    <div>


    <button onClick={()=>dispatch(incredata())}>incre </button>
  <div>{checkdata.value}</div>
  

    </div>
    
    
    
    
    
    </div>
  )
}

export default Check