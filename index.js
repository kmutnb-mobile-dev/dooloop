var http = require('http');

var options = {
  host: 'www.goldtraders.or.th',
  port: 80
};

http.get(options, function(res) {
  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    parseHtml(body);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

function parseHtml(body) {
  var cheerio = require('cheerio'),
    $ = cheerio.load(body);

  console.log($('#DetailPlace_uc_goldprices1_lblBLBuy').text());
}