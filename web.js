const http = require('http');
const fs = require('fs');
const url = require('url');

var server= http.createServer(function(req, res){
    console.log(req.url)
   let address = url.parse(req.url, true);
   let query = address.query;
   let path = address.pathname;
    console.log(path)
   if(path =="/login"){
    var content = fs.readFileSync('templates/log.html','utf8' );
   res.end(content);
}
else if (path == "/result"){
    console.log(query);
    res.write(`<h1> FIRST NAME:${query.First_Name }</h1>`);
    res.write(`<h1> LAST NAME:${query.Last_Name }</h1>`);
    res.write(`<h1> Email:${query.email }</h1>`);
    res.end(`<h1> PASSWORD:${query.password }</h1>`);
 
}
});
server.listen(3000);

console.log("Hello")