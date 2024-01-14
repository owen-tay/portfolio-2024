"use client"

import { useState } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export default function Card({ title, description, imageURL, link, moreInfoContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg m-4 bg-neutral border-green-owen">
      <img className="w-full" src={imageURL} alt={title} />
      
      <div
        className={`transition-max-height duration-300 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
        style={{ overflow: 'hidden' }}
      >
        {isExpanded && (
          <div className="px-6 py-4">
            <ReactMarkdown>{moreInfoContent}</ReactMarkdown>
          </div>
        )}
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{description}</p>
        <div className="flex justify-between items-center">
          <Link target="_blank" rel="noopener noreferrer" href={link}>
            <button  className="rounded-2xl bg-green-400 p-2 border text-base-100 hover:scale-95 ">
              Visit Site
            </button>
          </Link>
          <button
            onClick={toggleExpansion}
            className="rounded-2xl bg-green-400 p-2 border text-base-100 hover:scale-95 "
          >
            {isExpanded ? 'Less Info' : 'More Info'}
          </button>
        </div>
      </div>
    </div>
  );
}