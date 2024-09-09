"use client"
import { useRouter } from "next/navigation";
import { PostCard } from "../components/PostCard";

 
export default function Home() {

  const router = useRouter()

  return (
    <div className=" font-[family-name:var(--font-geist-sans)] ">
      <section className="bg-neutral-900 text-white">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Welcome to Bloging.

        <span className="sm:block"> Read, Learn, Grow. </span>
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded cursor-pointer border border-gray-600 bg-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
      onClick={()=> router.push('/create')}
      >
        Create Blogs
        </a>

        <a
          className="block w-full cursor-pointer rounded border border-gray-600 px-12 py-3 text-sm font-medium text-white hover:bg-gray-600 focus:outline-none focus:ring active:bg-gray-500 sm:w-auto"
          href="#"
          onClick={()=> router.push('/posts')}
        >
          Read Blogs
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
