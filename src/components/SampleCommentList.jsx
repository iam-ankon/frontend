import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SampleCommentList = () => {
  const [sampleComments, setSampleComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/sample-comments/')
      .then(response => {
        setSampleComments(response.data);
      })
      .catch(error => {
        console.error('Error fetching SampleComments:', error);
      });
  }, []);

  return (
    <div>
      <h2>Sample Comments</h2>
      <ul>
        {sampleComments.map((comment) => (
          <li key={comment.id}>
            <Link to={`/sample-comments/${comment.id}`}>{comment.comment}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SampleCommentList;
