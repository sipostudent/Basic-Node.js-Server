// What is it? - A basic server to listen for incoming requests
// What does it do? - When someone sends a request to the home page url it should respond with predefined html text.

// req = request
// res = response

// POST requests supply additional data from the client (browser) to the server in the message body.
// GET requests include all required data in the URL.

let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended:false}))

ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
    <p>What color is the sky on a sunny day</p>
    <input name="skyColor" autocomplete="off">
    <button>Submit Answer</button>
    </form>
    `)
})
ourApp.post('/answer', function(req, res) { 
    if (req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that is incorrect.</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

ourApp.get('/answer', function(req, res) { 
    res.send("Are you lost? There is nothing to see here.")
})

ourApp.listen(3000)