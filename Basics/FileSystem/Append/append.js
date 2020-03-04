var fs = require('fs');

fs.appendFile('newFile.txt', 'New Content for File!', function(err) {
  if (err) throw err;
  console.log('New Content Saved!');
})
