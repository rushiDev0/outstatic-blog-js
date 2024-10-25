import Image from "next/image";
import {load} from "outstatic/server";
import BlogCard from "@/components/custom/blogCard";

export default async function Home() {

    const allPosts = await getData(0, 9);

    return (
        <main className="">
            <section>
                <div className="container">
                    <div
                        className="w-full flex justify-center items-center my-10 2xl:prose-2xl xl:prose-xl lg:prose-lg prose xs:prose-sm min-w-full">
                        <h1>Blog</h1>
                    </div>
                    <div className="w-full grid grid-cols-3 md:grid-cols-2 mp:grid-cols-1">
                        {[allPosts, ...allPosts].map((post, index) => (
                            <BlogCard key={index} {...post} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

async function getData(offset = 0, limit = 9) {
    const db = await load();
    return await db
        .find(
            {
                collection: "posts",
                status: 'published',
            },
            [
                "title",
                "publishedAt",
                "description",
                "slug",
                "coverImage",
                "tags",
            ]
        )
        .sort({publishedAt: -1})
        .skip(offset)
        .limit(limit)
        .toArray()
}