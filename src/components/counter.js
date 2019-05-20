import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increaseAction } from '../redux/actions/countActions'

class Counter extends Component {
  render() {
    const { value, onIncreaseClick } = this.props
    
    return (
    <div>
      <span>count: {value}</span>
      <button onClick={onIncreaseClick}>Increase</button>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.count.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction)
  }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Counter)