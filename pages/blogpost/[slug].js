import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'



const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  //sab say last walay function say value prop ki form main aati hai aur ussay hum use kar rahay hain state ki initiial value set karnay k liye
  const [blog, setblog] = useState(props.dataj);
  //  yeh router bus farigh hai bus is say hum value nikal k slug ko de rahay hain jo hamaray itnay kaam ka nahi hai bus samjho practice k liye issay delete nahi kiya  main bus issay is liye delete nahi kar raha takay ap ko yeh method bhi aye k router say value kesay nikaltay hain warna ap nichay comment wala consolelog dekho us ko print kar k bhi hum yeh kaam lay saktay hain
    const router = useRouter();
    const {slug} = router.query;
    // console.log(blog.slug)
  return (
    <>
    
    <div className="flex flex-col justify-center items-center my-20">
    <h1 className="text-4xl">Hello {slug}</h1>
    <hr />
    {/* yahn hum ny blog && blog.content is liye likha k agar in case state ko koi value nahi detay intial for example const [blog, setblog] = useState(); to error na aye is say hoga yeh k agar state khali hai toh yeh line nahi chalay gi kyu k hum ny kaha hai content tabhi access karo jab us main kuch ho*/}
    {/* ap neechay wali line ki jagah yeh bhi likh saktay thay agar ap fuction use nahi karna chahateay createMarkup wala {blog && <div className="text-lg px-20 py-10" dangerouslySetInnerHTML={{__html: blog.content}}></div>} aur {__html: blog.content} opject hai is liye hum ny issay {} main likha */}
    {/* yahn say hum upper function ko blog content ki value pass kar rahay hain aur wo dangerously set html ko use kartay huway us main say html tag hata k text aur images dikha raha hai warna ap ko images nahi dikhti bus images k tag dikhtay */}
    {blog && <div className="text-lg px-20 py-10" dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    </div>
    </>
    
  )
}

// yehh function serverside rendering kar k de raha hai 

export async function getServerSideProps(context) {

 // hum yahan router jo k takreeban eik hook hai ussay use nahi kar saktay is liye ab humain url main say slug nikalnay k liye context jo k is function ka takreeban object hai us ki zarrorat parhi takay hum value hasil kar sakain slug ki
  const {slug} = context.query;
  const data = await fetch(`http://localhost:3000/api/getblog?salma=${slug}.json`)
  // data.json()
  // This is a method provided by the Fetch API for response objects.
  // It is used to extract the JSON body content from a response object.
  // It returns a promise that resolves to the parsed JSON data.
  const dataj= await data.json();

  return { props: { dataj } }
}

export default Slug;