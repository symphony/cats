// asyncBreeds.js
import fs from 'fs';

const breedDetailsFromFile = function(breed, callback) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    callback(!error ? data : undefined);
  });
};

export default breedDetailsFromFile;