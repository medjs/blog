import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
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
            <header className="p-2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold underline items-start">this is a contact page</h1>
                </div>
            </header>
        </>
    )
}
