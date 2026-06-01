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
    <div className='w-full max-w-[320px] relative h-[250px] group border border-white/10 overflow-hidden rounded-xl bg-white/[0.02] shadow-sm hover:border-white/20 transition-all duration-300'>
      <figure className='w-full h-full overflow-hidden'>
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className='h-full w-full scale-105 group-hover:scale-110 rounded-xl object-cover transition-transform duration-500'
        />
      </figure>
      {/* Premium overlay gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300'></div>
      
      {/* Content wrapper */}
      <article className='p-4 absolute bottom-0 left-0 right-0 flex flex-col gap-2'>
        <h3 className='text-xs font-semibold text-white tracking-tight line-clamp-2 leading-snug capitalize'>
          {title}
        </h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className='text-[11px] text-color1 hover:text-white font-semibold flex items-center gap-1 transition-colors duration-200 w-fit'
        >
          Read Story
          <ChevronsRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </article>
    </div>
  );
};

export default BlogCard;
