import React from 'react'
import "./history.css"
import { evaluate } from "../CalculatorSection/calcReducer.js"

const History = ({history, dispatch}) => {
  return (
    <div className='History_wrapper'>
      <div className='History_head'>
        <div className='History_title'>History</div>
        <div className='History_clear' onClick={
                () => dispatch({type: "historyClear"})
        }> Clear History </div>
      </div>
      <div className='History'>
        <div className='History_items'>
          {
            history.map((historyCalc, i) =>{
              return (
              <div className='History_item' key={i} onClick={
                () => dispatch({type: "history", payload: historyCalc})
              }>
                {`${historyCalc.historyVal1} ${historyCalc.historyOperation} ${historyCalc.historyVal2} = ${evaluate(historyCalc.historyVal1, historyCalc.historyVal2, historyCalc.historyOperation)}`}
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default History