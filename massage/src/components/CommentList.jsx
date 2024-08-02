import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const CommentList = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('http://localhost:8000/comments');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched data:', data); // Log fetched data
        setComments(data || []); // Directly set the data since it's an array
      } catch (error) {
        console.error('Failed to fetch comments:', error);
        setComments([]); // Ensure comments is an empty array on error
      }
    };

    fetchComments();
  }, []);

  return (
    <div className="px-4 pb-8 space-y-4 lg:px-6 bg-[#f1f5f9]">
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))
      ) : (
        <p>No comments available.</p>
      )}
            <div className="flex items-center col-span-1 pt-3 space-x-3">
        <img src="/images/user.jpg" className="w-12 h-12 rounded-full" alt="Image placeholder" />
        <div className="flex-1">
          <input
            type="text"
            className="w-full px-4 py-4 text-sm placeholder-gray-400 border rounded-md border-gray-50"
            placeholder="Leave a message"
          />
        </div>
      </div>
    </div>
  );
};

export default CommentList;
