import React from 'react'
import posts from './posts'
import Link from 'next/link'

const blog = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-center'>this is the blog</h1>
            {
                posts.map((res) =>
                (
                    <div className='border w-1/2 mx-auto p-2 m-2 bg-slate-400'>
                        <Link href={`/blog/${res.id}`}>
                            <h1>{res.title}</h1>
                            <p>{res.description}</p>
                        </Link>
                    </div>
                )
                )
            }
        </div>
    )
}

export default blog
