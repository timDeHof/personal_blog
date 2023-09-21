import React from "react";
import moment from "moment";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
const PostDetailMd = ({ post }) => {
  const markdown = post.content.markdown;

  const components = {
    p: (p) => {
      return (
        <p className='mb-8 text-gray-500 dark:text-gray-400 '>{p.children}</p>
      );
    },
    strong: (strong) => {
      return <span className='font-bold'>{strong.children}</span>;
    },
    em: (em) => {
      return <span className='italic'>{em.children}</span>;
    },
    h2: (h2) => {
      return <h2 className='mb-4 text-2xl font-semibold'>{h2.children}</h2>;
    },
    h3: (h3) => {
      return <h3 className='mb-4 text-xl font-semibold'>{h3.children}</h3>;
    },
    h4: (h4) => {
      return <h4 className='mb-4 font-semibold text-md'>{h4.children}</h4>;
    },
    a: (a) => {
      return (
        <Link
          href={a.href}
          title={a.title}
          className='font-semibold text-sky-400 hover:text-sky-800'>
          {a.children}
        </Link>
      );
    },
    ul: (ul) => {
      return (
        <ul class='mb-4 max-w-2xl space-y-1 text-gray-500 list-disc list-inside my-auto ml-24 dark:text-gray-400'>
          {ul.children}
        </ul>
      );
    },
    ol: (ol) => {
      return (
        <ol className='max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400'>
          {ol.children}
        </ol>
      );
    },
    img: (img) => {
      return (
        <Image
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className='align-middle rounded-lg'
        />
      );
    },
  };

  return (
    <>
      <div className='pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
        <div className='relative mb-6 overflow-hidden shadow-md'>
          <Image
            src={post.featuredImage.url}
            alt=''
            fill
            className='object-cover object-top w-full h-full rounded-t-lg shadow-lg lg:rounded-lg'
          />
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex items-center w-full mb-8'>
            <div className='items-center justify-center hidden mr-8 md:flex lg:mb-0 lg:w-auto'>
              <Image
                alt={post.author.name}
                height={30}
                width={30}
                className='align-middle rounded-full'
                src={post.author.photo.url}
              />
              <p className='inline ml-2 text-lg font-medium text-gray-700 align-middle'>
                {post.author.name}
              </p>
            </div>
            <div className='font-medium text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='inline w-6 h-6 mr-2 text-pink-500'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <span className='align-middle'>
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
          <h1 className='mb-8 text-3xl font-semibold text-center'>
            {post.title}
          </h1>
          <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default PostDetailMd;
