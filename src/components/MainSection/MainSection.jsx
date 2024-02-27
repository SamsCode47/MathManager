import React from 'react'
import "./mainSection.css"
import {Home, CalculatorSection, GaußMethod} from "../../components"


const MainSection = ({toggle}) => {
  return (
    <div className={`mm__mainSection ${toggle && "thick"}`}>
      <div className="mm__mainSection_Home section" id='Home'>
        <div className="mm__mainSection--title">Math Manager</div>
        <Home/>
      </div>
      <div className="mm__mainSection_calculator section" id='Calculator'>
        <CalculatorSection/>
      </div>
      <div className="mm__mainSection_GaußMethod section" id='GaußMethod'>
        <GaußMethod/>
      </div>
    </div>
  )
}

export default MainSection