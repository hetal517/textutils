import React, { useState } from 'react';

export default function About(props) {
 let myStyle={
           color:props.mode === 'dark' ? 'white' : 'black',
           backgroundColor:props.mode === 'dark' ? 'grey' : 'white',
           border: '2px solid transparent',
          background: 'linear-gradient(black, black) padding-boxlinear-gradient(black, #111114ff, #090909ff) border-box',
          bordercolor:props.mode === 'dark' ? 'white' : 'grey'
    }
   
  return (
        <div>
        <div className="container" style={myStyle}>
        <h1 className="my-3 ">About us</h1>
        <div className="accordion" id="accordionExample">
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
           <strong> Analyze Your Text</strong>
        </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}> 
         Analyze Your Text helps you check words, characters, and basic details of your text in seconds — simple, fast, and easy to use.</div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free To Use</strong>
        </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
            simple and free-to-use tool that helps you quickly check your text. You can see word count, character count, sentence count, and basic text insights in one place.
            Our goal is to make text checking fast, clean, and easy for everyone.
        </div>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
        </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
           It is a simple, free-to-use, and browser-compatible tool that helps you quickly check your text.
          You can view word count, character count, sentence count, and basic text insights in one place.
           Our goal is to make text checking fast, clean, and easy for everyone.
        </div>
        </div>
    </div>
    </div>
        </div>
       {/* <div className="container  my-3 ">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext} </button>
        </div>*/}
        </div>

  );
}
