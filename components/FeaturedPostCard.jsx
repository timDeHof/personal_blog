import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => {
  const { featuredImage, title, slug, author, createdAt, excerpt } = post;
  return (
    <div className='relative h-72'>
      <div
        className='absolute inline-block w-full bg-center bg-no-repeat bg-cover rounded-lg shadow-md h-72'
        style={{ backgroundImage: `url('${featuredImage?.url}')` }}
      />
      <div className='absolute w-full bg-center rounded-lg opacity-50 bg-gradient-to-b from-gray-400 via-gray-700 to-black h-72' />
      <div className='absolute flex flex-col items-center justify-center w-full h-full p-4 rounded-lg'>
        <p className='mb-4 text-xs font-semibold text-white text-shadow'>
          {moment(createdAt).format("MMM DD, YYYY")}
        </p>
        <p className='mb-4 text-xl font-semibold text-center text-white text-shadow'>
          {post.title}
        </p>
        <div className='absolute flex items-center justify-center w-full bottom-5'>
          <Image
            unoptimized
            alt={author?.name}
            height={30}
            width={30}
            className='align-middle rounded-full drop-shadow-lg'
            src={author?.photo?.url}
          />
          <p className='inline ml-2 font-medium text-white align-middle text-shadow'>
            {author?.name}
          </p>
        </div>
      </div>
      <Link href={`/post/${slug}`}>
        <span className='absolute w-full h-full cursor-pointer' />
      </Link>
    </div>
  );
};
export default FeaturedPostCard;
