import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
// import { Images } from '@/next.config'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
    <title>Hunting</title>      
    </Head>
    <Script src="./sc.js" strategy='lazyOnload'></Script>




    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div className="text-center mt-10">
      <h1 className="text-6xl font-bold">Hunting Coder</h1>
      <div className="flex justify-center items-center my-5">
      <Image className="rounded-2xl object-cover" src="/secondcodepic.avif" alt="" width={237} height={80} style={{ width: "auto", height: "auto" }}/>
      </div>
      <p className="mt-10 text-center text-lg">A Blog For Hunting Coder By Hunting Coder</p>
      </div>
    </main>
    </>
  )
}
