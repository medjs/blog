import Head from 'next/head'
import Image from 'next/image'
import Posts from './posts'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


export default function blog({ post }) {
    let date = new Date()
    let dt = date.getDate() + '-' + date.getDay() + '-' + date.getFullYear()
    const [like, setLike] = useState(false)
    const [love, setLove] = useState(false)

    const liked = () => {
        (!like && !love) ? setLike(true) : alert('already liked this post!')
    }

    const loved = () => {
        (!like && !love) ? setLove(true) : alert('already liked this post!')
    }


    return (
        <>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Web development blog to learn javascript frameworks" key="desc" />
                <meta property="og:title" content="Welcome to ScriptoFile Blog" />
                <meta
                    property="og:description"
                    content="Hurry up! subscribe and be a part of our community and get access to all our built projects for free"
                />
                <meta
                    property="og:image"
                    content="/favicon.ico"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="container mx-auto my-10">
                <div className=" border border-gray-300 rounded-lg p-4 m-2 md:w-2/3 md:mx-auto  ">
                    <div className='flex justify-between flex-wrap items-center  my-3'>
                        <h1 className="text-3xl font-bold my-3">{post.title}</h1>
                        <p>Posted : {dt}</p>
                    </div>
                    <div className='text-justify'>
                        <p className='text-xl'>{post.description}</p>
                    </div>
                    <div className='my-3 flex items-center justify-between'>
                        <p className='text-sm'>by MED NAJJAR</p>
                        <div className='flex justify-center items-center w-2/6 md:w-1/6'>
                            <label className='flex  items-center mx-4 '>
                                <button className='mr-2' onClick={liked}><ThumbUpIcon className={`${like && 'text-blue-500'}`} /></button>
                                0
                            </label>
                            <label className='flex items-center'>
                                <button className='mr-2' onClick={loved}><FavoriteIcon className={`${love && 'text-red-500'}`} /></button>
                                1
                            </label>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                <textarea maxLength={1000} autoFocus className='border p-2 rounded-md resize-none w-80 lg:w-auto' placeholder='Comment...' id="w3review" name="w3review" rows="4" cols="50"></textarea>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Posts.map(post => ({ params: { id: post.id} }));
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const id = params.id;
    const post = Posts.find(post => post.id === id)

    return {
        props: {
            post
        }
    }
}
