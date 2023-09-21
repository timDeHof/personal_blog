import React, { useEffect, useState } from "react";
import moment from "moment";
import parse from "html-react-parser";

import { getComments } from "../services";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className='p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
          <h3 className='pb-4 mb-8 text-xl font-semibold border-b'>
            {comments.length} Comments
          </h3>
          {comments.map(({ name, createdAt, comment }, index) => (
            <div key={index} className='pb-4 mb-4 border-b border-gray-100'>
              <p className='mb-4'>
                <span className='font-semibold'>{name}</span> on{" "}
                {moment(createdAt).format("MMM DD, YYYY")}
              </p>
              <p className='w-full text-gray-600 whitespace-pre-line'>
                {parse(comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;
