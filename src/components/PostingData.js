import React, { useState } from 'react';
import Loading from './Loading';
import usePost from '../hooks/usePost';

const PostingData = () => {

    const [userId, setUserId] = useState(11);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    
    
    const SubmitForm = e => {
        e.preventDefault()
        const input = {
            userId:userId,
            title: title,
            body: body
        }
        console.log(input);
        
        const { data, error, loading } = usePost('posts', input);
    
        alert("Your file is being uploaded!")
        if (loading) {
            return <Loading />;
        }
    
        if (error.length > 0) {
            return <p>{error}</p>;
        }
        
    }

    return (
        <div className="form">
            <h2>Add a New product</h2>
            <form>

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
                    <button onClick={SubmitForm} className="button">
                        Submit
                    </button>
                </div>   

            </form>
        </div>
    )












//     const [title, setTitle] = useState('');
//     const [body, setBody] = useState('');
//     const [userId, setUserId] = useState(4);

//     function postData(props) {

//         const { data, loading, error } = UsePost('posts', props.title, props.body, props.userId);
//     }

//     const HandleSubmit = () => {
//         e.preventDefault();
//         const product = { userId, title, body };
    
//         fetch('http://localhost:3000/posts/', {
//           method: 'POST',
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(product)
//         }).then(() => {
//           console.log('new product added');
//         })   

//     }

//     const clearForm = (event) => {
//         //event.preventDefault();
//     }



//     return (
//         <div className="form">
//             <h2>Add a New product</h2>
//             <form onSubmit={HandleSubmit}>

//                 <div className="form-group">
//                     <label className="form-label">Title: </label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                     />
//                 </div>
                
//                 <div className="form-group">
//                     <label className="form-label">Body: </label>
//                     <input
//                         type="text"
//                         value={body}
//                         onChange={(e) => setBody(e.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <button className="button">
//                         Submit
//                     </button>
//                 </div>   

//             </form>
//         </div>
//   )
};

export default PostingData;