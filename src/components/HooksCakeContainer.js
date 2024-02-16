import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numberOfCakes)
  const Dispatch = useDispatch()
  return (
    <div>
        <h2> Number of cakes - {numOfCakes}</h2>
        <button onClick={()=>Dispatch(buyCake())} >Buy Cakes</button>
    </div>
  )
}

export default HooksCakeContainer