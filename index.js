const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST");
//     //console.log(req);
//     res.send("Abdullah Naim Software Developer")
// })

app.get('/', (req, res) => {
    console.log('This is Home.');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit!!!`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the post Id: ${postId} of the ${subreddit} subreddit`);
})

app.get('/cars', (req, res) => {
    console.log('Car Requested');
})

app.get('/watch', (req, res) => {
    res.send('watch requested');
})


app.get('*', (req, res) => {
    console.log('Unknown location request');
})

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});