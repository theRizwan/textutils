import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] =useState("Enter Text Here")
    let onHandleUpClick = () =>{
        console.log("Clicked to Upper Case"  + text)
        let myUpper  = text.toUpperCase()
        setText(myUpper)
        props.myalert("Changed to Upper Case","success")

    } 
    let onHandleBoClick = () =>{
        console.log("Clicked to Upper Case"  + text)
        let myUpper  = text + " " + Math.random().toString(36).substring(2, 15) ;

        setText(myUpper)
        props.myalert("Generated New Word Successfully","success")
    }
    let onHandleLoClick = () =>{
        console.log("Clicked to Upper Case"  + text)
        let myUpper  = text.toLowerCase()
        setText(myUpper)
        props.myalert("Changed to Lower Case Successfully","success")
    }
    let onHandleChange = (event) =>{
        console.log("Valued is change")
        setText(event.target.value)
    }
    return (
        <>
        <div className="mb-3 container my-3" >
            <h1 style={{backgroundColor:props.modedark==='light'?props.mode:'white',color:props.modedark==='light'?'white':'black'}}>{props.title}</h1>
            <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" value={text} onChange={onHandleChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.modedark==='light'?props.mode:'white',color:props.modedark==='light'?'white':'black'}}></textarea>
            <button type="button" className={`btn btn-${props.modedark==='light'?'light':'primary'} my-3 mx-1`} onClick={onHandleUpClick}>Change to Upper Case</button>
            <button type="button" className={`btn btn-${props.modedark==='light'?'light':'primary'} my-3 mx-1`} onClick={onHandleLoClick}>Change to Upper Case</button>
            <button type="button" className={`btn btn-${props.modedark==='light'?'light':'primary'} my-3 mx-1`} onClick={onHandleBoClick}>Generate Random Characters</button>
        </div>
        <div className="container my-3" style={{backgroundColor:props.modedark==='light'?props.mode:'white',color:props.modedark==='light'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").filter((item)=>item!='').length} words and {text.length} characters</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
