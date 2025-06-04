const express = require("express");
const app = express();
const port = 3014;

app.use(express.json());

const users = [];

function genratetoken() {
    return Math.random();

}
app.post('/signup', function(req, res) {
    const userName = req.body.username;
    const passWord = req.body.passWord;

    users.push({
        userName: userName,
        passWord: passWord
    })
    res.json({ message: "hey" })
});

app.post('/signin', function(req, res) {
    res.json("signin route");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});