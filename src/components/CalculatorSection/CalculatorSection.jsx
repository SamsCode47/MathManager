import React from 'react'
import { useReducer } from 'react'
import "./calculatorSection.css"
import {Calculator, History} from "../../components"
import calcReducer from "./calcReducer.js"

const CalculatorSection = () => {

  const [calc, dispatch] = useReducer(calcReducer,
    {
    value1: null,
    value2: null,
    operation: null,
    history: []
    }
  )

  return (
    <>
      <div className='CalculatorSection_title'>Calculator</div>
      <div className='CalculatorSection'>
        <Calculator calc={calc} dispatch={dispatch}/>
        <History history={calc.history} dispatch={dispatch}/>
      </div>
    </>
  )
}

export default CalculatorSection