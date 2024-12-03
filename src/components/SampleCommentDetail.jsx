import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const SampleCommentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/sample-comments/${id}/`)
      .then(response => {
        setComment(response.data);
      })
      .catch(error => {
        console.error('Error fetching comment:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComment({ ...comment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/sample-comments/${id}/`, comment)
      .then(() => {
        navigate('/sample-comments');
      })
      .catch(error => {
        console.error('Error updating comment:', error);
      });
  };

  if (!comment) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Sample Comment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Comment:</label>
          <textarea name="comment" value={comment.comment} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SampleCommentDetail;
