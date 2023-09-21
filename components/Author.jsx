import React from "react";
import Image from "next/image";

// import { grpahCMSImageLoader } from "../util";

const Author = ({ author }) => {
  const { name, photo, bio } = author;
  return (
    <div className='relative p-12 mt-20 mb-8 text-center bg-black rounded-lg bg-opacity-20'>
      <div className='absolute left-0 right-0 grid -top-14 place-items-center'>
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={name}
          height={100}
          width={100}
          className='align-middle rounded-full'
          src={photo?.url}
        />
      </div>
      <h3 className='mt-4 mb-4 text-xl font-bold text-white'>{name}</h3>
      <p className='text-white text-ls'>{bio}</p>
    </div>
  );
};
export default Author;
