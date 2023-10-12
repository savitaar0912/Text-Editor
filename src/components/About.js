import React from 'react'

export default function About(props){
    
    let mystyle = {
        backgroundColor: props.mode==='light'?'white':props.mode==='info'?'#0dcaf0':props.mode==='dark'?'rgb(182, 193, 203)':'white',
        color: props.mode==='light'?'black':props.mode==='info'?'white':'black',
        border: props.mode==='dark'?'2px solid black':props.mode==='info'?'2px solid yellow':'2px solid white'
    }

    return (
        <div className='container'>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <h2 className='my-2'>About Us</h2>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={mystyle}>
                            Bold is done using strong
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body" style={mystyle}>
                            This is the Text Editor WebApp
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo" >
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={mystyle}>
                            Uses/Features
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body" style={mystyle}>
                            We can use this tool to Change Sentences, Copy, Clear etc
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
