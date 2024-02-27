import React from 'react'
import "./calculator.css"

const Calculator = ({calc, dispatch}) => {

    const buttonValues = [
        ["AC", "±", "%", "÷"],
        ["7", "8", "9", "×"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["0", ".", "="]
    ]
    let color = "var(--mid-grey)"
    let type = "error"
    return (
    <div className='Calculator'>
        <div className='Calculator_display'>{calc.value1} {calc.operation} {calc.value2}</div>
        <div className='Calculator_buttons'>
            {
                buttonValues.flat().map( (value, i) =>{
                    switch(value){
                        case "÷":
                        case "×":
                        case "-":
                        case "+":
                            color = "var(--orange)"
                            type = "operation"
                            break
                        case "=":
                            type = "evaluate"
                            color = "var(--dark-grey)"
                            break
                        case "AC":
                            type = "clear"
                            color = "var(--dark-grey)"
                            break
                        case "±":
                            type = "sign"
                            color = "var(--dark-grey)"
                            break
                        case "%":
                            color = "var(--dark-grey)"
                            type = "operation"
                            break
                        default:
                            color = "var(--mid-grey)"
                            type = "add-digit"
                    }
                    return(
                        <Button
                            key={i}
                            value = {value}
                            color = {color}
                            dispatch = {dispatch}
                            dispatchType = {type}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

function Button ({value, color, dispatch, dispatchType}){

    return(
        <div className='Calculator-button' style={{ backgroundColor: color}} onClick={
            () => dispatch({type: dispatchType, payload: value}) }
            >
            {value}
        </div>
    )
}


export default Calculator