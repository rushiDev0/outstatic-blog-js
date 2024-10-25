import React from 'react';
import DateFormatter from "@/components/custom/DateFormatter";
import Link from "next/link";

export default function BlogCard({title, slug, description, coverImage, publishedAt, tags}) {
    if(!title) return null;
    return (
        <Link href={`/blog/${slug}`} className="group flex flex-col p-4 gap-4">
            <div className="w-full aspect-video overflow-hidden">
                <div className="w-full aspect-video group-hover:scale-110 transition-all duration-300 ease-linear bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${coverImage})`}}></div>
            </div>
            <div className="">
                <p className="text-sm"><DateFormatter dateString={publishedAt}/></p>
            </div>
            <div className="">
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {title}
                </h3>
                <p className="leading-7 [&:not(:first-child)]:mt-4 line-clamp-3">
                    {description}
                </p>
            </div>
            <div className="flex flex-wrap justify-start items-center gap-4">
                {tags?.map(({label, value}) => (
                    <p key={value} className="inline-block ">{label}</p>
                ))}
            </div>
        </Link>
    );
}
