const  http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('Nigga')
    }
    res.end(`<h1>Oops!</h1>`)
    
})

server.listen(5000)