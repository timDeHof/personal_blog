import React from "react";
import { getPosts, getPostDetails } from "@/services";
import {
  PostDetail,
  PostDetailMd,
  Categories,
  PostWidget,
  Author,
  Comments,
  CommentForm,
} from "@/components";
const PostDetails = ({ post }) => {
  const { author, categories, slug } = post;
  return (
    <>
      <div className='container px-10 mx-auto mb-8'>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-12'>
          <div className='col-span-1 lg:col-span-8'>
            <PostDetailMd post={post} />
            <Author author={author} />
            {/* <AdjacentPosts
              slug={post.slug}
              createdAt={post.createdAt}
            />  */}
            <CommentForm slug={slug} />
            <Comments slug={slug} />
          </div>
          <div className='col-span-1 lg:col-span-4'>
            <div className='relative lg:sticky top-8'>
              <PostWidget
                slug={slug}
                categories={categories.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
