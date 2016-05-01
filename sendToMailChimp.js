module.exports = sendToMailChimp

var http = require('http');
var fs = require('fs');
var request = require('request');

var apiKey = require('./api-key-mailchimp')
var base64UserKey = new Buffer("abscreenwear:" + apiKey).toString('base64')

var options = {
  url: "https://us11.api.mailchimp.com/3.0/lists/b4b55d4953/members/",  //10d70652d8 was jeff's
  headers: {
    "Authorization": "Basic " + base64UserKey,  
    "Content-Type": "application/json",
    "User": "AbScreenwear"
  },
}


function sendToMailChimp (userInfo, callback) {
  options.body = userInfo
  // subscribe the user
    // POST to: /3.0/lists/9e67587f52/members/. 
    // The request body should be a JSON object that contains the member information you want to add, including status and any other required list fields.
    // You'll receive errors if the address is already on your list, or if any required merge_fields are missing. Find the full list of fields available in the List Member Schema.
    //
    //{
    //  "email_address": "urist.mcvankab@freddiesjokes.com", 
    //  "status": "subscribed", 
    //  "merge_fields": {
    //    "FNAME": "Urist", 
    //    "LNAME": "McVankab"
    //  }
    //}
  request.post(options, function (err, res, body){
    if (err) callback(err)
    else {
      console.log('success! \n%j', res)
      callback(null, res)
    }
  })
}

if (require.main === module){
  var userInfo = {
    "email_address": "jeffmjack+test" + Math.random().toString() + "@gmail.com", 
    "status": "subscribed", 
    "merge_fields": {
      "FNAME": "Jeff", 
      "LNAME": "Jackson"
    }
  }
  console.log('testing mailchimpRequest.js by sending the following test JSON to mailchimp: \n', userInfo, '\nwith the following options object:\n ', options)
  console.log('base64UserKey is ' + base64UserKey)
  sendToMailChimp(JSON.stringify(userInfo), function (err, res){
    if (err) throw err
    else console.log('\ntest passed - mailchimp responded')
  })
}
