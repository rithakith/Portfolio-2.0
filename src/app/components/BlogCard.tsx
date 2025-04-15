// components/BlogCard.tsx
import React from 'react';
import Image from 'next/image';
import { ChevronsRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  image: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, image, link }) => {
  return (
    <div className='w-full  max-w-[400px] relative mt-4 h-[400px] group dark:bg-black  dark:border-0 border overflow-hidden rounded-md dark:text-white text-white'>
      <figure className='w-full h-full rounded-md overflow-hidden'>
        <Image
          src={image}
          alt='blog'
          width={600}
          height={600}
          className='h-full w-full scale-105 group-hover:scale-100 rounded-lg object-cover transition-all duration-300'
        />
      </figure>
      <div className='absolute top-0 left-0 w-full h-full transition-all duration-300 bg-gradient-to-b from-[#00000025] via-[#0205cc5b] to-black'></div>
      <article className='p-4 space-y-2 absolute bottom-0 md:-bottom-10 group-hover:bottom-0 transition-all duration-300'>
        <h1 className='sm:text-2xl text-xl text-white font-semibold capitalize w-[90%]'>{title}</h1>
        <a
  href={link}
  className='sm:text-2xl  dark:text-white text-white font-normal 
             opacity-100 sm:translate-y-0 
             md:group-hover:opacity-100 md:opacity-0 
             md:translate-y-2 md:group-hover:translate-y-0 
             pt-2 pb-2 flex gap-1 transition-all duration-300 bg-color1 sm:bg-transparent px-4 sm:px-0 w-fit sm:w-full rounded-sm sm:rounded-0 '
>
  Read Story
  <span>
    <ChevronsRight />
  </span>
</a>

      </article>
    </div>
  );
};

export default BlogCard;
