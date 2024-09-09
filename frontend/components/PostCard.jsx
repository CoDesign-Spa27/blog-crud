"use client";
import * as React from "react";

import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useRouter } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";

export function PostCard({ post, onDelete }) {
  const router = useRouter();
  const postContent = post.content
  ? post.content.split(' ').slice(0, 10).join(' ') + '...'
  : 'No content available';
 
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">{postContent}</div>
      </CardContent>
      <CardFooter className="flex gap-5">
        <Button onClick={() => router.push(`/post/${post.id}`)}>View Post</Button>

        <AlertDialog>
        <AlertDialogTrigger>
          <Button  className="bg-red-400 hover:bg-red-500" >
       Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-black border-none">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              blog and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => onDelete(post.id)}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
       
      </CardFooter>
    </Card>
  );
}
