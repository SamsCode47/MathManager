import React from 'react'
import { useState } from 'react'
import { SlArrowRight } from 'react-icons/Sl';
import { MdNoBackpack, MdOutlineClose } from 'react-icons/md';
import "./gaußMethod.css"


const GaußMethod = () => {
  const [tableSize, setTableSize] = useState(3)
  const [tableContent, setTableContent] = useState(Array(tableSize * tableSize + tableSize).fill(""))
  const [variables, setVariables] = useState(Array(tableSize).fill("a"))
  const [showResult, setShowResult] = useState(false)
  const [error, setError] = useState(false)
  document.documentElement.style.setProperty('--table-size', `${tableSize}`);
  /*const mountedStyle = {
    animation: "inAnimation 250ms ease-in"
  };
  const unmountedStyle = {
    animation: "outAnimation 270ms ease-out",
    animationFillMode: "forwards"
  };
  */
  const getVariables = () =>{
    let variables = [];
    let index
    for (let i = 0; i<tableSize; i++){
      if(i > 2){
        index = i+94
      }else{
        index = i+120
      }
      variables.push(
        <input className='GaußMethod_variables-var' disabled={showResult} type="text" maxLength="2" placeholder={String.fromCharCode(index)}/>
      )
    }
    return variables
  }
  function handleChange(e, i){
    const updatetContent = tableContent.slice();
    if (/^\d{1,3}$/.test(e.target.value)){
      updatetContent[i] = e.target.value
      setTableContent(updatetContent)
    } else if(e.target.value == ""){
      updatetContent[i] = ""
      setTableContent(updatetContent)
    }
  }
  function handleVarChange(e, i){
    const updatetVariables = variables.slice();
    updatetVariables[i] = e.target.value;
    setVariables(updatetVariables)
  }
  let subButton;
  if (!showResult){
    subButton = <SlArrowRight color="#fff" fontSize={15}/>
  } else{
    subButton = <MdOutlineClose color="#fff" fontSize={20}/> 
  }
  return (
    <div className='GaußMethod'>
      <div className='GaußMethod_description'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa ab quos fugit repudiandae repellendus veniam. Voluptatibus, totam maxime velit optio nemo suscipit quos dolorum repellendus quam voluptates illo? Consequuntur, dolorem!
      </div>
      <div className='Gaußmethod_main'>
        <div className='GaußMethod_table'>
          <div className='GaußMethod_table-head'>
            <div className='GaußMethod_table-size'>
              Current Size:
              <button className='GaußMethod_table-size-button' disabled={showResult} onClick={
                () =>{
                  setTableSize(tableSize > 2 ? tableSize - 1 : tableSize)
                  setTableContent(Array(tableSize > 2 ? (tableSize - 1) * (tableSize): (tableSize) * (tableSize + 1)).fill(""))
                }
              }>
                -
              </button>
                {tableSize}
              <button className='GaußMethod_table-size-button' disabled={showResult} onClick={
                () =>{
                  setTableSize(tableSize < 5 ? tableSize + 1 : tableSize)
                  setTableContent(Array(tableSize < 5 ? (tableSize + 1) * (tableSize + 2) : (tableSize) * (tableSize + 1)).fill(""))
                }
              }>
                +
              </button>
            </div>
            <div className='GaußMethod_table-clear' disabled={showResult} onClick={() =>{
              if(!showResult){
                setTableContent(tableContent.slice().fill(""))
              }
            }}>
              Clear Table
            </div>
          </div>
          <div className='GaußMethod_table-variables'>
            {
              variables.map((variable, i) =>{
                let index;

                if(i > 2){
                  index = i+94
                }else{
                  index = i+120
                }
                return <input className='GaußMethod_variables-var' disabled={showResult} type="text" maxLength="2" placeholder={String.fromCharCode(index)} onChange={(e) => handleVarChange(e, i)}/>
              })
            }
          </div>
          <div className='GaußMethod_table-cells'>
            {
              tableContent.map((value, i) =>{
                if((i+1) % (tableSize+1) == 0){
                  return(
                    <>
                      <div className='GaußMethod_table-seperator'></div>
                      <Cell key={i} value={tableContent[i]} showResult={showResult} error={error} onChange={(e) => handleChange(e, i)} />
                    </>
                  )
                }
                return <Cell key={i} value={tableContent[i]} showResult={showResult} error={error} onChange={(e) =>handleChange(e, i)} />
              })
            }
          </div>
        </div>
        <div className='GaußMethod_table-submit' onClick={() =>{
              if(!(tableContent.includes(""))){
                setShowResult(!showResult)
                setError(false)
              } else{
                setError(true)
              }
            }}>
            {!showResult ? "Calculate": "Remove"} {subButton}
        </div>
        {
        showResult && 
        <div className='GaußMethod_table' /*style={showResult ? mountedStyle : unmountedStyle}*/>
            <div className='GaußMethod_table-variables'>
            {
              variables.map((variable, i) =>{
                return <div className='GaußMethod_variables-var'>{variable}</div>
              })
            }
            </div>
            <div className='GaußMethod_table-cells'>
              {
                ansTableContent(tableContent, tableSize).map((value, i) =>{
                  if((i+1) % (tableSize+1) == 0){
                    return(
                      <>
                        <div className='GaußMethod_table-seperator'></div>
                        <div className='GaußMethod_table-cell'>
                          {value}
                        </div>
                      </>
                    )
                  }
                  return(
                  <div className='GaußMethod_table-cell'>
                    {value}
                  </div>
                  )
                })
              }
            </div>
        </div>
        }
      </div>
    </div>
  )
}
function Cell({value, onChange, showResult, error}){
  const getClass = () =>{
    let className = "GaußMethod_table-cell";
    if(error){
      className = "GaußMethod_table-cell error"
    }
    return className
  }
  return(
    <input type="text" disabled={showResult} className={getClass()} maxLength="3" value={value} onChange={onChange} />
  )
}
Object.defineProperty(Array.prototype, 'flat', {
  value: function(depth = 1) {
    return this.reduce(function (flat, toFlatten) {
      return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
    }, []);
  }
});
function euclidGCD(a,b) {
  a = Math.abs(a);
  b = Math.abs(b);
  if (b > a) {var temp = a; a = b; b = temp;}
  while (true) {
      if (b == 0) return a;
      a %= b;
      if (a == 0) return b;
      b %= a;
  }
}
function ansHelper(row1, row2, target){
  let ansRow = [];
  let ggt = euclidGCD(row1[target], row2[target])
  let kgv = row1[target]*row2[target]/ggt
  let fac1 = kgv/row1[target];
  let fac2 = kgv/row2[target];
  let product;
  console.log(ggt, fac1, fac2)
  if(row2[target] == 0){
    ansRow = row2;
  } else{
    for(let i = 0; i < row1.length; i++){
      product = (row1[i]*fac1) - (row2[i]*fac2);
      ansRow.push(product)
    }
  }
  console.log(row1, row2, ansRow)
  return ansRow
}
//besser kürz
function ansTableContent(contentArray, rowsNum){
  let rowsArr = []
  for(let i = 1; i <= rowsNum; i++){
    rowsArr.push(contentArray.slice((rowsNum+1)*(i-1) ,(rowsNum+1)*i))
  }
  for(let j = 0; j < rowsNum-1; j++){
    for(let k = 1; k < rowsNum-j; k++){
      rowsArr[j+k] = ansHelper(rowsArr[j], rowsArr[j+k], j)
    }
  }
  return rowsArr.flat(2)
}
export default GaußMethod