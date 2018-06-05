import React from 'react';

const inputCustomizado = (props) => {
    return (
        <div>
            <label htmlFor={props.id}> {props.label} </label> 
            <input id={props.id} className={props.className} type={props.type} 
                name={props.name} value={props.value} onChange={props.onChange} />                  
        </div>
    );
}

export default inputCustomizado;