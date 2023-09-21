import React, { useState, useEffect } from "react";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";

import { getSimilarPosts, getRecentPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
        setLoading(false);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
        setLoading(false);
      });
    }
  }, [slug]);

  return (
    <div className='p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg'>
      <h3 className='pb-4 mb-8 text-xl font-semibold border-b'>
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map(({ title, featuredImage, createdAt, slug }, index) => (
        <div key={index} className='flex items-center w-full mb-4'>
          <div className='flex-none w-16'>
            <Image
              alt={title}
              height={60}
              width={60}
              className='align-middle rounded-lg'
              src={featuredImage?.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${slug}`} className='text-md' key={index}>
              {title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
