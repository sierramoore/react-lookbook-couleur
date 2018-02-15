const cheerio = require('cheerio');
var request = require('request');

// const $ = cheerio.load();



request('https://inhabitat.com/diy-how-to-make-your-own-green-terrarium-to-keep-or-give-away-for-the-holidays/', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    const $ = cheerio.load(html)
    const arrayOfLinks = []
    const img = $('img').each(function(i, element){
     	console.log('---------------------')
     	arrayOfLinks.push($(element).attr('src'))
      
      console.log('---------------------')
    });
    console.log(arrayOfLinks)
  }
})
