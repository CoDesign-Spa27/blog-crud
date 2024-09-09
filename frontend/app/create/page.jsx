"use client"
import CreatePost from '../../components/CreatePost';
import React, { useState } from 'react';
import axiosInstance from '../../lib/axios';
import { useRouter } from 'next/navigation';
import Loader from '../../components/Loader'
import { useForm } from "react-hook-form";

const Page = () => { 
  const router = useRouter()
  const [isLoading,setIsLoading] = useState(false)

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const handleCreatePost= async(data)=>{
try{
  setIsLoading(true)
  const response = await axiosInstance.post('/posts',data)
  console.log("Post created:", response.data);
  router.push("/posts")
}catch(err){
  console.error("Error creating post:", err);
}finally{
  setIsLoading(false)
}
  }
  return (
    <>
    {isLoading ? (
<div className='flex items-center justify-center'>
 <Loader />
</div>
    ):(

    <div className='min-h-screen flex items-center justify-center   p-8'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-lg w-full'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Create a New Post</h2>
        <CreatePost form={form} onSubmit={handleCreatePost} />
      </div>
    </div>
    )

    }
    </>
  );
};

export default Page;
