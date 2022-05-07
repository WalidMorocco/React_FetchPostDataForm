import React, { useState } from 'react';
import './App.css';
import Modal from './Modal'

import FetchingData from './components/FetchingData';
import PostingData from './components/PostingData';

function App() {
  const [showFetchData, setShowFetchData] = useState(true);
  const [showPostData, setPostData] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onDismissModal = () => {
    setShowModal(false);
  }

  const handleShowFetchDataDemo = () => {
    setShowFetchData(true);
    setPostData(false);
  };

  const handleShowPostDataDemo = () => {
    setShowFetchData(false);
    setPostData(true);
  };

  return (
    <div className="container">
      <button onClick={() => handleShowFetchDataDemo()} className="button">
        Fetching Data Demo
      </button>
      <button onClick={() => handleShowPostDataDemo()} className="button">
        Posting Data Demo
      </button>
      <hr />
      {showFetchData ? <FetchingData /> : <Modal dismissModal={onDismissModal} />}
    </div>
  );
  
}

export default App;