import React, { useState } from 'react';
import Loading from './Loading';

import UsePost from '../hooks/usePost';
import useFetch from '../hooks/useFetch';

const PostingData = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const { loading, error } = useFetch('results');

    const handleSubmit = (event) => {
        event.preventDefault();
        const input = { title, body };
        const { data, loading, error } = UsePost('results', input);
    }

    if (loading) {
        return <Loading />;
    }

    if (error.length > 0) {
        return <p>{error}</p>;
    }
    return (
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
                <button className="button">
                    Submit
                </button>
            </div>   

        </form>    
    </div>
  )
};

export default PostingData;