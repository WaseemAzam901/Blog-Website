import { readFile } from 'fs';
// import { useRouter } from 'next/router'
//http://localhost:3000/api/getblog?salma=how-to-learn-javascript.json

export default function handler(req, res) {

  // Reading the contents of the file
  readFile(`blogdata/${req.query.salma}`, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Send the file contents as the response
    res.status(200).json(JSON.parse(data));
    // console.log(data);
    // console.log("Salma");
    // console.log(req.query.salma);
  });
}
