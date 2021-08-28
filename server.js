const http = require('http');
const fs =require('fs');
const _ = require('lodash');


const server = http.createServer((req,res)=>{

// set header content type
res.setHeader('Content-Type','text/html');

let path = './Views/';
switch(req.url)
{
    case '/':
        path+='bedair.html';
        break;
    case '/login':
        path+='login.html';
        break;
    case '/register':
        path+='login.html';
        break;
    default:
        path+='bedair.html';
        break;
}
fs.readFile(path,(err,data)=> {
if(err){
    console.log(err);
    res.end();
}else{
    //res.write(data);
    res.end(data);
}
});

});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
})