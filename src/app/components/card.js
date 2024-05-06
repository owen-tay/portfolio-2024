"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function Card({ title, description, imageURL, link, moreInfoContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md  rounded-xl overflow-hidden m-4 dark:bg-neutral border-green-owen shadow-xl">
      <div className="w-full h-48 relative">
        <Image 
          src={imageURL} 
          alt={title} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-xl"
        />
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
        
        <div className="flex justify-center mt-3 items-center">
          
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            <button  className="rounded-2xl bg-secondary border-neutral w-32 h-14 shadow-xl  p-2 border-4 text-base-100 hover:scale-95 duration-100 ease-in-out">
              Visit Site
            </button>
          </Link>

          
        </div>

      </div>
    </div>
  );
}