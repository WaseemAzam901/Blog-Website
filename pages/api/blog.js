import * as fs from 'node:fs/promises';

export default async function handler(req, res) {

  try {
  const data = await fs.readdir("blogdata");
  let myfile;
  let hello = [];
  for (let index = 0; index < data.length; index++){
    const item = data[index];
    console.log(item)
    myfile = await fs.readFile("blogdata/" + item, "utf-8")
    hello.push(JSON.parse(myfile))
    console.log(hello);
    

  }
  res.send(hello);
  console.log(typeof hello);
  } catch (error) {
    console.error("Error reading files:", error);
    res.status(500).send("Internal Server Error");
  }
  

}




// const data = fs.readdir("blogdata", (err, data) => {
//   if (err) {
//     console.error('Error reading the file:', err);
//     res.status(500).send('Internal Server Error');
//     return;
//   }

//   // Send the file contents as the response
//   const allblog = [];
//   data.forEach((item)=>{
//     console.log(item)
//     readFile(('blogdata/' +  item), (d)=>{
//       allblog.push(d)
//       console.log(allblog)
//     })


//   })
//   res.status(200).json(data);
//   console.log(data);
// });