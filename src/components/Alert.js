import React from 'react'

export default function Alert(props) {
    
    const upper = (word)=>{
        const upp = word.toUpperCase();
        return upp[0] + word.toLowerCase().slice(1)
    }

    return (
        <div style={{height: '50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{upper(props.alert.type)}</strong>: {upper(props.alert.msg)}
        </div>} 
        </div>
    )
}
