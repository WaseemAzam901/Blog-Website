import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [blog, setblog] = useState([])
  useEffect(()=>{
    console.log("use Effect Is Ready")
    fetch("http://localhost:3000/api/blog") 
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Returns a Promise
    })
    .then(data => {
      console.log('Data:', data);
      setblog(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [])
  return (
    <>
      {blog.map((blogitem)=> {
        return <div key={blogitem.title} className="blog flex justify-center items-center my-4">
          <div className="blogItem flex flex-col justify-center items-center">
          <Link href={`/blogpost/${blogitem.slug}`}>
          <h3 className="font-bold text-2xl mt-4">{blogitem.title}</h3></Link>
          <p className='w-[45vw]'>{blogitem.content.substr(0,140)}</p>
          </div>
        </div>
      })}
      <div className="blog flex justify-center items-center my-14">
        <div className="blogItem">
          <h2 className="font-bold text-4xl">Popular Blog</h2>
          <Link href={'/blogpost/learn-javascript'}>
          <h3 className="font-bold text-2xl mt-4">Hello Blog 1</h3></Link>
          <p>Lorem ipsum dolor sit</p>
          <h3 className="font-bold text-2xl">Hello Blog 2</h3>
          <p>Lorem ipsum dolor sit</p>
          <h3 className="font-bold text-2xl">Hello Blog 3</h3>
          <p>Lorem ipsum dolor sit</p>
        </div>

      </div>
    </>
  )
}

export default Blog