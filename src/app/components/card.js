"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  description,
  imageURL,
  link,
  moreInfoContent,
  linkText,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex min-h-96 flex-col max-w-md h-full rounded-xl overflow-hidden m-4  border-neutral gradientMain  border-2  shadow-xl">
      <div className="w-full h-52 relative">
        <Image
          src={imageURL}
          alt={title}
          fill 
          className="rounded-t-xl object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-base flex-grow min-h-40">{description}</p>

        <div className="mt-4 flex justify-center">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="w-32"
          >
            <button className="w-full h-16 rounded-2xl bg-secondary border-neutral shadow-xl p-2 border-4 text-base-100 hover:scale-95 duration-100 ease-in-out">
              {linkText ? linkText : "View Site" }
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
