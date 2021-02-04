import React, {useReducer} from 'react';
import * as actions from './actions/index.js'
import reducer, * as reducers from './reducers/index.js'

import './App.css';

import AnswerDisplay from './components/AnswerDisplay';
import CalcButton from './components/CalcButton';

function App() {

  const [state, dispatch] = useReducer(reducer, reducers.initialState)
  // console.log(actions.applyNumber(1))
  const handle1 = () => {
    dispatch(actions.addOne())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <AnswerDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} handleClick = {() => dispatch(actions.applyNumber(1))}/> 
              <CalcButton value={2} handleClick = {() => dispatch(actions.applyNumber(2))}/>
              <CalcButton value={3} handleClick = {() => dispatch(actions.applyNumber(3))}/>
            </div>

            <div className="row">
              <CalcButton value={4} handleClick = {() => dispatch(actions.applyNumber(4))}/>
              <CalcButton value={5} handleClick = {() => dispatch(actions.applyNumber(5))}/>
              <CalcButton value={6} handleClick = {() => dispatch(actions.applyNumber(6))}/>
            </div>

            <div className="row">
              <CalcButton value={7} handleClick = {() => dispatch(actions.applyNumber(7))}/>
              <CalcButton value={8} handleClick = {() => dispatch(actions.applyNumber(8))}/>
              <CalcButton value={9} handleClick = {() => dispatch(actions.applyNumber(9))}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} handleClick = {() => dispatch({type: actions.CHANGE_OPERATION, payload: '+'})}/>
              <CalcButton value={"*"} handleClick = {() => dispatch({type: actions.CHANGE_OPERATION, payload: '*'})}/>
              <CalcButton value={"-"} handleClick = {() => dispatch({type: actions.CHANGE_OPERATION, payload: '-'})}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} handleClick = {() => dispatch({type: 'CLEAR_DISPLAY'})}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
