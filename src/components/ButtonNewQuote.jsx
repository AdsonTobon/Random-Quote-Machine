import React from 'react'

const  ButtonNewQuote =(props)=> {
    
    
        return (
            <div className="Botones_Newquote">
              <button id="new-quote" onClick={props.click}>New quote</button>
            </div>
        )
    
}

export default  ButtonNewQuote