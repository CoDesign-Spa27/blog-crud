"use client";
import { Button } from "./ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

const CreatePost = ({form, onSubmit }) => {
   

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
      
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter post title"
                  {...field}
                  {...form.register("title", {
                    required: "Title is required",
                  })}
                />
              </FormControl>
              <FormMessage>{form.formState.errors.title?.message}</FormMessage>
            </FormItem>
          )}
        />
        
      
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-black">Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter post content"
                  {...field}
                  {...form.register("content", {
                    required: "Content is required",
                  })}
                />
              </FormControl>
              <FormMessage>{form.formState.errors.content?.message}</FormMessage>
            </FormItem>
          )}
        />
 
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default CreatePost;
