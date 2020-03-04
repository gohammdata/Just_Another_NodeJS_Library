var fs = require('fs');
///////////////////////////
//fs.appendFile('newFile.txt', 'New Content for File!', function(err) {
//  if (err) throw err;
  //console.log('New Content Saved!');
//});
//////////////////////////
fs.open('newFile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('New Empty File Created');
});
