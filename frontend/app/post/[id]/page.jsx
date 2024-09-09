"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card"
import { Button } from "../../../components/ui/button"
import Loader from '../../../components/Loader'
 
import axiosInstance from '../../../lib/axios'
import { useParams, useRouter } from 'next/navigation'
import { Edit, Pencil } from 'lucide-react'
const page = () => {
  const [post, setPost] = useState(null)
  const [isLoading,setIsLoading] = useState(false)

  const router = useRouter()
  const params = useParams();
  const { id } = params;

  useEffect(() => {
try{
setIsLoading(true)
  if (id) {
    axiosInstance.get(`/posts/${id}`).then((res) => setPost(res.data)).catch((error) => {
      console.error("Error fetching post:", error);
    
    });
  }
}catch(err){
  console.log("error fetching data"+ err)
}finally{
  setIsLoading(false)
}
  }, [id]);
  

 
  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
       <Loader />

      </div>
    );
  }

  return (
    <>
     {isLoading ? (
<div className='flex items-center justify-center'>
 <Loader />
</div>
    ):(
    <div className="container mx-auto p-6">
      {/* Post Card */}
      <Card className="max-w-3xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-6">{post.content}</p>
          <div className="flex justify-end gap-4">
            <Button variant="secondary" onClick={() => router.push('/posts')}>
              Go Back
            </Button>
            
            <Button className="flex gap-2 items-center" onClick={() => router.push(`/edit/${id}`)}>
             <Pencil className='w-4 h-4' />  Edit
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
    )}
    </>
  )
}

export default page;
