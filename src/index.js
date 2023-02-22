var http = require("http");
const PORT =8081

const httpServer = http.createServer(handleServer);

function handleServer(req, res) {
    const temp = {
        phone: '18602100000',
        email: 'guestcaredominos@jublfood.com'
    }
    const url = req.url
    if (url == "/welcome") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end("Welcome to Dominos!")
    } else if (url == "/contact") {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(temp))
        // res.end("HI there")
    }else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.end("<h3>Error Page</h3>")
    }

}
httpServer.listen(PORT,()=>{
    console.log(`Document is running on port ${PORT}`)
})

module.exports = httpServer;