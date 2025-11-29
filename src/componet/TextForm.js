import React,{useState} from 'react';

export default function TextForm(props) {
   const handleupclick = () =>{
               console.log("Uppercase was clicked"+text);
               let newtext=text.toUpperCase();
               setText(newtext);
                props.showAlert("Convert to uppercase!","Success");

                }
   const handleloclick = () =>{
               let newtext=text.toLowerCase();
               setText(newtext);
               props.showAlert("Convert to Lowercase!","Success");
                }
  const handleclear = () =>{
               let newtext='';
               setText(newtext);
                props.showAlert("Clear textttt !","Success");

                }
  const handlespace = (event) =>{
               let newtext=text.split(/[ ]+/);
               setText(newtext.join(" "))
               props.showAlert("Remove Extra space!","Success");

               }
   const handleonchange = (event) =>{
               //console.log("OnChanged...");
               setText(event.target.value);
               }
  
      const [text,setText]=useState(' ');
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text}  onChange={handleonchange}  style={{backgroundColor:props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} id="mybox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-2" onClick={handleupclick}>Convert To Upper Case</button>
     <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert To Lower Case</button>
     <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>  
     <button className="btn btn-primary mx-2" onClick={handlespace}>Removes Extra space</button>


     </div>
 
    <div className="container my-3" style={{color:props.mode === 'dark' ? 'white' : 'black'}}>
      <h2>Your Text Summary</h2>
     <p>{text.split(" ").filter(word => word.trim() !== "").length}: words, {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length}Minutes read</p>
    </div>

    <h2 style={{color:props.mode === 'dark' ? 'white' : 'black'}}>Preview</h2>
<p style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{text.length > 0 ? text:"Enter something in the textbox above to preview it here"}</p>
    </>
  );
}
