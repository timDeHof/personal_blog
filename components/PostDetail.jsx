import React from "react";
import moment from "moment";
import Link from "next/link";
const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, type, obj) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (obj.image) {
        const { src, alt, height, width } = obj.image;
        modifiedText = [
          ...modifiedText,
          <img key={index} src={src} alt={alt} height={height} width={width} />,
        ];
      }
    }
    switch (type) {
      case "heading-two":
        return (
          <h2 key={index} className='mb-4 text-2xl font-semibold'>
            {modifiedText}
          </h2>
        );
        break;
      case "heading-three":
        return (
          <h3 key={index} className='mb-4 text-xl font-semibold'>
            {modifiedText}
          </h3>
        );
        break;
      case "heading-four":
        return (
          <h4 key={index} className='mb-4 font-semibold text-md'>
            {modifiedText}
          </h4>
        );
        break;
      case "paragraph":
        return (
          <p key={index} className='mb-8'>
            {modifiedText}
          </p>
        );
        break;
      case "image":
        if (obj?.image) {
          return (
            <img
              key={index}
              alt={obj.image.title || ""}
              height={obj.image.height}
              width={obj.image.width}
              src={obj.image.src}
            />
          );
        }
        break;
      case "link":
        if (obj?.openInNewTab) {
          return (
            <a key={index} href={obj.href} rel='_blank'>
              {modifiedText}
            </a>
          );
        }
        break;
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <div className='pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8'>
        <div className='relative mb-6 overflow-hidden shadow-md'>
          <img
            src={post.featuredImage.url}
            alt=''
            className='object-cover object-top w-full h-full rounded-t-lg shadow-lg lg:rounded-lg'
          />
        </div>
        <div className='px-4 lg:px-0'>
          <div className='flex items-center w-full mb-8'>
            <div className='items-center justify-center hidden mr-8 md:flex lg:mb-0 lg:w-auto'>
              <img
                alt={post.author.name}
                height='30px'
                width='30px'
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
          {console.log(post.content.markdown)}
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, typeObj.type),
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })}
        </div>
      </div>
    </>
  );
};

export default PostDetail;
