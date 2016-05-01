module.exports = createMailChimpServer

var http = require('http');
var request = require('request');

var sendToMailChimp = require('./sendToMailChimp.js');

var port = 4000 // this is the port nginx will forward to for connectedkingdom.com/save requests
var host = '127.0.0.1' //this is the local server nginx forwards to 

function createMailChimpServer (port, host) {
  http.createServer(function (req, res){ 
    var userInfo = ''
    req.on('data', function (chunk) {
      userInfo += chunk.toString()
    })
    req.on('end', function () {
      // for command line testing with curl (see unit test area at bottom)
      //res.writeHead(200, {'Content-Type': 'text/plain'});
      //res.end(body)
      
      sendToMailChimp(userInfo, function (err, MCresponse) {
        if (err) res.end(err)
        else if (MCresponse.statusCode === 200){
          res.end('success')
        }
        else {res.end('something weird happened')}
      })
    })
  }).listen(port, host );
}

if (require.main === module)
{
  console.log('abscreenwear server running at  ' + host + ':' + port)
  createMailChimpServer (port, host)
      // for command-line testing, uncomment the below, run the server from CLI, and curl:
      //curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz","password":"xyz"}' http://127.0.0.1:3000 

}
