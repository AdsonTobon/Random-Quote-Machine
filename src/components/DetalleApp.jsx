import React, { Component } from "react";
import Quote from './Quote';
import Author from './Author';
import ButtonRedes from './ButtonRedes';
import ButtonNewQuote from './ButtonNewQuote';

export default class DetalleApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        citas:[],
        quote:"",
        autor:"",
        vec:0
        
    }
  }


componentDidMount(){
  fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
  .then(response => response.json())
  .then(data => this.setState(
    {
      citas: data.quotes,
      quote:data.quotes[0].quote,
      autor:data.quotes[0].author,
      
    
    }))

}

  GenerateRandomQuote=()=>{
    this.setState({
      vec:this.state.vec+1,
      quote: this.state.citas[this.state.vec].quote,
      autor: this.state.citas[this.state.vec].author
    })
  }

  render() {
       
      
    return (
      
      <section className="Section">
        <div className="section-intro">
          <p>Please! select you favorite Quote </p>
          <p>and posted twitter...</p>
        </div>
        <div id="quote-box" className="Contenedor_Principal">
          <div className="Principal_Citas">
            <Quote Cita={this.state.quote}/>
            <Author Autor={this.state.autor}/>
          </div>
          <div className="Principal_Botones">
            <ButtonRedes/>
            <ButtonNewQuote click={this.GenerateRandomQuote}/>
          </div>
        </div>
      </section>
      
    );
  }

  
}
