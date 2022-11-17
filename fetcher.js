const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const content = 'This is defintely a significant amount of content!';

const fetcher = (() => {
  request(args[0], (err) => {
    if (err) {
      console.error(err);
    }

    fs.writeFile(args[1], content, err => {
      if (err) {
        console.error(err);
      }
      console.log('File written successfully.');
      fs.stat(args[1], (err, stats) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(`Downloaded and saved ${stats.size} bytes to ${args[1]}`);
      })
    });
  })
});

fetcher();