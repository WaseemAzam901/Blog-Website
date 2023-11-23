import * as fs from 'node:fs/promises';

export default async function handler(req, res) {

  try {
  const data = await fs.readdir("blogdata");
  let myfile;
  let hello = [];
  for (let index = 0; index < data.length; index++){
    const item = data[index];
    // console.log(item)
    myfile = await fs.readFile("blogdata/" + item, "utf-8")
    hello.push(JSON.parse(myfile))
    

  }
  res.send(hello);
  } catch (error) {
    console.error("Error reading files:", error);
    res.status(500).send("Internal Server Error");
  }
  

}