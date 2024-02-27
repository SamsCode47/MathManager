import React from 'react'
import {quotes} from "../../assets/quotes";
import "./quote.css";

const Quote = () => {
  const quote = quotes[Math.floor(Math.random() * 26)]
  const text = quote.text;
  const author = quote.author;
  return (
    <div className='quote'>
      <div className='quote_text'>
        {text}
      </div>
      <div className='quote_author'>
        -{author}
      </div>
    </div>
  )
}

export default Quote