import './App.css';
import React, { useState, useEffect } from 'react';

const Modal = (props) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [UserId, setUserId] = useState('');
    const [ErrorName, setErrorName] = useState('');
    const [ErrorUserId, setErrorUserId] = useState('');
    const [ValidationName, setValidationName] = useState(true);
    const [ValidationUserId, setValidationUserId] = useState(true);

    const submitForm = (event) => {
        event.preventDefault();
        if (ValidationName === true && ValidationUserId === true) {
            console.log(UserId)
            setTitle('');
            setBody('');
            setUserId('');
            props.dismissModal();
        } else {
            console.log(ValidationName);
            console.log(ValidationUserId);
        }
    }

    const cancelForm = (event) => {
        props.dismissModal();
    }

    useEffect(() => {
        if  (title === '' && body === ''){
            setErrorName('')
            setValidationName(false)
        }else if (title.length <= 2 || body.length <= 2){
            setErrorName('First and Last names must be more than 2 characters')
            setValidationUserId(false)
        }else{
            setErrorName('')
            setValidationName(true)
        }
    }, [title, body]);

    useEffect(() => {
        if  (isNaN(UserId)){
            setErrorUserId('UserId must be a number')
            setValidationUserId(false)
        } else if(UserId <= 17){
            setErrorUserId('WARNING: You must be over 18 years old')
            setValidationUserId(false)
        } else{
            setErrorUserId('')
            setValidationUserId(true)
        }
    }, [UserId]);
    

    return (
        <fragment>
        <div className="form">
            <form>

                <div className="form-group">
                    <label className="form-label">First Name: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>  

                <div className="form-group">
                    <label className="form-label">Last Name: </label>
                    <input
                        type="text"
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">UserId: </label>
                    <input
                        type="UserId"
                        value={UserId}
                        onChange={(event) => setUserId(event.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button onClick={submitForm} className="button">
                        Submit
                    </button>
                    <button onClick={cancelForm} className="button">
                        Cancel
                    </button>
                </div>   

            </form>    
        </div>
        <div >
            <label className="form-label" id="errors" >{ErrorName}</label>
        </div>   
        <div >
            <label className="form-label" id="errors"> {ErrorUserId}</label>
        </div> 
        
        </fragment> 
    );
};

export default Modal;