var fs = require('fs');
///////////////////////////
//fs.appendFile('newFile.txt', 'New Content for File!', function(err) {
//  if (err) throw err;
  //console.log('New Content Saved!');
//});
//////////////////////////

//////////////////////////
//fs.open('newFile2.txt', 'w', function (err, file) {
  //if (err) throw err;
  //console.log('New Empty File Created');
//});
/////////////////////////

fs.writeFile('newFile3.txt', 'Overwrite Every Time', function (err) {
  if (err) throw err;
  console.log('File added or overwritten');
});
