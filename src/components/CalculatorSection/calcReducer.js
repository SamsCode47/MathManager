export default function calcReducer(calc, action){
    switch (action.type){
        case "add-digit":
            if(calc.operation){
                if(calc.value2){
                    if(calc.value2.length >= 10) return calc
                }
                if(action.payload == "."){
                    if(!(calc.value2) || calc.value2.includes(".")) return calc
                }
                if(action.payload == "0" && calc.value1 == "0") return calc
                return{
                    ...calc,
                    value2: `${calc.value2 || ""}${action.payload}`
                }
            }
            if(calc.value1){
                if(calc.value1.length >= 10) return calc
            }
            if(action.payload == "."){
                if(calc.value1 == null || calc.value1.includes(".")) return calc
            }
            if(action.payload == "0" && calc.value1 == "0") return calc
            return {
                ...calc,
                value1: `${calc.value1 || ""}${action.payload}`
            }
            break
        case "operation":
            if(calc.value1 == null && calc.value2 == null) return calc
            if (calc.value2){
                return{
                    ...calc,
                    value1: evaluate(calc.value1, calc.value2, calc.operation),
                    value2: null,
                    operation: action.payload
                }
            }
            return {
                ...calc,
                operation: action.payload
            }
            break
        case "clear":
            return {
                ...calc,
                value1: null,
                value2: null,
                operation: null
            }
            break
        case "historyClear":
            return {
                ...calc,
                history: []
            }
            break
        case "sign":
            if(calc.value1 == null || calc.value2 || calc.operation) return calc
            return {
                ...calc,
                value1: -1 * parseFloat(calc.value1)
            }
            break
        case "evaluate":
            if(calc.value1 == null || calc.value2 == null || calc.operation == null) return calc
            return {
                ...calc,
                value1: evaluate(calc.value1, calc.value2, calc.operation),
                value2 : null,
                operation: null,
                history: [...calc.history,
                    {
                    historyVal1: calc.value1, 
                    historyVal2: calc.value2, 
                    historyOperation: calc.operation
                    }
                ]
            }
            break      
        case "history":
            return{
                ...calc,
                value1: action.payload.historyVal1,
                value2: action.payload.historyVal2,
                operation: action.payload.historyOperation
            }
        case "error":
        default:
            console.log("error")
            return {
                ...calc,
                value1: action.payload
            }
    }
}
export function evaluate(operand1, operand2, operation){
    if(isNaN(parseFloat(operand1)) || isNaN(parseFloat(operand1))) return ""
    let res = 0
    switch(operation){
        case "+":
            res = parseFloat(operand1) + parseFloat(operand2)
            break
        case "-":
            res = parseFloat(operand1) - parseFloat(operand2)
            break
        case "×":
            res = parseFloat(operand1) * parseFloat(operand2)
            break
        case "÷":
            res = parseFloat(operand1) / parseFloat(operand2)
            break
        case "%":
            res = parseFloat(operand1) % parseFloat(operand2)
            break
        default:
            res = "error";
    }
    return res.toString()
}