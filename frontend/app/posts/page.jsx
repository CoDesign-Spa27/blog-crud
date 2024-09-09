"use client";
import { PostCard } from "../../components/PostCard";
import axiosInstance from "../../lib/axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loader from '../../components/Loader'

const page = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading,setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    axiosInstance.get("/posts")
      .then((res) => {
        setPosts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false); 
      });
  }, []);

  const handleDelete = (id) => {
    axiosInstance.delete(`/posts/${id}`).then(() => {
      setPosts(posts.filter((post) => post.id !== id));
    });
  };

  return ( 
    <>
     {isLoading ? (
<div className='flex items-center justify-center'>
 <Loader />
</div>
    ):(
    <div className=" flex flex-col items-center justify-center ">

    <div className="py-10 font-bold">
    <div className="bg-white mx-5 rounded-lg">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Blog Posts</h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
        </p>
      </div>

      <div className="flex items-center gap-4">

        <Link href={"/create"}>
        <button
          className="inline-block rounded bg-black px-5 py-3 text-sm font-bold text-white transition hover:bg-neutral-800 focus:outline-none focus:ring"
          type="button"
          >
          Create Post
        </button>
          </Link>
      </div>
    </div>
  </div>
</div>
    </div>
    <div className="grid  p-5 grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 ">

      {posts.map((post) => (
        <PostCard key={post.id} post={post} onDelete={handleDelete} />
      ))}
    </div>
        </div>
    )}
      </>
  );
};

export default page;
