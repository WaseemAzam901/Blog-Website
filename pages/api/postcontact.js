
import * as fs from 'fs';
 export default async function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).send(req.body)
    // hum directory read karwa rahay hain takay humain kitni file hain us directly main wo pata chal sakay kyu k based on that ap neechay plus one karwa k new file bana rahay
     const data =await fs.promises.readdir('contactdata');
    // yahn hum eik file bana rhaya hain jis main data safe hoga jab bhi user koi data bhejay gah contact page say wo req object main aye gah phir hum ussay req ki body say nikal k string main convert karain gy stringify method say aur ussay contactdata naam k folder main safe karwa dein gy
    //wal.length+1 is liye kiya k directory main eik file ho contactdata walay toh next file 2.json k naam say banay and so on 
    fs.promises.writeFile(`contactdata/${data.length+1}.json`, JSON.stringify(req.body))
  } else {
    res.status(200).send({ message: 'Only POST requests allowed' })
  }
}