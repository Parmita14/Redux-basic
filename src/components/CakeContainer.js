import React from 'react'
import { buyCake } from '../redux/index'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numberOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  )
}
const mapStateToProps = state =>{
    return{
        numberOfCakes  : state.cake.numberOfCakes
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        buyCake : () => dispatch(buyCake())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)