import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



const Slug = () => {
  const [blog, setblog] = useState([]);
    const router = useRouter();
    // const malag = `${slug}.json`
    // console.log(malag)
    const {slug} = router.query;
    useEffect(() => {
      if(!router.isReady)
      return;
      console.log("use Effect of slug is running");
      fetch(`http://localhost:3000/api/getblog?salma=${slug}.json`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json(); // Make sure to invoke the json method
        })
        .then((parsed) => {
          // console.log('Data:', parsed);
          setblog(parsed);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);// Dependency array should include 'slug'
    // console.log(blog.title)
  return (
    <>
    
    <div className="flex flex-col justify-center items-center my-20">
    <h1 className="text-4xl">Hello {slug}</h1>
    <hr />
    <div className="text-lg px-20 py-10">{blog && blog.content}</div>
    </div>
    </>
    
  )
}

export default Slug;