
// 1. Use the inquirer npm package to get user input.

import inquirer from 'inquirer';
import fs from "fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
        message: "Type in URL: ",
        name: "URL",
    },
])
.then((answers) => {
  const url = answers.URL;
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  console.log(answers);

  fs.writeFile("URL.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
})

