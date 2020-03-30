const fs = require('fs')
const path = require('path')
const http = require('http')
http.createServer(function(req,res){
    // res.write("Please enter a message below:");
    
    //create and write to file
    fs.writeFile(path.join(__dirname, '/message.txt'), 'please enter a message below',
    err =>{
        if (err) throw err;
        console.log('file created...')
    })
    
    fs.readFile('form.html'),
    function(err,data){
        res.writeHead(200,{'content-Type': 'text/html'})
        res.write(data)
        res.end();
    }
    
}).listen(8080,()=>console.log("server running..."))