// Import necessary dependencies
import { MDXRemote } from 'next-mdx-remote';
import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Define a custom component for handling MDX content
const MDXComponents = {
    // Custom Link component
    a: ({ href, children }) => (
        <Link href={href} passHref>
            <a>{children}</a>
        </Link>
    ),

    // Custom Image component
    img: (props) => (
        <Image {...props} alt={props.alt || 'Image'} layout="responsive" />
    ),
};

// Main component to render MDX content
export default function MdxRenderer({ mdxString }) {
    // Memoize the MDXRemote for performance
    const mdxSource = useMemo(() => {
        return {
            compiledSource: mdxString,
            // Add any additional options if needed
        };
    }, [mdxString]);

    return (
        <div>
            <MDXRemote {...mdxSource} components={MDXComponents} />
        </div>
    );
};