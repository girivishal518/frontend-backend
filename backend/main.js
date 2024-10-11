import http from 'node:http'
import { config } from 'dotenv';
import { insert } from './index.js';
config({path:'./.env'})
console.log(process.env.PORT,"process");


const server = http.createServer((req,res)=>{
    console.log("Requested....", req.method, req.url);
    
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    
    console.log("Came after");
    

    if(req.url === '/' && req.method==='GET'){
        res.writeHead(200, {"Content-Type":'text/html'})
        res.end("<h1>hello from backend</h1>")
    }
    else if(req.url==='/submit' && (req.method==="POST" || req.method==="OPTIONS"))
    {
        console.log("Came inside / submit");
        let body = '';
        let json = {}
        
        req.on('data', (chunk) =>{
            body += chunk.toString()
            json= JSON.parse(body);
        }) 
        req.on('end', ()=>{
            console.log(json);
            insert(json.name ,json.email,json.phone,json.pass);
            console.log("Ibserted Success .....");
            
            return
        })

        res.writeHead(200,{"Content-Type":'text/plain'})
        res.end("submit successfully.....")
    }

    else{
        res.writeHead(404, {"Content-Type":'text/html'})
        res.end("<h1>page not found</h1>")
    }


})
server.listen(process.env.PORT || 5000,()=>{
    console.log(`Listening on ${process.env.PORT || 5000}` );
    
})

