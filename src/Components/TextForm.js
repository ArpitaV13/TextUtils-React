import React,{useState} from 'react'

export default function TextForm(props) {
  const[text,setText]=useState("");
  const handleUpClick=()=>{
    console.log("button was clicked"+text);
    setText(text.toLocaleUpperCase());
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick=()=>{
    console.log("button was clicked"+text);
    setText(text.toLocaleLowerCase());
    props.showAlert("Converted to LowerCase","success");
  }
  const handleChange=(event)=>{
    setText(event.target.value);
  }
  const handleClearClick=()=>{
    setText("");
    props.showAlert("Text cleared","success");
  }
  
  const removeSpaces=()=>{
    let newText=text.split(/[  ]+/)
    setText(newText.join(' '))
  }

  return (
    <div style={{color:props.mode==="dark"?"white":"black"}}>
      <div className="mb-3">
        <h1 >{props.heading} </h1>
        <textarea className="form-control" onChange={handleChange}value={text} style={{backgroundColor:props.mode==="dark"?"#052b64":"white",color:props.mode==="dark"?"white":"black"}}name="" id="myBox"  rows="8"></textarea>
        <button onClick={handleUpClick} className="btn btn-primary mx-2 my-5">Convert to UpperCase</button>
        <button onClick={handleLowClick} className="btn btn-primary mx-2 my-5">Convert to LowercaseCase</button>
        <button onClick={handleClearClick} className="btn btn-primary mx-2 my-5">Clear Text</button>
        <button onClick={removeSpaces} className="btn btn-primary mx-2 my-5">Remove Spaces</button>
      </div>
      <div>
        <h2 >Word Count</h2>
        <p >{text.split(" ").length}</p>
        <p >{text.length}</p>
      </div>
    </div>
  )
}
