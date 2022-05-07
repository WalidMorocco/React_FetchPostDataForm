import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/';

function usePost(url, input) {
    // const [input, setInput] = useState({title: title, body: body});
    // const [data, setData] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState('');
  
    // useEffect(() => {
    //     const pushData = async () => {
    //         try {
    //         const response = await axios.post(`${baseUrl}${url}`, input);
    //         setData(response.data);
    //         } catch (error) {
    //         setError(`An error ocurred ${error}`);
    //         } finally {
    //         setLoading(false);
    //         }
    //     };
    //     pushData();
    // }, [url]);
  
    // return { data, loading, error };

    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    (async () => {
        try {
        const response = await axios.post(
            url,
            input
        );
        setData(response.data);
        } catch (error) {
        setError(`An error ocurred ${error}`);
        

        } finally {
        setLoading(false);
        }
    })();
    }, []);
    return { data, error, loading };
}


export default usePost;