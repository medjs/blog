import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../../styles/Home.module.css'
import Posts from './posts'

const inter = Inter({ subsets: ['latin'] })

export default function blog({ post }) {
    let date = new Date()
    console.log('date', date)
    let dt = date.getDate() + '-' + date.getDay() + '-' + date.getFullYear()



    return (
        <>
            <Head>
                <title>ScriptoFile</title>
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
                <div className=" text-justify border border-gray-300 rounded-lg p-4 m-2 md:w-2/3 md:mx-auto  ">
                    <div className='flex justify-between items-center'>
                        <h1 className="text-3xl font-bold my-3">{post.title}</h1>
                        <p>Posted : {dt}</p>
                    </div>
                    <p className='text-xl'>{post.description}</p>
                    <div className='my-3 flex items-center justify-between'>
                        <p className='text-sm'>by MED NAJJAR</p>
                        <div>
                            <button className='border rounded-full w-14 h-14 p-1 mx-6'>like</button>
                            <button className='border rounded-full w-14 h-14 p-1'>heart</button>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>
                                <textarea maxLength={1000} autoFocus className='border p-2 rounded-md resize-none' placeholder='Comment...' id="w3review" name="w3review" rows="4" cols="50"></textarea>
                            </label>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticPaths() {
    const paths = Posts.map(post => ({ params: { id: post.id.toString() } }));
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
