/******************************************************************************/
// Whois - Free and reliable
//
// Web service to query is a domain name is available.
/******************************************************************************/

var express = require('express');
var app = express();
require('shelljs/global');

app.get('/:domain', function (req, res) {
  var domain = req.params.domain,
      cmd = 'whois ' + domain,
      whois = exec(cmd, {silent:true}).output;

  res.send({
    domain: domain,
    whois: whois,
    available: !whois.match(/No match for/)
  });
});

var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Whois listening to http://%s:%s', host, port);
});
