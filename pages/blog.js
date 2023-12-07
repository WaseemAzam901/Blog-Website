import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = (props) => {
  const [blog, setblog] = useState(props.data)

  // phelayy hum data fetch server side rendering say nahi kar wa rahay thay toh hum ny data fetch k liye use effect ka use kiya takay data fetch tab ho jab componenet intial torr per render ho ab yeh code faltu hai lekin tumhay future main koi idea lena ho toh is liye rakh raha hu  
  // useEffect(()=>{
  //   console.log("use Effect Is Ready")
  //   fetch("http://localhost:3000/api/blog") 
  // neechay wala then fetch function ka hai kyu k wo promise return kar raha hai
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json(); // Returns a Promise
  //   })
  // yeh jo dusra then hai yeh fetch function ka nahi hai yeh balkay .json() bhi kyu k promise written karta hai is liye use kiya hai 
  //   .then(data => {
  //     console.log('Data:', data);
  //     setblog(data);
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //   });
  // }, [])
  return (
    <>
     {/* toh humain last function say jo data milay gah ussay hum ny state ko pass kiya phir us status per hum ny .map function lagaya takay us object k hum her eik variable ko access kar sakain  */}
      {blog.map((blogitem)=> {
        return <div key={blogitem.title} className="blog flex justify-center items-center my-4">
          <div className="blogItem flex flex-col justify-center items-center">
          <Link href={`/blogpost/${blogitem.slug}`}>
          <h3 className="font-bold text-2xl mt-4">{blogitem.title}</h3></Link>
          <p className='w-[45vw]'>{blogitem.metadesc.substr(0,140)}</p>
          </div>
        </div>
      })}
    </>
  )
}
// yehh function serverside rendering kar k de raha hai 

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blog`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: { data } }
}


export default Blog