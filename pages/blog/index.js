import React from 'react'
import posts from './posts'
import Link from 'next/link'

const blog = () => {
    return (
        <div className='w-full mx-auto md:container '>
            <h1 className='text-center'>this is the blog</h1>
            {
                posts.map((res) =>
                (
                    <div className='border w-full/1.5 p-2 m-3 md:w-1/2 md:mx-auto'>
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
