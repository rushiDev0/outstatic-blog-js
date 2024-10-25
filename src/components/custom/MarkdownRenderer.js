import React from 'react';
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import {Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow} from "@/components/ui/Table";
import remarkGfm from "remark-gfm";

const MarkdownToHtml = ({ markdown, customComponents }) => {
    return (
        <div>
            <ReactMarkdown components={customComponents} remarkPlugins={[remarkGfm]}>
                {markdown}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownToHtml;

export const mdxCustomComponents = {
    // h1: ({ children }) => <h1 style={{ color: 'blue' }}>{children}</h1>,
    // p: ({ children }) => <p style={{ fontSize: '18px' }}>{children}</p>,
    a: ({children, href}) => <Link href={href} target={isInternalUrl(href) ? '_self' : '_blank'}>{children}</Link>,
    img: ({src, alt}) => <span className="inline-flex justify-center items-center w-full"><img src={src} alt={alt} className="max-w-[30rem] aspect-auto"/></span>,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    tr: TableRow,
    th: TableHeaderCell,
    td: TableCell,
};

const isInternalUrl = (url) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    return url.startsWith(baseUrl) || url.startsWith('/');
}