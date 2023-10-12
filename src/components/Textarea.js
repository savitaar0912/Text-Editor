import React , {useState} from 'react'

export default function Textarea(props) {
    
    const [text, setText] = useState("");
    // // text = "usbfbff" //wrong method
    // setText('This is New text') //correct method
    
    //  To  update the textarea
    const changeText = (event)=>{
        setText(event.target.value)
    }

    const uppercase = ()=>{
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showalert('success','Changed into UpperCase')
    }

    const lowercase = ()=>{
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showalert('primary','Changed into LowerCase')
    }

    const cleartext = ()=>{
        let newtext = ""
        setText(newtext)
        props.showalert('danger','Text Cleared')
    }

    const copytext = ()=>{
        navigator.clipboard.writeText(text)
        props.showalert('success', 'Text Copied')
    }

    const extraspace = ()=>{
        if(text>='  '){
            let newtext = text.replaceAll('  ','')
            setText(newtext)
        }
        else{
            setText(text)
        }
    }
    
    let btnstyle = props.mode==='light'?'primary':props.mode==='info'?'warning':'dark'

    // let mystyle = {backgroundColor: props.mode==='light'?'white':props.mode==='danger'?'#0dcaf0':props.mode==='dark'?'#6c757d':'white' , color: props.mode==='light'?'black':props.mode==='info'?'white':'black'}

    return (
        <>
        <div className='container'>
            <h1 style={{color: props.mode==='light'?'black':props.mode==='info'?'white':'black'}}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="9" value={text} onChange={changeText}></textarea>
            </div>
            <button disabled={text.length===0} className={`btn btn-${btnstyle} mx-2 my-2`} onClick={uppercase}>Convert into UpperCase</button>
            <button disabled={text.length===0} className={`btn btn-${btnstyle} mx-2 my-2`} onClick={lowercase}>Convert into LowerCase</button>
            <button disabled={text.length===0} className={`btn btn-${btnstyle} mx-2 my-2`} onClick={cleartext}>Clear text</button>
            <button disabled={text.length===0} className={`btn btn-${btnstyle} mx-2 my-2`} onClick={copytext}>Copy text</button>
            <button disabled={text.length===0} className={`btn btn-${btnstyle} mx-2 my-2`} onClick={extraspace}>Remove extra space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='light'?'black':props.mode==='info'?'white':'black'}}>
            <h1>Summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters </p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>'0'?text:'Write Something in Text Box'}</p>
        </div>
        </>
    )
}

