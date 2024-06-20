import './Component.css';
import React from 'react';
import { useState } from 'react';

export default function Component(){

const [textAreaValue, setTextAreaValue] = useState('')
const [submittedValue, setSubmittedValue] = useState('');

const handleChangeTextAreaValue = (event) => {
    setTextAreaValue(event.target.value);
}

const handleClick = () => {
    setSubmittedValue(textAreaValue.toUpperCase());
    setTextAreaValue('');
}

    return(
        <div className='Container'> 
        <h3>Write something :)</h3>
            <textarea
                value={textAreaValue}
                onChange={handleChangeTextAreaValue}
            >
            </textarea>
            <button 
                onClick={handleClick}
                disabled={!textAreaValue}
                >
                    Submit
                </button>
            {submittedValue && <p>{submittedValue}</p>}
        </div>
    )
}