import React, { useState } from 'react';
import Loading from './Loading';
import usePost from '../hooks/usePost';

const PostingData = () => {


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [userId, setUserId] = useState(4);

   

    const HandleSubmit = (e) => {
        e.preventDefault();
        const product = { userId, title, body };
    
        fetch('http://localhost:3000/posts/', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(product)
        }).then(() => {
          console.log('new product added');
        })   

    }

    const clearForm = (event) => {
        //event.preventDefault();
    }



    return (
        <div className="form">
            <h2>Add a New product</h2>
            <form onSubmit={HandleSubmit}>

                <div className="form-group">
                    <label className="form-label">Title: </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                
                <div className="form-group">
                    <label className="form-label">Body: </label>
                    <input
                        type="text"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <button className="button">
                        Submit
                    </button>
                </div>   

            </form>
        </div>
  )
};

export default PostingData;