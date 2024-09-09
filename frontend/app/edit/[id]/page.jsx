"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axiosInstance from "../../../lib/axios";
import { useRouter, useParams } from "next/navigation";
import { Button } from "../../../components/ui/button";
import Loader from "../../../components/Loader";
import CreatePost from "../../../components/CreatePost";  

const EditPostPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState(null);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const res = await axiosInstance.get(`/posts/${id}`);
        setPost(res.data);
      
        form.reset({
          title: res.data.title,
          content: res.data.content,
        });
      } catch (err) {
        console.error("Error fetching post", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [id, form]);

  const handleUpdate = async (values) => {
    try {
      await axiosInstance.put(`/posts/${id}`, values);
      router.push(`/post/${id}`);

    } catch (err) {
      console.error("Error updating post", err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className='min-h-screen flex items-center justify-center   p-8'>
      <div className='bg-white rounded-lg shadow-lg p-8 max-w-lg w-full'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Edit Post</h2>
 
        <CreatePost form={form} onSubmit={handleUpdate} />
      </div>
    </div>
  );
};

export default EditPostPage;
